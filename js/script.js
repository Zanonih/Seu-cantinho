// ============================================
// Para Você — lógica compartilhada
// ============================================

// ---- Listas editáveis: troque pelos filmes e receitas de vocês ----
const FILMES = [
  "Saga Crepúsculo",
  "Teen Wolf",
  "Hunter x Hunter",
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
];

// Lista de desejos / sonhos a dois — marque o que já foi feito.
// Pra adicionar mais, é só colar um novo texto entre aspas e vírgula.
// O que já foi marcado fica salvo no navegador de quem marcou.
const DESEJOS = [
  "Viajar pra praia juntos",
  "Fazer uma trilha ao ar livre",
  "Ir a um show de uma banda que a gente ama",
  "Aprender uma receita nova juntos",
  "Maratonar uma série nova do início ao fim",
  "Tirar uma foto polaroid pra colar no álbum",
  "Fazer um piquenique",
  "Visitar um lugar novo na cidade",
  "Acampar uma noite",
  "Assistir o pôr do sol num lugar bonito",
  "Cozinhar juntos pra amigos",
  "Dar um rolê só pra tirar foto boba",
  // adicione mais desejos aqui
];

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
            ? `<img src="${item.src}" alt="${item.alt}" loading="lazy">`
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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("is-open");
      lightboxImg.src = "";
    }
  });
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
    albumTitulo.textContent = info.nome;
    albumGrid.innerHTML = info.fotos.map((src, i) => `
      <button type="button" class="pet-album-thumb" data-indice="${i}">
        <img src="${src}" alt="Foto de ${info.nome}" loading="lazy">
      </button>`).join("");

    albumGrid.querySelectorAll(".pet-album-thumb").forEach((btn) => {
      btn.addEventListener("click", () => {
        abrirLightbox(info.fotos, Number(btn.dataset.indice));
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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightboxOverlay.classList.contains("is-open")) fecharLightbox();
      else if (albumOverlay.classList.contains("is-open")) fecharAlbum();
    }
    if (lightboxOverlay.classList.contains("is-open")) {
      if (e.key === "ArrowLeft") mudarFoto(-1);
      if (e.key === "ArrowRight") mudarFoto(1);
    }
  });
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
function initTimeCapsule(dataAberturaISO) {
  const dataAbertura = new Date(dataAberturaISO);
  const lacrada = document.getElementById("capsula-lacrada");
  const aberta = document.getElementById("capsula-aberta");
  const contagem = {
    dias: document.getElementById("cap-dias"),
    horas: document.getElementById("cap-horas"),
    minutos: document.getElementById("cap-minutos"),
    segundos: document.getElementById("cap-segundos"),
  };
  if (!lacrada || !aberta) return;

  function mostrarAberta() {
    lacrada.hidden = true;
    aberta.hidden = false;
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
  }

  atualizar();
  setInterval(atualizar, 1000);
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

  function abrirCarta() {
    button.setAttribute("aria-expanded", "true");
    button.disabled = true;

    letter.setAttribute("aria-hidden", "false");
    if (cta) cta.removeAttribute("tabindex");

    if (reduzMovimento) {
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

  button.addEventListener("click", abrirCarta);
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
      const maxYInicial = Math.max(MARGIN, window.innerHeight - DISPLAY_HEIGHT - MARGIN);

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

      if (!reduzMovimento && !this.dragging && this.state === "andando" && this.config.states.sentado) {
        this.vx = 0;
        this.vy = 0;
        this.phaseUntil = performance.now() + rand(1500, 2500);
        this.applyState("sentado");
      }
    }

    // ---- Arrastar com o mouse (ou o dedo, em telas de toque) ----
    onPointerDown(e) {
      this.dragging = true;
      this.vx = 0;
      this.vy = 0;
      this.dragOffsetX = e.clientX - this.x;
      this.dragOffsetY = e.clientY - this.y;
      this.el.classList.add("is-dragging");
      try { this.el.setPointerCapture(e.pointerId); } catch (err) { /* ignora */ }
      e.preventDefault();
    }

    onPointerMove(e) {
      if (!this.dragging) return;
      const maxX = Math.max(MARGIN, window.innerWidth - this.currentWidth - MARGIN);
      const maxY = Math.max(MARGIN, window.innerHeight - DISPLAY_HEIGHT - MARGIN);
      this.x = Math.min(Math.max(e.clientX - this.dragOffsetX, MARGIN), maxX);
      this.y = Math.min(Math.max(e.clientY - this.dragOffsetY, MARGIN), maxY);
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
      const maxY = Math.max(MARGIN, window.innerHeight - DISPLAY_HEIGHT - MARGIN);

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

      // mantém dentro da tela mesmo que a janela tenha sido redimensionada
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
