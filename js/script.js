// ============================================
// Para Você — lógica compartilhada
// ============================================

// ---- Listas editáveis: troque pelos filmes e receitas de vocês ----
const FILMES = [
  "Saga Crepúsculo",
  "Teen Wolf",
  "Kitty baixa renda",
  "Jujutsu Kaisen",
  "Crash Landing on You",
  "It's Okay to Not Be Okay",
  "Goblin",
  "Business Proposal",
  "Hospital Playlist",
  "Divertidamente 2",
  "Enrolados",
  "Frozen 2",
  "Como Treinar o Seu Dragão 3",
  "Zootopia 2",
  "Corra",
  "Hereditário",
  "Um Lugar Silencioso",
  "Midsommar",
  "Donnie Darko",
  "Pulp Fiction",
  "Scott Pilgrim Contra o Mundo",
  "O Farol",
  "10 Coisas Que Eu Odeio em Você",
  "Não, Não Olhe",
  "Brilho Eterno de uma Mente Sem Lembranças",
  "A Chegada",
  "It: A Coisa",
  "Legalmente Loira",
  "Laranja Mecânica",
  "Kill Bill",
  "You",
  "Brooklyn Nine-Nine",
  "Ratatouille",
  "O Grande Hotel Budapest",
  "Tenet",
  "Oppenheimer",
  "Avatar",
  "Lanters",
  "Fullmetal Alchemist: Brotherhood"
  // adicione mais filmes e séries de vocês aqui
];

const RECEITAS = [
  "Risoto de queijo",
  "Salada Caesar",
  "Steak Frites",
  "Parmegiana",
  "Pedir Algo Diferente",
  "Lasanha",
  "Macarrão ao molho branco",
  "Omurice",
  "Wrap",
  "Fondue",
  "Massa ao molho pesto com camarão",
  "Sopa com pãozinho",
  "Tacos caseiros de carne ou frango",
  "Strogonoff de frango ou carne",
  "Nhoque ao molho bolonhesa",
  "Yakisoba",
  "Poke bowl",
  "Peixe grelhado com purê de mandioquinha",
  "Lanche de frango",
  "Coxa creme",
  "Batata recheada",
  "Fazer hamburguer",
  "Steak bites",
  "Ratatouille",
  "Berinjela a parmegiana",
  "Croissant",
  "Arroz à piamontese e Bife Ancho",
  "Chicken Alfredo",
  "Carbonara",
  "Fazer pizza",
  "Ravioli",
  "Jantinha padrão (arroz feijão batata frita e carne de boi)",
  "Katsu Karê",
  "Purê de batata com demiglace",
  "Nhoque ao molho branco com frango",
];

// Lista de desejos / sonhos a dois — marque o que já foi feito.
// Pra adicionar mais, é só colar um novo texto entre aspas e vírgula.
// O que já foi marcado fica salvo no navegador de quem marcou.
const DESEJOS = [
  "Viajar pro ES",
  "Fazer uma trilha",
  "Ir a um show do Scatolove",
  "Aprender uma receita nova juntos",
  "Maratonar uma série do início ao fim",
  "Montar um álbum de polaroid",
  "Fazer um piquenique",
  "Visitar um lugar novo na cidade",
  "Acampar uma noite",
  "Assistir o pôr do sol num lugar bonito",
  "Fazer uma viagem de carro",
  "Sair pra passear sem destino fixo",
  "Dar a volta na pampulha de bicicleta",
  "Ir em um jogo de futebol",
  "Ir no CEU da UFMG",
  "Ir em uma pista de patins",
  "Ir na Rage Room",
  "Se hospedar na Marília de novo",
  "Usar um pacote de sal juntos",
  "Começar a guardar dinheiro juntos",
  "Viajar juntos pra fora do país",
  "Morar com meu amor",
  // adicione mais desejos aqui
];

// Presentes que ela pode escolher a cada marco de conquistas (por padrão,
// a cada 5 desejos realizados). Ela escolhe UM da lista quando desbloqueia
// um marco, e ele sai da lista (não repete). Edite à vontade — pode ter
// mais opções do que marcos, sem problema, só sobra pro próximo marco.
const PRESENTES = [
  "Um jantar no lugar que você escolher",
  "Um dia inteiro sem tarefas de casa (eu cuido de tudo)",
  "Massagem MUITO FODA",
  "Escolher o filme/série da semana, sem discussão",
  "Uma tarde de spa em casa",
  "Um passeio surpresa, vc só decide o dia",
  "Carrinho da shein/shopee até R$100",
  "2 minutos de cosquinha",
  // adicione mais presentes aqui
];

// ---- Easter egg: clique 7 vezes seguidas num bichinho específico (por
// padrão, a Maia — dá pra trocar o SEGREDO_ID lá em initPetScene) pra
// revelar uma mensagem escondida. Troque o texto à vontade. ----
const MENSAGEM_SECRETA = "Você me encontrou! 🐾 Te amo";

// Cole aqui o link normal de cada playlist do Spotify (o mesmo que aparece
// quando você clica em "Compartilhar → Copiar link da playlist").
// Não precisa mexer em mais nada — o site converte pro player sozinho.
const PLAYLISTS = [
  { titulo: "Dia 19", url: "https://open.spotify.com/playlist/4LAivT8rIZQS0uKxxmTwK4?si=aa32fbad840e4ad1" },
  { titulo: "Dia 20", url: "https://open.spotify.com/playlist/1PLZ3GkXrJjvHDFW8UqYgv?si=ffb880bc35594442" },
  { titulo: "Dia 21", url: "https://open.spotify.com/playlist/6Dim1EWZHk6SC3F32MC4ED?si=3bdf49eb34b242fb" },
  { titulo: "Dia 22", url: "https://open.spotify.com/playlist/2qZCIoAv1GLx4UYaecq0xI?si=4dc868a17b6c41ad" },
  { titulo: "Dia 28 🀄🪭🔥", url: "https://open.spotify.com/playlist/3RzgfjFayzduE1GATqfxTp?si=c36f525147c9495c" },
  { titulo: "Dia 29", url: "https://open.spotify.com/playlist/5DKCqmpBQOROwDbNicaT27?si=a452bc9c9c304e32" },
  { titulo: "Dia 31", url: "https://open.spotify.com/playlist/7A2SE47gBXF2YH5aGNMA2o?si=9c7cae2518d249cd" },
];

// Converte um link comum do Spotify (open.spotify.com/playlist/ID)
// no link de incorporação (embed) usado pelo player.
function spotifyEmbedUrl(url) {
  const match = url.match(/open\.spotify\.com\/(playlist|album|track)\/([a-zA-Z0-9]+)/);
  if (!match) return null;
  const [, tipo, id] = match;
  return `https://open.spotify.com/embed/${tipo}/${id}?utm_source=generator&theme=0`;
}

// ---- Navegação: marca o link da página atual ----
document.addEventListener("DOMContentLoaded", () => {
  const current = document.body.dataset.page;
  document.querySelectorAll(".stamp-nav a").forEach((link) => {
    if (link.dataset.page === current) {
      link.setAttribute("aria-current", "page");
    }
  });
});

