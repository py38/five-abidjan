/* ═══════════════════════════════════════════════════════════
   FIVE ABIDJAN — menu interactif · panier WhatsApp · scroll fx
   ═══════════════════════════════════════════════════════════ */
"use strict";

const WHATSAPP = "2250709088808";

/* ─────────────── DONNÉES DE LA CARTE ─────────────── */
/* g = groupes optionnels (Bœuf, Bourgogne…), n = nom, d = description, p = prix FCFA */
const MENU = {
  cuisine: [
    {
      id: "partager", tab: "Entrées à partager", title: "Entrées à partager",
      items: [
        { n: "Sardines", d: "Citron confit, ail et huile d'olive maison", p: 5000 },
        { n: "Planche de charcuterie", d: "Sélection fine à partager", p: 9000 },
        { n: "Tartine grillée", d: "Stracciatella, jambon de Serrano, tomate confite, artichaut et pesto", p: 12000 },
        { n: "Lobster de gambas", d: "Crème d'avocat", p: 13000 },
        { n: "Tartine de saumon fumé", d: "Guacamole d'avocat, crevettes sautées, gingembre, piment et caviar", p: 16000 },
      ],
    },
    {
      id: "froides", tab: "Entrées froides", title: "Entrées froides",
      items: [
        { n: "Salade César du Five", d: "La signature de la maison", p: 14500 },
        { n: "Carpaccio de poisson", d: "Grenade et jus citronné", p: 15000 },
        { n: "Carpaccio de gambas", d: "Aux agrumes", p: 18000 },
        { n: "Carpaccio de bœuf français", d: "Langoustines rôties et parmesan", p: 20000 },
        { n: "Tartare de bœuf au couteau", d: "Assaisonnement signature, salade du jardin", p: 21000 },
      ],
    },
    {
      id: "tiedes", tab: "Entrées tièdes", title: "Entrées tièdes",
      items: [
        { n: "Cuisses de grenouilles", d: "À la parisienne", p: 10000 },
        { n: "Salade d'encornets", d: "À la provençale", p: 12000 },
        { n: "Salade du jardin", d: "Cromesquis d'escargots 4 pièces, pleurotes sautés", p: 14000 },
        { n: "Crevettes grillées", d: "Coulis épicé de mangue et citron vert", p: 15000 },
        { n: "6 huîtres David Hervé", d: "Spéciales de claires n°3, gratinées au champagne", p: 20000 },
        { n: "Tartare de bœuf snacké", d: "À la minute, salade du jardin", p: 21000 },
        { n: "Poêlon d'escargots français (x12)", d: "Beurre d'herbes aux noisettes", p: 22000 },
      ],
    },
    {
      id: "pates", tab: "Nos pâtes", title: "Nos pâtes",
      items: [
        { n: "Orzo crémeux au poulet BBQ", d: "Épinards, tomates confites et pesto de basilic", p: 18000 },
        { n: "Spaghetti à la crème de poivron", d: "Chorizo et crevettes", p: 19000 },
        { n: "Calamarata aux supions", d: "À la sicilienne, crème pimentée", p: 19000 },
        { n: "Linguine aux coquillages", d: "Façon vongole", p: 25000 },
      ],
    },
    {
      id: "poissons", tab: "Les poissons", title: "Les poissons",
      items: [
        { n: "Poulpe grillé à la provençale", d: "Légumes du soleil", p: 16000 },
        { n: "Bar, crème au poivre vert", d: "Riz basmati", p: 21000 },
        { n: "Sole & coques (500 g)", d: "Sabayon iodé, jardinière de légumes", p: 23000 },
        { n: "Dorade de ligne (500 g)", d: "Nastrini aux deux pestos", p: 24000 },
        { n: "Camerones à la parisienne", d: "Tonnarelli à l'ail et piment", p: 31000 },
      ],
    },
    {
      id: "viandes", tab: "Les viandes", title: "Les viandes",
      groups: [
        { g: "Bœuf", items: [
          { n: "Filet de bœuf", d: "Crème aux deux poivres, purée Grand-Mère", p: 29000 },
          { n: "Entrecôte de bœuf dry aged", d: "Pommes frites, mesclun — viande maturée sur l'os 4 semaines", p: 35000 },
        ]},
        { g: "Agneau", items: [
          { n: "Filet d'agneau rôti", d: "Ratatouille provençale, oignons rôtis, pommes de terre bouchon", p: 33000 },
        ]},
        { g: "Porc", items: [
          { n: "Côte de porc de cochon noir du Périgord", d: "Pommes sautées forestières, crème de moutarde douce Fallot", p: 26000 },
        ]},
        { g: "Veau", items: [
          { n: "Côte de veau", d: "Crème aux morilles et vin jaune", p: 43000 },
          { n: "Escalope cordon bleu", d: "Aux truffes noires et comté 24 mois", p: 20000 },
        ]},
        { g: "Volaille", items: [
          { n: "Confit de canard maison", d: "Purée de pommes de terre forestière", p: 25000 },
          { n: "Filet de canard aux épices", d: "Purée de patate douce", p: 28000 },
        ]},
      ],
    },
    {
      id: "rares", tab: "Pièces rares", title: "Les pièces rares du chef",
      items: [
        { n: "Entrecôte Extra Noire de la Baltique", d: "Dry aged — viande maturée 31 jours", p: 42000 },
        { n: "Faux-filet de bœuf Simmental", d: "", p: 37000 },
        { n: "Côte de bœuf Supreme Beef (pour 2 personnes)", d: "Viande maturée sur l'os pendant 8 semaines", p: 200000 },
      ],
    },
    {
      id: "desserts", tab: "Desserts", title: "Desserts",
      items: [
        { n: "Mille-feuille filo", d: "Noisette et vanille", p: 8000 },
        { n: "Profiteroles", d: "Glace vanille, chocolat chaud", p: 8000 },
        { n: "Finger dacquoise", d: "Crème pistache et framboise", p: 8000 },
        { n: "Crêpes Suzette flambées", d: "Liqueur de l'Orangerie de Monaco, glace vanille", p: 8000 },
        { n: "Fondant au chocolat", d: "Éclats de noisettes, glace vanille", p: 8000 },
      ],
    },
  ],
  cave: [
    {
      id: "champagnes", tab: "Champagnes", title: "Champagnes", note: "La bouteille",
      items: [
        { n: "French Bloom", d: "Sans alcool", p: 37000 },
        { n: "Duc Prestige", d: "", p: 80000 },
        { n: "Billecart-Salmon Brut", d: "", p: 80000 },
        { n: "Billecart Demi-Sec", d: "", p: 85000 },
        { n: "Veuve Clicquot Brut", d: "", p: 90000 },
        { n: "Billecart-Salmon Rosé", d: "", p: 95000 },
        { n: "Ruinart Blanc de Blancs", d: "", p: 140000 },
        { n: "Dom Pérignon", d: "", p: 260000 },
      ],
    },
    {
      id: "blancs", tab: "Vins blancs", title: "Vins blancs", note: "La bouteille",
      groups: [
        { g: "Alsace", items: [
          { n: "Riesling", d: "Gustave Lorentz", p: 25000 },
        ]},
        { g: "Bourgogne", items: [
          { n: "Aligoté", d: "Domaine Montchovet", p: 27000 },
          { n: "Hautes Côtes de Beaune Chardonnay", d: "Domaine Montchovet", p: 32000 },
          { n: "Chablis", d: "J. Moreau & Fils", p: 35000 },
          { n: "Chablis", d: "Billaud Simon", p: 39000 },
          { n: "Pouilly-Fuissé « Les Vieux Murs »", d: "Domaine Loron", p: 46000 },
          { n: "Meursault", d: "Domaine Montchovet", p: 68000 },
        ]},
        { g: "Vallée de la Loire", items: [
          { n: "Vouvray Moelleux « La Javeline »", d: "Domaine Vouvray Tranquille", p: 34000 },
          { n: "Sauvignon", d: "Domaine de Touraine Dilecta", p: 34000 },
          { n: "Sauvignon « Vieilles Vignes »", d: "Château de Pont", p: 37000 },
        ]},
        { g: "Sud de la France", items: [
          { n: "Cigalus", d: "Gérard Bertrand", p: 63000 },
        ]},
        { g: "Italie", items: [
          { n: "Moscato d'Asti", d: "", p: 35000 },
        ]},
      ],
    },
    {
      id: "roses", tab: "Vins rosés", title: "Vins rosés", note: "La bouteille",
      items: [
        { n: "Cuvée Aurana", d: "Maison Grand Caumont", p: 25000 },
        { n: "Whispering Angel", d: "Côtes de Provence", p: 30000 },
        { n: "Minuty Prestige", d: "Côtes de Provence", p: 32000 },
      ],
    },
    {
      id: "rouges", tab: "Vins rouges", title: "Vins rouges", note: "La bouteille",
      groups: [
        { g: "Bordeaux", items: [
          { n: "Plaisir de Siaurac", d: "Lalande de Pomerol", p: 28000 },
          { n: "Château Picard", d: "Saint-Estèphe", p: 33000 },
          { n: "Kid d'Arsac", d: "Margaux", p: 39000 },
          { n: "Pavillon du Glana", d: "Saint-Julien", p: 39000 },
          { n: "La Croix de Carbonnieux", d: "Pessac-Léognan", p: 42000 },
          { n: "Fugue de Nenin", d: "Pomerol", p: 58000 },
        ]},
        { g: "Bourgogne", items: [
          { n: "Pinot Noir", d: "Domaine Loron", p: 25000 },
          { n: "Hautes Côtes de Beaune « Vieilles Vignes »", d: "Domaine Montchovet", p: 32000 },
          { n: "Volnay", d: "Domaine Montchovet", p: 42000 },
          { n: "Pommard", d: "Domaine Montchovet", p: 66000 },
          { n: "Beaune 1er Cru « Les Aigrots »", d: "Domaine Montchovet", p: 67000 },
        ]},
        { g: "Beaujolais", items: [
          { n: "Beaujolais Villages", d: "Château de la Terrière", p: 24000 },
          { n: "Juliénas", d: "Domaine de la Vieille Église", p: 26000 },
          { n: "Brouilly", d: "Château de la Terrière", p: 28000 },
        ]},
        { g: "Languedoc-Roussillon", items: [
          { n: "Garriguea", d: "Château du Grand Caumont", p: 25000 },
          { n: "Réserve de Laurence 2023", d: "", p: 32000 },
          { n: "Capus Monti 2023", d: "Vieilles Vignes", p: 46000 },
        ]},
        { g: "Vallée du Rhône", items: [
          { n: "Crozes-Hermitage « Les 3 Chênes »", d: "Domaine Darnaud", p: 55000 },
          { n: "Saint-Joseph « Deschants »", d: "M. Chapoutier", p: 60000 },
          { n: "Châteauneuf-du-Pape", d: "Clos de l'Oratoire des Papes", p: 120000 },
        ]},
        { g: "Vallée de la Loire", items: [
          { n: "Attitude Pinot Noir", d: "", p: 27000 },
          { n: "La Paterne", d: "Domaine Antoine Sanzay", p: 38000 },
        ]},
        { g: "Vin nature", items: [
          { n: "L'InCôtRuptible", d: "Cave de Rouvray — un vin nature, authentique et vivant", p: 28000 },
        ]},
      ],
    },
  ],
};

