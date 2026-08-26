// ============================================
// Roteador leve (SPA "de papel") — troca só o conteúdo da página sem
// recarregar o documento inteiro, pra coisas como a música de fundo nunca
// pararem ao navegar pelo site.
//
// Importante: cada página .html continua sendo um arquivo completo e
// funcional sozinho (abrir direto, favoritar, dar F5) — o roteador só
// entra em ação quando a pessoa já está no site e clica num link interno.
// ============================================
(function () {
  const PAGE_CONTENT_ID = "page-content";

  // ---- registro de limpeza: qualquer função de inicialização que crie
  // um setInterval, requestAnimationFrame ou listener no "document"/"window"
  // pode chamar window.aoLimparPagina(fn) pra garantir que isso é desligado
  // antes da próxima página entrar. Sem isso, cada troca de página ia
  // acumular timers e listeners duplicados (o clássico vazamento de SPA).
  let limpezasPendentes = [];
  window.aoLimparPagina = function (fn) {
    limpezasPendentes.push(fn);
  };

  function limparPaginaAtual() {
    limpezasPendentes.forEach((fn) => {
      try {
        fn();
      } catch (err) {
        console.warn("[router] erro ao limpar página anterior:", err);
      }
    });
    limpezasPendentes = [];
  }

  function marcarLinkAtual(pageKey) {
    document.querySelectorAll(".stamp-nav a").forEach((link) => {
      if (link.dataset.page === pageKey) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  async function irPara(url, { push = true } = {}) {
    let resposta;
    try {
      resposta = await fetch(url, { credentials: "same-origin" });
      if (!resposta.ok) throw new Error("status " + resposta.status);
    } catch (err) {
      // qualquer problema (offline, 404, etc.) — cai pra navegação normal
      window.location.href = url;
      return;
    }

    const html = await resposta.text();
    const doc = new DOMParser().parseFromString(html, "text/html");

    const conteudoNovo = doc.getElementById(PAGE_CONTENT_ID);
    const conteudoAtual = document.getElementById(PAGE_CONTENT_ID);
    if (!conteudoNovo || !conteudoAtual) {
      // estrutura inesperada — mais seguro que quebrar em silêncio
      window.location.href = url;
      return;
    }

    limparPaginaAtual();

    conteudoAtual.innerHTML = conteudoNovo.innerHTML;
    document.title = doc.title;
    const novaChave = doc.body.dataset.page || "";
    document.body.dataset.page = novaChave;
    marcarLinkAtual(novaChave);
    window.scrollTo(0, 0);

    if (push) {
      try {
        history.pushState({ url }, "", url);
      } catch {
        // em algum navegador/estado excepcional isso pode falhar — não é crítico,
        // a troca de conteúdo já aconteceu, só a URL na barra não atualiza
      }
    }

    // roda só os scripts marcados como específicos desta página — o resto
    // (música, tema, contador, bichinhos) já está rodando desde a página
    // anterior e não deve ser reiniciado
    doc.querySelectorAll("script[data-page-init]").forEach((script) => {
      try {
        // eslint-disable-next-line no-new-func
        new Function(script.textContent)();
      } catch (err) {
        console.error("[router] erro ao rodar script da página:", err);
      }
    });
  }

  function ehLinkNavegavel(link) {
    if (!link) return false;
    if (link.target && link.target !== "_self") return false;
    if (link.hasAttribute("download")) return false;
    if (link.origin !== window.location.origin) return false;
    if (!/\.html?$/.test(link.pathname)) return false;
    return true;
  }

  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // deixa "abrir em nova aba" etc. funcionar normal

    const link = e.target.closest("a[href]");
    if (!link || !ehLinkNavegavel(link)) return;

    if (link.pathname === window.location.pathname) {
      e.preventDefault(); // já está nessa página, não faz nada
      return;
    }

    e.preventDefault();
    irPara(link.href);
  });

  window.addEventListener("popstate", () => {
    irPara(window.location.href, { push: false });
  });
})();