// ---- Modo claro/escuro ----
// O tema em si já é aplicado o mais cedo possível por um script inline no
// <head> de cada página (pra não "piscar" claro antes de virar escuro).
// Essa função só cuida do botão e de guardar a escolha.
// ---- Fundo Aurora (canvas com manchas de luz nas cores do site) ----
// Lê as variáveis de cor direto do CSS, então acompanha o tema claro/escuro
// sem precisar de configuração extra. Respeita prefers-reduced-motion.
// Roda uma única vez (igual música/bichinhos): o <canvas> mora fora da
// área trocada pela navegação entre páginas, então nunca reinicia nem
// pisca ao clicar num link do menu.
function initAuroraBackground(canvasId = "aurora-bg") {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Cada mancha: cor (lida da variável CSS), posição relativa (0-1) e raio relativo.
  const manchas = [
    { varName: "--rose",  x: 0.20, y: 0.28, raio: 0.55, velX: 0.021, velY: 0.017, fase: 0 },
    { varName: "--gold",  x: 0.72, y: 0.55, raio: 0.50, velX: 0.017, velY: 0.023, fase: 2 },
    { varName: "--sage",  x: 0.45, y: 0.80, raio: 0.45, velX: 0.019, velY: 0.015, fase: 4 },
    { varName: "--wine",  x: 0.85, y: 0.18, raio: 0.48, velX: 0.015, velY: 0.019, fase: 1 },
  ];

  function corDaVariavel(nome) {
    return getComputedStyle(document.documentElement).getPropertyValue(nome).trim() || "#C97B84";
  }

  function ajustarTamanho() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function desenharQuadro(t) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";

    manchas.forEach((m) => {
      // Movimento suave tipo "figura 8", sem parar nem repetir de forma óbvia
      const cx = (m.x + Math.sin(t * m.velX + m.fase) * 0.08) * w;
      const cy = (m.y + Math.cos(t * m.velY + m.fase) * 0.08) * h;
      const raio = m.raio * Math.max(w, h) * 0.6;

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, raio);
      grad.addColorStop(0, corDaVariavel(m.varName) + "59"); // ~35% opacidade
      grad.addColorStop(1, corDaVariavel(m.varName) + "00");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, raio, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalCompositeOperation = "source-over";
  }

  ajustarTamanho();
  window.addEventListener("resize", ajustarTamanho);

  if (reduzMovimento) {
    // Sem animação: desenha um único quadro estático e para por aí.
    desenharQuadro(0);
    return;
  }

  let quadro;
  function loop(agora) {
    desenharQuadro(agora / 1000);
    quadro = requestAnimationFrame(loop);
  }
  quadro = requestAnimationFrame(loop);

  // Se a aba for pra segundo plano, evita gastar CPU à toa.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(quadro);
    } else if (!reduzMovimento) {
      quadro = requestAnimationFrame(loop);
    }
  });
}

function initThemeToggle(buttonId = "theme-toggle") {
  const botao = document.getElementById(buttonId);
  if (!botao) return;

  const CHAVE = "cantinho:tema";

  function temaAtual() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function atualizarIcone() {
    const escuro = temaAtual() === "dark";
    botao.textContent = escuro ? "☀️" : "🌙";
    botao.setAttribute("aria-label", escuro ? "Mudar para modo claro" : "Mudar para modo escuro");
  }

  botao.addEventListener("click", () => {
    const novo = temaAtual() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", novo);
    try {
      localStorage.setItem(CHAVE, novo);
    } catch {
      // localStorage bloqueado — só não persiste pra próxima visita
    }
    atualizarIcone();
  });

  atualizarIcone();
}

// ---- Álbum em linha do tempo + lightbox ----
// Cada item em `items` pode ter { data, src, alt, legenda }. Mantém o mesmo
// efeito de inclinar ao passar o mouse (classe .gallery-item) e o mesmo
// lightbox de sempre, só que organizado como uma linha do tempo, alternando
// os cartões pra esquerda e pra direita.
function initTimeline(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, i) => `
    <div class="timeline-item ${i % 2 === 0 ? "is-left" : "is-right"}">
      <span class="timeline-marker" aria-hidden="true"></span>
      <div class="timeline-content">
        ${item.data ? `<p class="timeline-date">${item.data}</p>` : ""}
        <button class="gallery-item timeline-photo" style="--tilt:${(i % 5 - 2) * 1.4}deg" data-index="${i}" aria-label="Ver foto: ${item.alt}">
          ${item.src
            ? `<img src="${item.src}" alt="${item.alt}" loading="lazy" class="${item.blur ? "is-blurred" : ""}">`
            : `<span class="placeholder-label">📷<br>${item.alt}</span>`
          }
        </button>
        ${item.legenda ? `<p class="timeline-caption">${item.legenda}</p>` : ""}
      </div>
    </div>
  `).join("");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");

  container.querySelectorAll(".timeline-photo").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = items[Number(btn.dataset.index)];
      if (!item.src) return;

      // se a foto ainda está borrada, o primeiro clique só revela ela
      // (tira o borrão); só num próximo clique é que abre em tela cheia
      const img = btn.querySelector("img");
      if (img && img.classList.contains("is-blurred")) {
        img.classList.remove("is-blurred");
        const dica = btn.querySelector(".timeline-blur-hint");
        if (dica) dica.remove();
        return;
      }

      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
      lightbox.classList.add("is-open");
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.closest(".lightbox-close")) {
      lightbox.classList.remove("is-open");
      lightboxImg.src = "";
    }
  });

  const fecharLightboxComEsc = (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("is-open");
      lightboxImg.src = "";
    }
  };
  document.addEventListener("keydown", fecharLightboxComEsc);
  if (typeof window.aoLimparPagina === "function") {
    window.aoLimparPagina(() => document.removeEventListener("keydown", fecharLightboxComEsc));
  }
}