const fmt = (n) => n.toLocaleString("fr-FR").replace(/ | /g, " ") + " FCFA";

/* ─────────────── PRELOADER ─────────────── */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("preloader").classList.add("done"), 1400);
});
setTimeout(() => document.getElementById("preloader").classList.add("done"), 4000); // filet de sécurité

/* ─────────────── NAVIGATION ─────────────── */
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    burger.classList.remove("open");
  })
);

/* ─────────────── REVEAL + PARALLAXE + VIDÉOS (au scroll) ─────────────── */
let revealEls = [...document.querySelectorAll(".reveal, .reveal-clip")];
const pxEls = [...document.querySelectorAll("[data-parallax]")];
const lazyVideos = [...document.querySelectorAll("video.lazy-video")];
const heroMedia = document.getElementById("heroMedia");
const heroContent = document.getElementById("heroContent");
let ticking = false;

function onScrollFrame() {
  const vh = window.innerHeight;

  /* révélation des éléments entrés dans le viewport */
  if (revealEls.length) {
    revealEls = revealEls.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) { el.classList.add("in"); return false; }
      return true;
    });
  }

  /* parallaxe douce */
  pxEls.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.bottom < -100 || r.top > vh + 100) return;
    const speed = parseFloat(el.dataset.parallax);
    const offset = (r.top + r.height / 2 - vh / 2) * speed;
    el.style.transform = `translateY(${offset.toFixed(1)}px)`;
  });

  /* hero : zoom + fondu du contenu */
  const y = window.scrollY;
  if (y < vh && heroMedia) {
    heroMedia.style.transform = `translateY(${y * 0.35}px) scale(${1 + y / vh * 0.06})`;
    heroContent.style.opacity = Math.max(0, 1 - y / (vh * 0.7));
    heroContent.style.transform = `translateY(${y * 0.18}px)`;
  }

  /* vidéos : lecture uniquement à l'écran */
  lazyVideos.forEach((v) => {
    const r = v.getBoundingClientRect();
    const visible = r.top < vh && r.bottom > 0;
    if (visible && v.paused) v.play().catch(() => {});
    else if (!visible && !v.paused) v.pause();
  });

  ticking = false;
}
function requestFrame() {
  if (!ticking) { requestAnimationFrame(onScrollFrame); ticking = true; }
}
window.addEventListener("scroll", requestFrame, { passive: true });
window.addEventListener("resize", requestFrame, { passive: true });
window.addEventListener("load", requestFrame);
setInterval(onScrollFrame, 600); // filet de sécurité (contenu injecté, polices, onglet suspendu…)
onScrollFrame();

