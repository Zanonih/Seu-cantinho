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
  "The Grand Budapest Hotel",
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
  const { buttonId, resetButtonId, windowId, listId, poolListId, noteId, items } = config;
  const button = document.getElementById(buttonId);
  const resetButton = document.getElementById(resetButtonId);
  const windowEl = document.getElementById(windowId);
  const listEl = document.getElementById(listId);
  const poolListEl = poolListId ? document.getElementById(poolListId) : null;
  const noteEl = noteId ? document.getElementById(noteId) : null;
  if (!button || !windowEl || !listEl || !items || items.length === 0) return;

  const ITEM_HEIGHT = 56;
  let spinning = false;
  let disponiveis = [...items];
  let sorteados = [];

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

  let layer = document.querySelector(".pet-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "pet-layer";
    document.body.appendChild(layer);
  }

  class Bichinho {
    constructor(config) {
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

      // posição inicial em qualquer lugar da tela
      this.x = rand(MARGIN, Math.max(MARGIN, window.innerWidth - 120));
      this.y = rand(MARGIN, Math.max(MARGIN, window.innerHeight - DISPLAY_HEIGHT - MARGIN));
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

  pets.forEach((petConfig) => {
    new Bichinho(petConfig);
  });
}