// ---- Roleta / caça-níquel (sorteio de filme ou receita) ----
// config: { buttonId, resetButtonId, windowId, listId, poolListId, noteId, items }
// Cada opção sorteada some do grupo disponível e fica riscada na listinha
// (por isso nunca repete duas vezes seguidas). O botão de reset devolve
// tudo pro grupo disponível de novo.
function initReel(config) {
  const { buttonId, resetButtonId, windowId, listId, poolListId, noteId, items, storageKey } = config;
  const button = document.getElementById(buttonId);
  const resetButton = document.getElementById(resetButtonId);
  const windowEl = document.getElementById(windowId);
  const listEl = document.getElementById(listId);
  const poolListEl = poolListId ? document.getElementById(poolListId) : null;
  const noteEl = noteId ? document.getElementById(noteId) : null;
  if (!button || !windowEl || !listEl || !items || items.length === 0) return;

  const CHAVE = storageKey ? `cantinho:sorteados:${storageKey}` : null;

  function carregarSorteados() {
    if (!CHAVE) return [];
    try {
      const salvo = JSON.parse(localStorage.getItem(CHAVE) || "[]");
      // só mantém nomes que ainda existem na lista atual
      return Array.isArray(salvo) ? salvo.filter((nome) => items.includes(nome)) : [];
    } catch {
      return [];
    }
  }

  function salvarSorteados() {
    if (!CHAVE) return;
    try {
      localStorage.setItem(CHAVE, JSON.stringify(sorteados));
    } catch {
      // se o navegador bloquear localStorage (modo privado etc.), só não persiste
    }
  }

  const ITEM_HEIGHT = 56;
  let spinning = false;
  let sorteados = carregarSorteados();
  let disponiveis = items.filter((nome) => !sorteados.includes(nome));

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function embaralhada(lista) {
    return [...lista].sort(() => Math.random() - 0.5);
  }

  function renderPool() {
    if (!poolListEl) return;
    poolListEl.innerHTML = items.map((nome) => {
      const riscado = sorteados.includes(nome);
      return `<li class="${riscado ? "is-drawn" : ""}">${nome}</li>`;
    }).join("");
  }

  function atualizarEstado() {
    const esgotado = disponiveis.length === 0;
    button.disabled = spinning || esgotado;
    if (resetButton) resetButton.disabled = spinning;
    if (noteEl) {
      noteEl.textContent = esgotado
        ? "todas já foram sorteadas — clique em recomeçar"
        : "clique quantas vezes quiser";
    }
  }

  function montarRolo(alvo) {
    const rolo = [];
    const voltas = Math.round(rand(7, 11)); // varia a cada giro, pra não parecer sempre igual
    for (let i = 0; i < voltas; i++) rolo.push(...embaralhada(items));
    const indiceAlvo = rolo.length;
    rolo.push(alvo);
    // itens de verdade depois do sorteado, pra sempre ter "o que vem a
    // seguir" visível na janela (em vez de dar num vazio no final do giro)
    rolo.push(...embaralhada(items).slice(0, Math.max(4, items.length)));
    return { rolo, indiceAlvo };
  }

  button.addEventListener("click", () => {
    if (spinning || disponiveis.length === 0) return;
    spinning = true;
    atualizarEstado();
    windowEl.classList.remove("landed");
    windowEl.classList.add("is-resetting");

    setTimeout(() => {
      const alvo = disponiveis[Math.floor(Math.random() * disponiveis.length)];
      const { rolo, indiceAlvo } = montarRolo(alvo);

      listEl.innerHTML = rolo.map(item => `<div class="reel-item">${item}</div>`).join("");
      listEl.style.transition = "none";
      listEl.style.transform = "translateY(0)";
      windowEl.classList.remove("is-resetting");

      // força o navegador a aplicar a posição inicial antes de animar
      // eslint-disable-next-line no-unused-expressions
      listEl.offsetHeight;

      const centro = ITEM_HEIGHT * 1; // centraliza na 2ª das 3 linhas visíveis
      const posicaoFinal = -(indiceAlvo * ITEM_HEIGHT) + centro;
      const duracao = (3.6 + Math.random() * 1.3).toFixed(2); // dura um pouco diferente a cada giro

      requestAnimationFrame(() => {
        // desacelera suavemente até parar exatamente no sorteado — sem
        // "estourar" e voltar, só vai ficando mais devagar até travar.
        listEl.style.transition = `transform ${duracao}s cubic-bezier(0.15, 0.85, 0.2, 1)`;
        listEl.style.transform = `translateY(${posicaoFinal}px)`;
      });

      listEl.addEventListener("transitionend", function aoTerminar() {
        listEl.removeEventListener("transitionend", aoTerminar);
        spinning = false;
        windowEl.classList.add("landed");

        disponiveis = disponiveis.filter((nome) => nome !== alvo);
        if (!sorteados.includes(alvo)) sorteados.push(alvo);
        salvarSorteados();
        renderPool();
        atualizarEstado();
      }, { once: true });
    }, 180);
  });

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      if (spinning) return;
      disponiveis = [...items];
      sorteados = [];
      salvarSorteados();
      windowEl.classList.remove("landed");
      listEl.style.transition = "none";
      listEl.innerHTML = `<div class="reel-item">?</div>`;
      renderPool();
      atualizarEstado();
    });
  }

  renderPool();
  atualizarEstado();
}

// ---- Playlists do Spotify ----
function renderPlaylists(containerId, playlists) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const validas = playlists.filter(p => spotifyEmbedUrl(p.url));

  if (validas.length === 0) {
    el.innerHTML = `
      <div class="playlist-empty">
        <p>Ainda não tem nenhuma playlist aqui.</p>
        <p class="draw-note">Cole os links em <code>const PLAYLISTS</code>, no arquivo <code>js/script.js</code>.</p>
      </div>`;
    return;
  }

  el.innerHTML = validas.map(p => `
    <div class="playlist-card">
      <h3 class="playlist-title">${p.titulo}</h3>
      <iframe
        style="border-radius:12px"
        src="${spotifyEmbedUrl(p.url)}"
        width="100%" height="352" frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Player Spotify: ${p.titulo}">
      </iframe>
    </div>
  `).join("");
}

// ---- Contador de tempo juntos (anos, meses, dias, h:min:seg ao vivo) ----
function initLoveCounter(dataInicioISO) {
  const inicio = new Date(dataInicioISO);
  const els = {
    anos: document.getElementById("lc-anos"),
    meses: document.getElementById("lc-meses"),
    dias: document.getElementById("lc-dias"),
    horas: document.getElementById("lc-horas"),
    minutos: document.getElementById("lc-minutos"),
    segundos: document.getElementById("lc-segundos"),
  };
  if (!els.anos || isNaN(inicio.getTime())) return;

  function doisDigitos(n) {
    return String(n).padStart(2, "0");
  }

  function calcularDiferenca(agora) {
    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
      // pega quantos dias tinha o mês anterior ao mês atual
      const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
      dias += mesAnterior.getDate();
      meses--;
    }
    if (meses < 0) { meses += 12; anos--; }

    return { anos, meses, dias, horas, minutos, segundos };
  }

  function atualizar() {
    const agora = new Date();
    if (agora < inicio) return; // data no futuro, não conta
    const d = calcularDiferenca(agora);
    els.anos.textContent = d.anos;
    els.meses.textContent = d.meses;
    els.dias.textContent = d.dias;
    els.horas.textContent = doisDigitos(d.horas);
    els.minutos.textContent = doisDigitos(d.minutos);
    els.segundos.textContent = doisDigitos(d.segundos);
  }

  atualizar();
  setInterval(atualizar, 1000);
}