/* ─────────────── MENU INTERACTIF ─────────────── */
const menuTabs = document.getElementById("menuTabs");
const menuPanel = document.getElementById("menuPanel");
let currentBook = "cuisine";
let currentCat = MENU.cuisine[0].id;

function catById(id) {
  return MENU.cuisine.find((c) => c.id === id) || MENU.cave.find((c) => c.id === id);
}

function renderTabs() {
  menuTabs.innerHTML = "";
  MENU[currentBook].forEach((cat) => {
    const b = document.createElement("button");
    b.className = "tab-btn" + (cat.id === currentCat ? " active" : "");
    b.textContent = cat.tab;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", cat.id === currentCat);
    b.addEventListener("click", () => {
      currentCat = cat.id;
      renderTabs();
      renderPanel();
    });
    menuTabs.appendChild(b);
  });
}

function itemRow(item, idx) {
  const li = document.createElement("li");
  li.className = "menu-item";
  li.style.animationDelay = Math.min(idx * 55, 500) + "ms";
  li.innerHTML = `
    <div class="mi-txt">
      <div class="mi-name">${item.n}</div>
      ${item.d ? `<div class="mi-desc">${item.d}</div>` : ""}
    </div>
    <div class="mi-dots"></div>
    <div class="mi-price">${item.p.toLocaleString("fr-FR")}</div>
    <button class="mi-add" aria-label="Ajouter ${item.n} au panier">+</button>`;
  li.querySelector(".mi-add").addEventListener("click", (ev) => {
    addToCart(item);
    const btn = ev.currentTarget;
    btn.classList.add("added");
    btn.textContent = "✓";
    setTimeout(() => { btn.classList.remove("added"); btn.textContent = "+"; }, 900);
  });
  return li;
}

function renderPanel() {
  const cat = catById(currentCat);
  menuPanel.innerHTML = "";
  const box = document.createElement("div");
  box.className = "menu-cat";
  const h = document.createElement("h3");
  h.className = "cat-title";
  h.textContent = cat.title;
  box.appendChild(h);
  const note = document.createElement("p");
  note.className = "cat-note";
  note.textContent = cat.note || "Prix en francs CFA · service compris";
  box.appendChild(note);

  let idx = 0;
  if (cat.groups) {
    cat.groups.forEach((grp) => {
      const gt = document.createElement("h4");
      gt.className = "menu-group-title";
      gt.textContent = grp.g;
      box.appendChild(gt);
      const ul = document.createElement("ul");
      ul.className = "menu-items";
      grp.items.forEach((it) => ul.appendChild(itemRow(it, idx++)));
      box.appendChild(ul);
    });
  } else {
    const ul = document.createElement("ul");
    ul.className = "menu-items";
    cat.items.forEach((it) => ul.appendChild(itemRow(it, idx++)));
    box.appendChild(ul);
  }
  menuPanel.appendChild(box);
}

document.querySelectorAll(".switch-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.book === currentBook) return;
    currentBook = btn.dataset.book;
    currentCat = MENU[currentBook][0].id;
    document.querySelectorAll(".switch-btn").forEach((b) => {
      const active = b === btn;
      b.classList.toggle("active", active);
      b.setAttribute("aria-selected", active);
    });
    renderTabs();
    renderPanel();
  });
});

renderTabs();
renderPanel();

/* ─────────────── PANIER ─────────────── */
const cartFab = document.getElementById("cartFab");
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const toast = document.getElementById("toast");

let cart = [];
try { cart = JSON.parse(localStorage.getItem("five_cart") || "[]"); } catch (_) { cart = []; }