// ---- Álbum de cada bichinho (clica no card -> abre álbum -> clica na foto -> abre grande) ----
function initBichinhosGaleria(gridSelector, dados) {
  const cards = document.querySelectorAll(gridSelector);
  if (!cards.length || !dados) return;

  // remove overlays de uma visita anterior a esta mesma página (SPA), pra
  // não ir empilhando cópias toda vez que a pessoa volta pra cá
  document.querySelectorAll(".pet-modal-overlay").forEach((el) => el.remove());

  // ---- monta as duas janelas (álbum e foto grande), uma vez só ----
  const albumOverlay = document.createElement("div");
  albumOverlay.className = "pet-modal-overlay";
  albumOverlay.innerHTML = `
    <div class="pet-modal" role="dialog" aria-modal="true" aria-labelledby="pet-album-titulo">
      <button type="button" class="pet-modal-close" data-fechar-album aria-label="Fechar">✕</button>
      <h3 id="pet-album-titulo"></h3>
      <div class="pet-album-grid"></div>
    </div>`;
  document.body.appendChild(albumOverlay);

  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.className = "pet-modal-overlay pet-lightbox-overlay";
  lightboxOverlay.innerHTML = `
    <button type="button" class="pet-modal-close" data-fechar-lightbox aria-label="Fechar">✕</button>
    <button type="button" class="pet-lightbox-nav pet-lightbox-prev" aria-label="Foto anterior">‹</button>
    <img class="pet-lightbox-img" alt="">
    <button type="button" class="pet-lightbox-nav pet-lightbox-next" aria-label="Próxima foto">›</button>`;
  document.body.appendChild(lightboxOverlay);

  const albumTitulo = albumOverlay.querySelector("#pet-album-titulo");
  const albumGrid = albumOverlay.querySelector(".pet-album-grid");
  const lightboxImg = lightboxOverlay.querySelector(".pet-lightbox-img");

  let fotosAtuais = [];
  let indiceAtual = 0;

  function abrirLightbox(fotos, indice) {
    fotosAtuais = fotos;
    indiceAtual = indice;
    lightboxImg.src = fotosAtuais[indiceAtual];
    lightboxOverlay.classList.add("is-open");
    document.body.classList.add("pet-modal-travado");
  }

  function mudarFoto(delta) {
    indiceAtual = (indiceAtual + delta + fotosAtuais.length) % fotosAtuais.length;
    lightboxImg.src = fotosAtuais[indiceAtual];
  }

  function fecharLightbox() {
    lightboxOverlay.classList.remove("is-open");
    document.body.classList.remove("pet-modal-travado");
  }

  function abrirAlbum(petId) {
    const info = dados[petId];
    if (!info) return;
    const fotos = info.capa ? [info.capa, ...info.fotos] : info.fotos;
    albumTitulo.textContent = info.nome;
    albumGrid.innerHTML = fotos.map((src, i) => `
      <button type="button" class="pet-album-thumb" data-indice="${i}">
        <img src="${src}" alt="Foto de ${info.nome}" loading="lazy">
      </button>`).join("");

    albumGrid.querySelectorAll(".pet-album-thumb").forEach((btn) => {
      btn.addEventListener("click", () => {
        abrirLightbox(fotos, Number(btn.dataset.indice));
      });
    });

    albumOverlay.classList.add("is-open");
    document.body.classList.add("pet-modal-travado");
  }

  function fecharAlbum() {
    albumOverlay.classList.remove("is-open");
    document.body.classList.remove("pet-modal-travado");
  }

  cards.forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver fotos de ${dados[card.dataset.petId]?.nome || ""}`);
    card.addEventListener("click", () => abrirAlbum(card.dataset.petId));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirAlbum(card.dataset.petId);
      }
    });
  });

  albumOverlay.addEventListener("click", (e) => {
    if (e.target === albumOverlay || e.target.closest("[data-fechar-album]")) fecharAlbum();
  });
  lightboxOverlay.addEventListener("click", (e) => {
    if (e.target === lightboxOverlay || e.target.closest("[data-fechar-lightbox]")) fecharLightbox();
  });
  lightboxOverlay.querySelector(".pet-lightbox-prev").addEventListener("click", () => mudarFoto(-1));
  lightboxOverlay.querySelector(".pet-lightbox-next").addEventListener("click", () => mudarFoto(1));

  const handleTecladoGaleria = (e) => {
    if (e.key === "Escape") {
      if (lightboxOverlay.classList.contains("is-open")) fecharLightbox();
      else if (albumOverlay.classList.contains("is-open")) fecharAlbum();
    }
    if (lightboxOverlay.classList.contains("is-open")) {
      if (e.key === "ArrowLeft") mudarFoto(-1);
      if (e.key === "ArrowRight") mudarFoto(1);
    }
  };
  document.addEventListener("keydown", handleTecladoGaleria);

  if (typeof window.aoLimparPagina === "function") {
    window.aoLimparPagina(() => {
      document.removeEventListener("keydown", handleTecladoGaleria);
      albumOverlay.remove();
      lightboxOverlay.remove();
    });
  }
}

// ---- Lista de desejos (marca e desmarca, guardado no navegador) ----
function initWishlist(listId, items, storageKey) {
  const listEl = document.getElementById(listId);
  if (!listEl || !items) return;

  const CHAVE = `cantinho:desejos:${storageKey}`;

  function carregarMarcados() {
    try {
      const salvo = JSON.parse(localStorage.getItem(CHAVE) || "[]");
      return Array.isArray(salvo) ? salvo.filter((texto) => items.includes(texto)) : [];
    } catch {
      return [];
    }
  }

  function salvarMarcados(marcados) {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(marcados));
    } catch {
      // modo privado ou localStorage bloqueado — só não persiste
    }
  }

  let marcados = carregarMarcados();

  function atualizarContador() {
    const contador = document.getElementById(`${listId}-contador`);
    if (contador) contador.textContent = `${marcados.length} de ${items.length} já realizados`;
  }

  function render() {
    listEl.innerHTML = items.map((texto, i) => {
      const feito = marcados.includes(texto);
      const id = `${listId}-item-${i}`;
      return `
        <li class="wishlist-item ${feito ? "is-done" : ""}">
          <label for="${id}">
            <input type="checkbox" id="${id}" data-texto="${i}" ${feito ? "checked" : ""}>
            <span class="wishlist-check" aria-hidden="true"></span>
            <span class="wishlist-text">${texto}</span>
          </label>
        </li>`;
    }).join("");
    atualizarContador();
  }

  listEl.addEventListener("change", (e) => {
    const input = e.target.closest("input[type=checkbox]");
    if (!input) return;
    const texto = items[Number(input.dataset.texto)];
    if (input.checked) {
      if (!marcados.includes(texto)) marcados.push(texto);
    } else {
      marcados = marcados.filter((t) => t !== texto);
    }
    salvarMarcados(marcados);
    input.closest(".wishlist-item").classList.toggle("is-done", input.checked);
    atualizarContador();
  });

  render();
}

// ---- Cápsula do tempo (fica lacrada até a data marcada) ----
// ---- Cápsula do tempo (fica lacrada até a data marcada) ----
function initTimeCapsule(dataAberturaISO) {
  const dataAbertura = new Date(dataAberturaISO);
  const wrap = document.getElementById("capsula-wrap");
  const lacrada = document.getElementById("capsula-lacrada");
  const aberta = document.getElementById("capsula-aberta");
  const countdown = lacrada ? lacrada.querySelector(".capsula-countdown") : null;
  const seloLacrado = lacrada ? lacrada.querySelector(".wax-seal") : null;
  const contagem = {
    dias: document.getElementById("cap-dias"),
    horas: document.getElementById("cap-horas"),
    minutos: document.getElementById("cap-minutos"),
    segundos: document.getElementById("cap-segundos"),
  };
  if (!lacrada || !aberta) return;

  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let abrindo = false;

  // ---- Explosão de brilhinhos no instante em que a cápsula abre ----
  function criarBrilhos() {
    if (!wrap) return;
    const emojis = ["✨", "💛", "✨", "💫", "✨"];
    const total = 14;
    for (let i = 0; i < total; i++) {
      const spark = document.createElement("span");
      spark.className = "capsula-spark";
      spark.textContent = emojis[i % emojis.length];
      const angulo = (Math.PI * 2 * i) / total + Math.random() * 0.4;
      const distancia = 70 + Math.random() * 60;
      spark.style.setProperty("--dx", `${Math.cos(angulo) * distancia}px`);
      spark.style.setProperty("--dy", `${Math.sin(angulo) * distancia}px`);
      spark.style.setProperty("--dur", `${0.7 + Math.random() * 0.5}s`);
      wrap.appendChild(spark);
      spark.addEventListener("animationend", () => spark.remove());
    }
  }

  function mostrarAberta() {
    if (abrindo) return;
    abrindo = true;

    if (reduzMovimento) {
      lacrada.hidden = true;
      aberta.hidden = false;
      aberta.classList.add("is-visible");
      return;
    }

    if (wrap) wrap.classList.add("is-opening");
    if (countdown) countdown.classList.remove("is-imminent");
    if (seloLacrado) seloLacrado.classList.remove("is-imminent");
    criarBrilhos();

    setTimeout(() => {
      lacrada.hidden = true;
      aberta.hidden = false;
      // força reflow antes de ativar a transição de entrada
      void aberta.offsetWidth;
      aberta.classList.add("is-visible");
    }, 650);
  }

  function atualizar() {
    const agora = new Date();
    const diffMs = dataAbertura - agora;

    if (diffMs <= 0) {
      mostrarAberta();
      return;
    }

    const segTotal = Math.floor(diffMs / 1000);
    const dias = Math.floor(segTotal / 86400);
    const horas = Math.floor((segTotal % 86400) / 3600);
    const minutos = Math.floor((segTotal % 3600) / 60);
    const segundos = segTotal % 60;

    if (contagem.dias) contagem.dias.textContent = dias;
    if (contagem.horas) contagem.horas.textContent = String(horas).padStart(2, "0");
    if (contagem.minutos) contagem.minutos.textContent = String(minutos).padStart(2, "0");
    if (contagem.segundos) contagem.segundos.textContent = String(segundos).padStart(2, "0");

    // ---- Últimos 10 segundos: contagem regressiva especial ----
    const imminente = !reduzMovimento && diffMs <= 10000;
    if (countdown) countdown.classList.toggle("is-imminent", imminente);
    if (seloLacrado) seloLacrado.classList.toggle("is-imminent", imminente);
  }

  atualizar();
  const capsulaIntervalId = setInterval(atualizar, 1000);
  if (typeof window.aoLimparPagina === "function") {
    window.aoLimparPagina(() => clearInterval(capsulaIntervalId));
  }
}

// ---- Página de conquistas: mostra os desejos já marcados como troféus,
// mais uma barrinha de progresso com marcos a cada N conquistas (padrão 5).
// A cada marco alcançado, ela pode escolher um presente da lista PRESENTES
// (cada presente só pode ser escolhido uma vez, no total).
function initConquistas(config) {
  const {
    gridId, items, storageKey, resumoId, progressoId, presentesId,
    presentes = [], passoMarco = 5,
  } = config;

  const grid = document.getElementById(gridId);
  if (!grid || !items) return;

  const CHAVE_MARCADOS = `cantinho:desejos:${storageKey}`;
  const CHAVE_PRESENTES = `cantinho:presentes:${storageKey}`;

  function carregarMarcados() {
    try {
      const salvo = JSON.parse(localStorage.getItem(CHAVE_MARCADOS) || "[]");
      return Array.isArray(salvo) ? salvo.filter((texto) => items.includes(texto)) : [];
    } catch {
      return [];
    }
  }

  function carregarPresentesEscolhidos() {
    try {
      const salvo = JSON.parse(localStorage.getItem(CHAVE_PRESENTES) || "{}");
      return (salvo && typeof salvo === "object") ? salvo : {};
    } catch {
      return {};
    }
  }

  function salvarPresentesEscolhidos(escolhidos) {
    try {
      localStorage.setItem(CHAVE_PRESENTES, JSON.stringify(escolhidos));
    } catch {
      // localStorage bloqueado — só não persiste
    }
  }

  const marcados = carregarMarcados();
  let presentesEscolhidos = carregarPresentesEscolhidos();

  // ---- Grade de medalhas ----
  grid.innerHTML = items.map((texto) => {
    const feita = marcados.includes(texto);
    return `
      <div class="conquista-selo ${feita ? "is-feita" : ""}">
        <span class="conquista-medalha" aria-hidden="true">${feita ? "🏆" : "🔒"}</span>
        <span class="conquista-texto">${texto}</span>
      </div>`;
  }).join("");

  const resumo = resumoId ? document.getElementById(resumoId) : null;
  if (resumo) resumo.textContent = `${marcados.length} de ${items.length} conquistas desbloqueadas`;

  // ---- Barra de progresso com marcos ----
  const progressoEl = progressoId ? document.getElementById(progressoId) : null;
  if (progressoEl) {
    const total = items.length;
    const feitas = marcados.length;
    const pct = total > 0 ? Math.min(100, (feitas / total) * 100) : 0;

    const marcos = [];
    for (let m = passoMarco; m <= total; m += passoMarco) marcos.push(m);

    const marcosHtml = marcos.map((m) => {
      const alcancado = feitas >= m;
      const posicao = total > 0 ? (m / total) * 100 : 0;
      return `<span class="conquistas-marco ${alcancado ? "is-alcancado" : ""}" style="left:${posicao}%" title="${m} conquistas">${alcancado ? "🏆" : "🔒"}</span>`;
    }).join("");

    progressoEl.innerHTML = `
      <div class="conquistas-progresso-bar">
        <div class="conquistas-progresso-fill" style="width:${pct}%"></div>
        ${marcosHtml}
      </div>
      <p class="conquistas-progresso-legenda">${feitas} de ${total} · próximo marco a cada ${passoMarco} conquistas</p>
    `;
  }

  // ---- Presentes desbloqueados nos marcos ----
  const presentesEl = presentesId ? document.getElementById(presentesId) : null;
  if (presentesEl && presentes.length > 0) {
    const total = items.length;
    const feitas = marcados.length;
    const marcosAlcancados = [];
    for (let m = passoMarco; m <= feitas; m += passoMarco) marcosAlcancados.push(m);

    function presentesDisponiveis() {
      const jaEscolhidos = Object.values(presentesEscolhidos);
      return presentes.filter((p) => !jaEscolhidos.includes(p));
    }

    function render() {
      if (marcosAlcancados.length === 0) {
        presentesEl.innerHTML = `<p class="conquistas-presente-vazio">Ao completar ${passoMarco} conquistas, um presente é desbloqueado aqui. 🎁</p>`;
        return;
      }

      presentesEl.innerHTML = marcosAlcancados.map((marco) => {
        const escolhido = presentesEscolhidos[marco];

        if (escolhido) {
          return `
            <div class="conquistas-presente-card is-escolhido">
              <p class="conquistas-presente-titulo">🎁 Presente do marco de ${marco} conquistas</p>
              <p class="conquistas-presente-escolha">Você escolheu: <strong>${escolhido}</strong></p>
            </div>`;
        }

        const opcoes = presentesDisponiveis();
        if (opcoes.length === 0) {
          return `
            <div class="conquistas-presente-card">
              <p class="conquistas-presente-titulo">🎁 Presente do marco de ${marco} conquistas</p>
              <p class="conquistas-presente-vazio">Acabaram os presentes da lista — hora de adicionar mais em PRESENTES!</p>
            </div>`;
        }

        return `
          <div class="conquistas-presente-card">
            <p class="conquistas-presente-titulo">🎁 Você desbloqueou um presente no marco de ${marco} conquistas! Escolha um:</p>
            <div class="conquistas-presente-opcoes" data-marco="${marco}">
              ${opcoes.map((op) => `<button type="button" class="conquistas-presente-opcao" data-presente="${op}">${op}</button>`).join("")}
            </div>
          </div>`;
      }).join("");

      presentesEl.querySelectorAll(".conquistas-presente-opcoes").forEach((wrap) => {
        wrap.addEventListener("click", (e) => {
          const btn = e.target.closest(".conquistas-presente-opcao");
          if (!btn) return;
          const marco = wrap.dataset.marco;
          presentesEscolhidos[marco] = btn.dataset.presente;
          salvarPresentesEscolhidos(presentesEscolhidos);
          render();
        });
      });
    }

    render();
  }
}

// ---- Carta lacrada da página inicial (envelope que abre ao clicar no selo) ----
function initLetterSeal() {
  const card = document.getElementById("letter-card");
  const overlay = document.getElementById("envelope-overlay");
  const button = document.getElementById("seal-button");
  const letter = document.getElementById("letter-content");
  const cta = document.getElementById("letter-cta");
  if (!card || !overlay || !button || !letter) return;

  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Lembra que a carta já foi aberta durante essa "visita" ao site,
  // pra não fechar de novo só por trocar de aba e voltar. Só reseta se a
  // aba/navegador for fechado e o site for aberto de novo depois. ----
  const CHAVE_CARTA = "cantinho:carta:aberta";

  function salvarCartaAberta() {
    try {
      sessionStorage.setItem(CHAVE_CARTA, "1");
    } catch {
      // sessionStorage bloqueado (modo privado etc.) — só não persiste
    }
  }

  function cartaJaFoiAberta() {
    try {
      return sessionStorage.getItem(CHAVE_CARTA) === "1";
    } catch {
      return false;
    }
  }

  function abrirCarta({ animar = true } = {}) {
    button.setAttribute("aria-expanded", "true");
    button.disabled = true;

    letter.setAttribute("aria-hidden", "false");
    if (cta) cta.removeAttribute("tabindex");

    if (!animar || reduzMovimento) {
      overlay.style.display = "none";
      letter.classList.add("is-visible");
      return;
    }

    card.classList.add("is-open");
    letter.classList.add("is-visible");

    overlay.addEventListener("transitionend", (e) => {
      if (e.target === overlay) overlay.style.display = "none";
    }, { once: true });

    // fallback caso transitionend não dispare nesse elemento específico
    setTimeout(() => { overlay.style.display = "none"; }, 1300);
  }

  // Se a carta já tinha sido aberta nessa visita (ex: trocou de aba e voltou),
  // reabre direto sem animação nem selo.
  if (cartaJaFoiAberta()) {
    abrirCarta({ animar: false });
  }

  button.addEventListener("click", () => {
    salvarCartaAberta();
    abrirCarta();
  });
}

// ---- Bichinhos animados (pixel art andando / sentando / deitando) ----
// Andam soltos por cima da página inteira, em qualquer direção (inclusive
// diagonais). Quando esbarram numa borda da tela, "quicam" pro lado
// contrário em vez de ficar parados travados. De tempos em tempos, param
// pra sentar ou deitar (ficam mais tempo parados do que andando) e depois
// escolhem uma nova direção pra continuar.
// Cada bicho em `pets` deve ter o formato:
// { id: "nome", states: { andando: {src,w,h}, sentado: {src,w,h}, deitado: {src,w,h} } }
function initPetScene(pets) {
  if (!pets || pets.length === 0) return;

  // ---- Easter egg: cliques seguidos num bicho específico ----
  const SEGREDO_ID = "maia";     // troque pelo id de outro bicho, se quiser
  const SEGREDO_QTD = 7;         // quantos cliques seguidos são necessários
  const SEGREDO_JANELA_MS = 2500; // tempo máximo entre um clique e o próximo
  let segredoContagem = 0;
  let segredoUltimoClique = 0;

  function dispararSegredoSecreto() {
    const toast = document.createElement("div");
    toast.className = "pet-secret-toast";
    toast.textContent = MENSAGEM_SECRETA;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("is-visible"));
    setTimeout(() => {
      toast.classList.remove("is-visible");
      setTimeout(() => toast.remove(), 500);
    }, 4200);

    if (!reduzMovimento) {
      const total = 22;
      for (let i = 0; i < total; i++) {
        const heart = document.createElement("span");
        heart.className = "pet-secret-heart";
        heart.textContent = i % 2 === 0 ? "♥" : "✨";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = (Math.random() * 0.6) + "s";
        heart.style.setProperty("--dur", (2.2 + Math.random() * 1.4) + "s");
        document.body.appendChild(heart);
        heart.addEventListener("animationend", () => heart.remove());
      }
    }
  }

  const DISPLAY_HEIGHT = 44; // altura de cada bicho na tela, em px
  const MARGIN = 8; // margem mínima em relação às bordas da tela, em px
  const SPEED = 34; // velocidade ao andar, em px/s
  const WALK_MIN_SEC = 2.5;  // quanto tempo (no mínimo) ele anda antes de parar
  const WALK_MAX_SEC = 6;    // quanto tempo (no máximo) ele anda antes de parar
  const REST_MIN_SEC = 8;    // quanto tempo (no mínimo) fica sentado/deitado
  const REST_MAX_SEC = 22;   // quanto tempo (no máximo) fica sentado/deitado

  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  // ---- Guarda onde cada bicho estava e o que estava fazendo, pra continuar
  // exatamente dali quando a pessoa muda de página (em vez de reiniciar). ----
  const CHAVE_ESTADO = "cantinho:pets:estado";
  const LIMITE_SALTO_MS = 4000; // além disso, é como se tivesse "sumido" por muito tempo

  function lerEstadoSalvo() {
    try {
      return JSON.parse(sessionStorage.getItem(CHAVE_ESTADO) || "{}");
    } catch {
      return {};
    }
  }

  function salvarEstado(bichinhos) {
    try {
      const estado = {};
      bichinhos.forEach((b) => {
        estado[b.config.id] = {
          x: b.x,
          y: b.y,
          vx: b.vx,
          vy: b.vy,
          facingRight: b.facingRight,
          state: b.state,
          remainingMs: b.phaseUntil ? b.phaseUntil - performance.now() : null,
          savedAt: Date.now(),
        };
      });
      sessionStorage.setItem(CHAVE_ESTADO, JSON.stringify(estado));
    } catch {
      // sessionStorage bloqueado (modo privado etc.) — só não persiste
    }
  }

  let layer = document.querySelector(".pet-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "pet-layer";
    document.body.appendChild(layer);
  }

  // ---- Bichinhos agora vivem na página inteira (não só na tela visível),
  // então "até onde dá pra andar" é a altura de TODA a página, não só a
  // altura da janela. Assim eles podem estar mais pra baixo, aparecendo só
  // quando a pessoa rola até lá — igual qualquer outra coisa da página. ----
  function alturaPagina() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight
    );
  }

  class Bichinho {
    constructor(config, estadoSalvo) {
      this.config = config;
      this.dragging = false;

      this.el = document.createElement("img");
      this.el.className = "pet-sprite";
      this.el.alt = config.id;
      this.el.draggable = false;
      layer.appendChild(this.el);

      this.el.addEventListener("click", () => this.onClick());
      this.el.addEventListener("pointerdown", (e) => this.onPointerDown(e));
      this.el.addEventListener("pointermove", (e) => this.onPointerMove(e));
      this.el.addEventListener("pointerup", (e) => this.onPointerUp(e));
      this.el.addEventListener("pointercancel", (e) => this.onPointerUp(e));

      const maxXInicial = Math.max(MARGIN, window.innerWidth - 120);
      const maxYInicial = Math.max(MARGIN, alturaPagina() - DISPLAY_HEIGHT - MARGIN);

      if (estadoSalvo) {
        // retoma de onde parou na página anterior
        const elapsedMs = Math.min(Date.now() - estadoSalvo.savedAt, LIMITE_SALTO_MS);
        this.x = Math.min(Math.max(estadoSalvo.x, MARGIN), maxXInicial);
        this.y = Math.min(Math.max(estadoSalvo.y, MARGIN), maxYInicial);
        this.vx = estadoSalvo.vx;
        this.vy = estadoSalvo.vy;
        this.facingRight = estadoSalvo.facingRight;

        if (!reduzMovimento && estadoSalvo.state === "andando") {
          // avança a posição pelo tempo que passou navegando entre as páginas
          this.x += this.vx * (elapsedMs / 1000);
          this.y += this.vy * (elapsedMs / 1000);
          this.x = Math.min(Math.max(this.x, MARGIN), maxXInicial);
          this.y = Math.min(Math.max(this.y, MARGIN), maxYInicial);
        }

        const restante = (estadoSalvo.remainingMs || 0) - (reduzMovimento ? 0 : elapsedMs);
        if (restante > 0 && this.config.states[estadoSalvo.state]) {
          this.phaseUntil = performance.now() + restante;
          this.applyState(estadoSalvo.state);
        } else if (estadoSalvo.state === "andando") {
          this.startResting();
        } else {
          this.startWalking();
        }

        this.el.style.transform = this.facingRight ? "scaleX(-1)" : "scaleX(1)";
        this.el.style.left = this.x + "px";
        this.el.style.top = this.y + "px";
        this.lastTs = performance.now();
        requestAnimationFrame((ts) => this.tick(ts));
        return;
      }

      // posição inicial em qualquer lugar da tela (primeira visita)
      this.x = rand(MARGIN, maxXInicial);
      this.y = rand(MARGIN, maxYInicial);
      this.vx = 0;
      this.vy = 0;
      this.facingRight = Math.random() < 0.5;

      if (reduzMovimento) {
        // Respeita "prefers-reduced-motion": mostra o bicho paradinho, sentado
        // (mas ainda dá pra arrastar).
        this.applyState(config.states.sentado ? "sentado" : "andando");
        this.el.style.transform = "scaleX(1)";
        this.el.style.left = this.x + "px";
        this.el.style.top = this.y + "px";
        this.lastTs = performance.now();
        requestAnimationFrame((ts) => this.tick(ts));
        return;
      }

      this.startWalking();
      this.lastTs = performance.now();
      requestAnimationFrame((ts) => this.tick(ts));
    }

    startWalking() {
      // sorteia uma direção qualquer, inclusive diagonais
      const angulo = rand(0, Math.PI * 2);
      this.vx = Math.cos(angulo) * SPEED;
      this.vy = Math.sin(angulo) * SPEED;
      this.facingRight = this.vx > 0;
      this.phaseUntil = performance.now() + rand(WALK_MIN_SEC, WALK_MAX_SEC) * 1000;
      this.applyState("andando");
    }

    startResting(stateName) {
      const restStates = Object.keys(this.config.states).filter((s) => s !== "andando");
      const nextState = stateName || (restStates.length
        ? restStates[Math.floor(Math.random() * restStates.length)]
        : "andando");
      this.vx = 0;
      this.vy = 0;
      this.phaseUntil = performance.now() + rand(REST_MIN_SEC, REST_MAX_SEC) * 1000;
      this.applyState(nextState);
    }

    applyState(stateName) {
      this.state = stateName;
      const stateCfg = this.config.states[stateName];
      if (!stateCfg) return;

      const displayWidth = (stateCfg.w / stateCfg.h) * DISPLAY_HEIGHT;
      this.el.style.height = DISPLAY_HEIGHT + "px";
      this.el.style.width = displayWidth + "px";
      this.currentWidth = displayWidth;
      this.el.src = stateCfg.src;
    }

    onClick() {
      const heart = document.createElement("div");
      heart.className = "pet-heart";
      heart.textContent = "♥";
      heart.style.left = this.x + this.currentWidth / 2 + "px";
      heart.style.top = this.y - 18 + "px";
      layer.appendChild(heart);
      setTimeout(() => heart.remove(), 900);

      // ---- Easter egg: contagem de cliques seguidos no bicho-segredo ----
      if (this.config.id === SEGREDO_ID) {
        const agora = performance.now();
        segredoContagem = (agora - segredoUltimoClique <= SEGREDO_JANELA_MS) ? segredoContagem + 1 : 1;
        segredoUltimoClique = agora;
        if (segredoContagem >= SEGREDO_QTD) {
          segredoContagem = 0;
          dispararSegredoSecreto();
        }
      }

      if (!reduzMovimento && !this.dragging && this.state === "andando" && this.config.states.sentado) {
        this.vx = 0;
        this.vy = 0;
        this.phaseUntil = performance.now() + rand(1500, 2500);
        this.applyState("sentado");
      }
    }

    // ---- Arrastar com o mouse (ou o dedo, em telas de toque) ----
    // ---- Arrastar com o mouse (no toque, deixamos a página rolar
    // normalmente em vez de "prender" o dedo no bichinho) ----
    onPointerDown(e) {
      if (e.pointerType === "touch") return;
      this.dragging = true;
      this.vx = 0;
      this.vy = 0;
      // e.clientY é relativo à TELA; como o bicho agora é posicionado
      // relativo à PÁGINA (que pode estar rolada), somamos o scroll atual
      // pra converter a coordenada certinho.
      this.dragOffsetX = (e.clientX + window.scrollX) - this.x;
      this.dragOffsetY = (e.clientY + window.scrollY) - this.y;
      this.el.classList.add("is-dragging");
      try { this.el.setPointerCapture(e.pointerId); } catch (err) { /* ignora */ }
      e.preventDefault();
    }

    onPointerMove(e) {
      if (!this.dragging) return;
      const maxX = Math.max(MARGIN, window.innerWidth - this.currentWidth - MARGIN);
      const maxY = Math.max(MARGIN, alturaPagina() - DISPLAY_HEIGHT - MARGIN);
      this.x = Math.min(Math.max((e.clientX + window.scrollX) - this.dragOffsetX, MARGIN), maxX);
      this.y = Math.min(Math.max((e.clientY + window.scrollY) - this.dragOffsetY, MARGIN), maxY);
      this.el.style.left = this.x + "px";
      this.el.style.top = this.y + "px";
    }

    onPointerUp(e) {
      if (!this.dragging) return;
      this.dragging = false;
      this.el.classList.remove("is-dragging");
      try { this.el.releasePointerCapture(e.pointerId); } catch (err) { /* ignora */ }
      // solta sentado, bem ali onde foi largado
      this.startResting(this.config.states.sentado ? "sentado" : undefined);
    }

    tick(ts) {
      const dt = Math.min((ts - this.lastTs) / 1000, 0.1);
      this.lastTs = ts;

      if (this.dragging) {
        requestAnimationFrame((t) => this.tick(t));
        return;
      }

      const maxX = Math.max(MARGIN, window.innerWidth - this.currentWidth - MARGIN);
      const maxY = Math.max(MARGIN, alturaPagina() - DISPLAY_HEIGHT - MARGIN);

      if (!reduzMovimento) {
        if (this.state === "andando") {
          this.x += this.vx * dt;
          this.y += this.vy * dt;

          // quica nas bordas em vez de ficar travado nelas
          if (this.x <= MARGIN) { this.x = MARGIN; this.vx = Math.abs(this.vx); this.facingRight = true; }
          if (this.x >= maxX) { this.x = maxX; this.vx = -Math.abs(this.vx); this.facingRight = false; }
          if (this.y <= MARGIN) { this.y = MARGIN; this.vy = Math.abs(this.vy); }
          if (this.y >= maxY) { this.y = maxY; this.vy = -Math.abs(this.vy); }

          if (ts >= this.phaseUntil) this.startResting();
        } else if (this.phaseUntil && ts >= this.phaseUntil) {
          this.startWalking();
        }
      }

      // mantém dentro da página mesmo que a janela tenha sido redimensionada
      // ou a página tenha mudado de altura (fotos carregando etc.)
      this.x = Math.min(Math.max(this.x, MARGIN), maxX);
      this.y = Math.min(Math.max(this.y, MARGIN), maxY);

      // O bicho é desenhado olhando pra ESQUERDA por padrão, então só
      // espelha (scaleX(-1)) quando estiver olhando/andando pra DIREITA.
      const flip = this.facingRight ? "scaleX(-1)" : "scaleX(1)";
      this.el.style.transform = flip;
      this.el.style.left = this.x + "px";
      this.el.style.top = this.y + "px";

      requestAnimationFrame((t) => this.tick(t));
    }
  }

  const estadoSalvo = lerEstadoSalvo();
  const bichinhos = pets.map((petConfig) => new Bichinho(petConfig, estadoSalvo[petConfig.id] || null));

  // salva o estado ao trocar de página (ou minimizar/fechar a aba), pra
  // continuar exatamente dali na próxima página
  const salvarAgora = () => salvarEstado(bichinhos);
  window.addEventListener("pagehide", salvarAgora);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") salvarAgora();
  });
}


// ---- Música de fundo (site inteiro), usando um arquivo de áudio local ----
// Comportamento:
// - F5 (recarregar) ou abrir o site numa aba nova -> sempre começa do
//   "startSeconds" (pula a introdução).
// - Navegar entre páginas clicando em links do próprio site -> continua
//   de onde a música estava, sem voltar pro início.
// Isso usa sessionStorage (não localStorage) pra guardar a posição: ele
// morre sozinho quando a aba é fechada, então "fechar e abrir de novo"
// cai automaticamente no caso "começa do startSeconds". E a posição só é
// gravada UMA vez, ao sair da página (pagehide/visibilitychange) — não a
// cada "timeupdate" — pra não repetir a travadinha de antes.
function initBackgroundMusic(startSeconds = 13, volume = 0.4) {
  const CHAVE_TOCANDO = "cantinho:musica:tocando";
  const CHAVE_POSICAO = "cantinho:musica:posicao"; // sessionStorage
  const audio = document.getElementById("bgm-audio");
  const botao = document.getElementById("bgm-toggle");
  if (!audio || !botao) return;

  audio.volume = volume;

  function tipoDeNavegacao() {
    try {
      const entradas = performance.getEntriesByType("navigation");
      if (entradas.length > 0) return entradas[0].type; // "reload" | "navigate" | "back_forward" | ...
    } catch {
      // API indisponível — trata como navegação normal
    }
    return "navigate";
  }

  function lerPosicaoSalva() {
    try {
      const salvo = parseFloat(sessionStorage.getItem(CHAVE_POSICAO));
      return Number.isFinite(salvo) ? salvo : 0;
    } catch {
      return 0;
    }
  }

  function salvarPosicao() {
    try {
      sessionStorage.setItem(CHAVE_POSICAO, String(audio.currentTime));
    } catch {
      // sessionStorage bloqueado — só não persiste
    }
  }

  // F5 sempre reinicia no startSeconds. Clique em link do site continua
  // de onde estava (se houver posição salva nesta aba).
  const posicaoInicial =
    tipoDeNavegacao() === "reload" ? startSeconds : (lerPosicaoSalva() || startSeconds);
  audio.currentTime = posicaoInicial;

  // grava a posição só ao sair da página, não o tempo todo
  window.addEventListener("pagehide", salvarPosicao);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") salvarPosicao();
  });

  function atualizarIcone(tocando) {
    botao.textContent = tocando ? "⏸️" : "▶️";
    botao.setAttribute("aria-pressed", String(tocando));
    botao.setAttribute("aria-label", tocando ? "Pausar música de fundo" : "Tocar música de fundo");
  }

  function salvarPreferenciaTocando(tocando) {
    try {
      localStorage.setItem(CHAVE_TOCANDO, tocando ? "1" : "0");
    } catch {
      // localStorage bloqueado (modo privado etc.) — só não persiste
    }
  }

  function tocar() {
    audio.play()
      .then(() => {
        salvarPreferenciaTocando(true);
        atualizarIcone(true);
      })
      .catch((err) => {
        // navegador bloqueou autoplay com som — normal na primeira visita,
        // a pessoa só precisa clicar no botão uma vez
        console.warn("[música] autoplay bloqueado pelo navegador, precisa clicar no botão:", err);
        atualizarIcone(false);
      });
  }

  function pausar() {
    audio.pause();
    salvarPreferenciaTocando(false);
    atualizarIcone(false);
  }

  botao.addEventListener("click", () => {
    if (audio.paused) tocar();
    else pausar();
  });

  // Se a pessoa tinha pausado antes, respeita isso e não toca sozinho.
  // Caso contrário (primeira visita ou já estava tocando), tenta tocar.
  const preferenciaAnterior = (() => {
    try {
      return localStorage.getItem(CHAVE_TOCANDO);
    } catch {
      return null;
    }
  })();

  if (preferenciaAnterior === "0") {
    atualizarIcone(false);
  } else {
    tocar();
  }
}

// ---- Tela de senha pra entrar no site (uma perguntinha fofa, não é
// segurança de verdade, é só um charminho) ----
function initSiteLock(respostaCorreta) {
  const CHAVE = "cantinho:desbloqueado";
  const overlay = document.getElementById("site-lock");
  const form = document.getElementById("site-lock-form");
  const input = document.getElementById("site-lock-input");
  const erro = document.getElementById("site-lock-erro");
  const card = overlay ? overlay.querySelector(".site-lock-card") : null;
  if (!overlay || !form || !input) return;

  function normalizar(txt) {
    return txt
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function jaDesbloqueado() {
    try {
      return sessionStorage.getItem(CHAVE) === "1";
    } catch {
      return false;
    }
  }

  function desbloquear() {
    try {
      sessionStorage.setItem(CHAVE, "1");
    } catch {
      // sessionStorage bloqueado (modo privado etc.) — só vai perguntar de novo
    }
    overlay.classList.add("is-unlocked");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500);
  }

  if (jaDesbloqueado()) {
    overlay.style.display = "none";
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (normalizar(input.value) === normalizar(respostaCorreta)) {
      desbloquear();
    } else {
      if (erro) erro.hidden = false;
      if (card) {
        card.classList.remove("is-shaking");
        // força reflow pra animação poder rodar de novo em erros seguidos
        void card.offsetWidth;
        card.classList.add("is-shaking");
      }
      input.value = "";
      input.focus();
    }
  });

  input.focus();
}