function saveCart() { localStorage.setItem("five_cart", JSON.stringify(cart)); }

function addToCart(item) {
  const found = cart.find((c) => c.n === item.n && c.p === item.p);
  if (found) found.q += 1;
  else cart.push({ n: item.n, d: item.d, p: item.p, q: 1 });
  saveCart();
  renderCart();
  cartCount.classList.remove("bump");
  void cartCount.offsetWidth;
  cartCount.classList.add("bump");
  showToast(`<b>${item.n}</b> ajouté à votre commande`);
}

let toastTimer;
function showToast(html) {
  toast.innerHTML = html;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderCart() {
  const count = cart.reduce((s, c) => s + c.q, 0);
  const total = cart.reduce((s, c) => s + c.q * c.p, 0);
  cartCount.textContent = count;
  cartFab.classList.toggle("empty", count === 0);
  cartPanel.classList.toggle("is-empty", count === 0);
  cartTotal.textContent = fmt(total);

  cartItems.innerHTML = "";
  cart.forEach((c, i) => {
    const row = document.createElement("div");
    row.className = "cart-line";
    row.innerHTML = `
      <div class="cl-txt">
        <div class="cl-name">${c.n}</div>
        <div class="cl-price">${fmt(c.p)}</div>
      </div>
      <div class="cl-qty">
        <button aria-label="Retirer un">−</button>
        <span>${c.q}</span>
        <button aria-label="Ajouter un">+</button>
      </div>
      <button class="cl-remove" aria-label="Supprimer ${c.n}">✕</button>`;
    const [minus, , plus] = row.querySelectorAll(".cl-qty > *");
    minus.addEventListener("click", () => {
      c.q -= 1;
      if (c.q <= 0) cart.splice(i, 1);
      saveCart(); renderCart();
    });
    plus.addEventListener("click", () => { c.q += 1; saveCart(); renderCart(); });
    row.querySelector(".cl-remove").addEventListener("click", () => {
      cart.splice(i, 1); saveCart(); renderCart();
    });
    cartItems.appendChild(row);
  });
}

function openCart(open) {
  document.body.classList.toggle("cart-open", open);
  cartFab.setAttribute("aria-expanded", open);
}
cartFab.addEventListener("click", () => openCart(!document.body.classList.contains("cart-open")));
document.getElementById("cartClose").addEventListener("click", () => openCart(false));
cartOverlay.addEventListener("click", () => openCart(false));
document.getElementById("cartGoMenu").addEventListener("click", () => openCart(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") openCart(false); });

document.getElementById("cartSend").addEventListener("click", () => {
  if (!cart.length) return;
  const nom = document.getElementById("cartNom").value.trim();
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const total = cart.reduce((s, c) => s + c.q * c.p, 0);

  let msg = "🍽️ *COMMANDE — FIVE ABIDJAN*\n\n";
  cart.forEach((c) => {
    msg += `• ${c.q}× ${c.n} — ${fmt(c.p * c.q)}\n`;
  });
  msg += `\n*Total : ${fmt(total)}*\n`;
  msg += `📍 Mode : ${mode}\n`;
  if (nom) msg += `👤 Nom : ${nom}\n`;
  msg += "\nMerci de me confirmer la disponibilité. 🙏";

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
});

renderCart();

/* ─────────────── RÉSERVATION → WHATSAPP ─────────────── */
const resaForm = document.getElementById("resaForm");
const rDate = document.getElementById("rDate");
rDate.min = new Date().toISOString().split("T")[0];

resaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!resaForm.reportValidity()) return;

  const val = (id) => document.getElementById(id).value.trim();
  const dateFr = new Date(val("rDate") + "T12:00:00").toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  let msg = "✨ *RÉSERVATION — FIVE ABIDJAN*\n\n";
  msg += `👤 Nom : ${val("rNom")}\n`;
  msg += `📞 Téléphone : ${val("rTel")}\n`;
  msg += `📅 Date : ${dateFr}\n`;
  msg += `🕗 Heure : ${val("rHeure")}\n`;
  msg += `👥 Convives : ${val("rPers")}\n`;
  msg += `🥂 Occasion : ${val("rOccasion")}\n`;
  if (val("rMsg")) msg += `\n💬 Message : ${val("rMsg")}\n`;
  msg += "\nMerci de me confirmer la disponibilité. 🙏";

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
});

/* ─────────────── DIVERS ─────────────── */
document.getElementById("year").textContent = new Date().getFullYear();
