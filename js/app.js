// =======================
// I18N / Textos UI
// =======================
const I18N = (() => {
    let lang = localStorage.getItem("ml_lang") || "es";
  
    const ui = {
      es: {
        choose_category: "Elige tu categoría",
        your_order: "Tu pedido",
        close: "Cerrar ✕",
        ship_to_coord: "A coordinar",
        sendWA: "Enviar pedido por WhatsApp",
        clear: "Vaciar carrito",
        subtotal: "Subtotal",
        delivery: "Delivery",
        total: "Total",
        hello: "Hola Maestro Lee! Quiero hacer un pedido:",
        cart_empty: "Tu carrito está vacío 🧺",
      },
      en: {
        choose_category: "Choose your category",
        your_order: "Your order",
        close: "Close ✕",
        ship_to_coord: "To coordinate",
        sendWA: "Send order via WhatsApp",
        clear: "Clear cart",
        subtotal: "Subtotal",
        delivery: "Delivery",
        total: "Total",
        hello: "Hi Maestro Lee! I'd like to order:",
        cart_empty: "Your cart is empty 🧺",
      },
    };
  
    const set = (l) => {
      lang = l;
      localStorage.setItem("ml_lang", l);
    };
    const get = () => lang;
    const name = (p) =>
      p.name ?? (lang === "es" ? p.name_es : p.name_en) ?? "";
    const desc = (p) =>
      p.desc ?? (lang === "es" ? p.desc_es : p.desc_en) ?? "";
    const text = (k) => (ui[lang] && ui[lang][k]) || k;
    const money = (n) =>
      new Intl.NumberFormat(
        lang === "es" ? "es-AR" : "en-US",
        { style: "currency", currency: "USD", minimumFractionDigits: 0 }
      )
        .format(n)
        .replace(/\s/g, "");
  
    return { set, get, name, desc, text, money, ui };
  })();
  
  // =======================
  // Categorías / Menú
  // =======================
  const CAT_NAMES = {
    es: {
      entremeses: "Entremeses",
      sopas: "Sopas",
      arroz: "Arroz",
      pollo: "Pollo",
      res: "Carne de Res",
      cerdo: "Cerdo",
      pastas: "Pastas",
      combos: "Combos",
      postre: "Postre",
    },
    en: {
      entremeses: "Starters",
      sopas: "Soups",
      arroz: "Rice",
      pollo: "Chicken",
      res: "Beef",
      cerdo: "Pork",
      pastas: "Noodles",
      combos: "Combos",
      postre: "Dessert",
    },
  };
  
  // Menú real
  const MENU = [
    {
      id: "entremeses",
      items: [
        {
          id: "lumpias-2",
          name_es: "Lumpias (2 piezas)",
          name_en: "Spring Rolls (2 pcs)",
          desc_es: "Crujientes rollos fritos.",
          desc_en: "Crispy fried spring rolls.",
          price: 4.55,
          img: "img/lupia.JPEG",
        },
        {
          id: "chop-especial",
          name_es: "Chop Suey Especial",
          name_en: "Special Chop Suey",
          desc_es:
            "Cerdo y jamón con repollo, zanahoria, apio y pimientos.",
          desc_en:
            "Pork and ham with cabbage, carrot, celery and peppers.",
          price: 9.99,
          img: "img/chopsuey.JPEG",
        },
        {
          id: "chop-carne",
          name_es: "Chop Suey con Carne",
          name_en: "Beef Chop Suey",
          desc_es:
            "Carne salteada con brotes de soja, apio, repollo, zanahoria y pimientos.",
          desc_en:
            "Beef stir-fried with bean sprouts, celery, cabbage, carrot and peppers.",
          price: 10.99,
          img: "img/chopsuey.JPEG",
        },
        {
          id: "chop-camarones",
          name_es: "Chop Suey con Camarones",
          name_en: "Shrimp Chop Suey",
          desc_es:
            "Camarones con verduras mixtas (repollo, pimientos y apio).",
          desc_en: "Shrimp with mixed vegetables (cabbage, peppers, celery).",
          price: 11.99,
          img: "img/chopsuey.JPEG",
        },
        {
          id: "chop-pollo",
          name_es: "Chop Suey con Pollo",
          name_en: "Chicken Chop Suey",
          desc_es: "Pollo salteado con verduras crujientes.",
          desc_en: "Chicken stir-fried with crunchy vegetables.",
          price: 9.99,
          img: "img/chopsuey.JPEG",
        },
        {
          id: "costillas-agridulces-4",
          name_es: "Costillas Agridulces (4 piezas)",
          name_en: "Sweet & Sour Ribs (4 pcs)",
          desc_es: "Costillas en salsa agridulce.",
          desc_en: "Ribs in sweet & sour sauce.",
          price: 11.99,
          img: "img/costillas.jpeg",
        },
        {
          id: "dumpling-8",
          name_es: "Dumpling (8 piezas)",
          name_en: "Dumplings (8 pcs)",
          desc_es: "Rellenos al vapor.",
          desc_en: "Steamed stuffed dumplings.",
          price: 6.55,
          img: "img/Dumplings.jpeg",
        },
      ],
    },
    {
      id: "sopas",
      items: [
        {
          id: "sopa-wonton",
          name_es: "Sopa de Wonton",
          name_en: "Wonton Soup",
          desc_es: "Caldo de pollo con wonton.",
          desc_en: "Chicken broth with wontons.",
          price: 5.90,
          img: "img/sopas.JPEG",
        },
        {
          id: "sopa-wonton-mee",
          name_es: "Sopa de Wonton Mee",
          name_en: "Wonton Mee Soup",
          desc_es: "Caldo de pollo con wonton, cerdo y fideos.",
          desc_en: "Chicken broth with wontons, pork and noodles.",
          price: 6.75,
          img: "img/sopas.JPEG",
        },
      ],
    },
    {
      id: "arroz",
      items: [
        {
          id: "arroz-especial",
          name_es: "Arroz Frito Especial",
          name_en: "Special Fried Rice",
          desc_es:
            "Arroz con cerdo, pollo, camarones, vegetales, huevo y brotes de soja.",
          desc_en:
            "Rice with pork, chicken, shrimp, veggies, egg and bean sprouts.",
          price: 9.25,
          img: "img/arrozespecial.JPEG",
        },
        {
          id: "arroz-cerdo",
          name_es: "Arroz Frito con Cerdo",
          name_en: "Fried Rice with Pork",
          desc_es: "Cerdo, huevo, cebolla verde y brotes de soja.",
          desc_en: "Pork, egg, scallions and bean sprouts.",
          price: 8.99,
          img: "img/arrozcerdo.jpeg",
        },
        {
          id: "arroz-pollo",
          name_es: "Arroz Frito con Pollo",
          name_en: "Fried Rice with Chicken",
          desc_es: "Tiras de pollo, pimientos y cebolla verde.",
          desc_en: "Chicken strips, peppers and scallions.",
          price: 8.99,
          img: "img/arrozpollo.JPEG",
        },
        {
          id: "arroz-carne",
          name_es: "Arroz Frito con Carne",
          name_en: "Fried Rice with Beef",
          desc_es: "Carne en cubos y vegetales mixtos.",
          desc_en: "Diced beef and mixed vegetables.",
          price: 12.99,
          img: "img/arrozcarne.jpeg",
        },
        {
          id: "arroz-jamon",
          name_es: "Arroz Frito con Jamón",
          name_en: "Fried Rice with Ham",
          desc_es:
            "Jamón en cubitos, huevo, vegetales y brotes de soja.",
          desc_en: "Diced ham, egg, vegetables and bean sprouts.",
          price: 8.55,
          img: "img/arroz.png",
        },
        {
          id: "arroz-vegetales",
          name_es: "Arroz Frito con Vegetales",
          name_en: "Vegetable Fried Rice",
          desc_es: "Vegetales mixtos y cebolla verde.",
          desc_en: "Mixed vegetables and scallions.",
          price: 6.99,
          img: "img/arrozvegetales.JPG",
        },
      ],
    },
    {
      id: "pollo",
      items: [
        {
          id: "pollo-agridulce",
          name_es: "Pollo Agridulce",
          name_en: "Sweet & Sour Chicken",
          desc_es: "Pollo con salsa agridulce.",
          desc_en: "Chicken with sweet & sour sauce.",
          price: 11.25,
          img: "img/polloagridulce.JPEG",
        },
        {
          id: "pollo-agridulce-pina",
          name_es: "Pollo Agridulce con Piña",
          name_en: "Sweet & Sour Chicken with Pineapple",
          desc_es: "Con piña en cubos y pimentón.",
          desc_en: "With pineapple chunks and bell pepper.",
          price: 11.99,
          img: "img/pollopiña.JPEG",
        },
        {
          id: "pollo-agridulce-picante",
          name_es: "Pollo Agridulce Picante",
          name_en: "Spicy Sweet & Sour Chicken",
          desc_es: "Pollo con salsa agridulce picante.",
          desc_en: "Chicken in spicy sweet & sour sauce.",
          price: 11.25,
          img: "img/polloagridulcepicante.JPEG",
        },
        {
          id: "pollo-vegetales",
          name_es: "Pollo con Vegetales",
          name_en: "Chicken with Vegetables",
          desc_es: "Pollo con vegetales mixtos.",
          desc_en: "Chicken with mixed vegetables.",
          price: 12.99,
          img: "img/pollovegetales1.JPEG",
        },
        {
          id: "pollo-brocoli",
          name_es: "Pollo con Brócoli",
          name_en: "Chicken with Broccoli",
          desc_es: "Pollo salteado con brócoli.",
          desc_en: "Stir-fried chicken with broccoli.",
          price: 12.99,
          img: "img/pollobrocoli.JPEG",
        },
        {
          id: "pollo-champinones",
          name_es: "Pollo con Champiñones",
          name_en: "Chicken with Mushrooms",
          desc_es: "Pollo con champiñones.",
          desc_en: "Chicken with mushrooms.",
          price: 12.99,
          img: "img/pollochamp.JPEG",
        },
        {
          id: "pollo-ostras",
          name_es: "Pollo en Salsa de Ostras",
          name_en: "Chicken in Oyster Sauce",
          desc_es:
            "Con cebolla, pimentón y cebollino en salsa de ostras.",
          desc_en:
            "With onion, bell pepper and chives in oyster sauce.",
          price: 11.99,
          img: "img/pollo.png",
        },
        {
          id: "pollo-teriyaki",
          name_es: "Pollo Teriyaki",
          name_en: "Chicken Teriyaki",
          desc_es:
            "Pollo con mixto de vegetales y salsa teriyaki.",
          desc_en:
            "Chicken with mixed vegetables in teriyaki sauce.",
          price: 11.99,
          img: "img/pollo.png",
        },
        {
          id: "pollo-naranja",
          name_es: "Pollo a la Naranja",
          name_en: "Orange Chicken",
          desc_es: "Pollo en salsa de naranja.",
          desc_en: "Chicken in orange sauce.",
          price: 11.25,
          img: "img/pollonaranja.JPEG",
        },
      ],
    },
    {
      id: "res",
      items: [
        {
          id: "res-vegetales",
          name_es: "Carne de Res con Vegetales",
          name_en: "Beef with Vegetables",
          desc_es:
            "Carne con cebolla, pimientos, zanahoria y brócoli.",
          desc_en:
            "Beef with onion, peppers, carrot and broccoli.",
          price: 14.99,
          img: "img/carnevegetales.JPEG",
        },
        {
          id: "res-brocoli",
          name_es: "Carne de Res con Brócoli",
          name_en: "Beef with Broccoli",
          desc_es: "Carne salteada con ajo y jengibre.",
          desc_en: "Beef stir-fried with garlic and ginger.",
          price: 14.99,
          img: "img/carnebrocoli.JPEG",
        },
        {
          id: "res-jengibre-cebollin",
          name_es: "Carne de Res con Jengibre y Cebollín",
          name_en: "Beef with Ginger & Chives",
          desc_es:
            "Carne salteada con ajo, jengibre y cebollino.",
          desc_en:
            "Beef stir-fried with garlic, ginger and chives.",
          price: 14.99,
          img: "img/carne.png",
        },
        {
          id: "res-ostras",
          name_es: "Carne de Res en Salsa de Ostras",
          name_en: "Beef in Oyster Sauce",
          desc_es:
            "Carne con vegetales mixtos en salsa de ostras.",
          desc_en:
            "Beef with mixed vegetables in oyster sauce.",
          price: 14.99,
          img: "img/carne.png",
        },
        {
          id: "res-champinones",
          name_es: "Carne de Res con Champiñones",
          name_en: "Beef with Mushrooms",
          desc_es:
            "Carne salteada con cebolla y champiñones.",
          desc_en: "Beef stir-fried with onion and mushrooms.",
          price: 14.99,
          img: "img/carnechamp.JPEG",
        },
        {
          id: "res-jojoticos",
          name_es: "Carne de Res con Jojoticos chinos",
          name_en: "Beef with Baby Corn",
          desc_es:
            "Carne salteada con cebolla y jojoticos.",
          desc_en: "Beef stir-fried with onion and baby corn.",
          price: 15.44,
          img: "img/carnejojo.JPEG",
        },
      ],
    },
    {
      id: "cerdo",
      items: [
        {
          id: "cerdo-agridulce",
          name_es: "Cerdo Agridulce",
          name_en: "Sweet & Sour Pork",
          desc_es: "Cerdo con salsa agridulce.",
          desc_en: "Pork in sweet & sour sauce.",
          price: 11.25,
          img: "img/cerdo.png",
        },
        {
          id: "cerdo-vegetales",
          name_es: "Cerdo con Vegetales",
          name_en: "Pork with Vegetables",
          desc_es: "Cerdo con vegetales mixtos.",
          desc_en: "Pork with mixed vegetables.",
          price: 11.99,
          img: "img/cerdo.png",
        },
        {
          id: "cerdo-jengibre-cebollin",
          name_es: "Cerdo Jengibre y Cebollín",
          name_en: "Pork with Ginger & Chives",
          desc_es:
            "Cerdo salteado con ajo, jengibre y cebollino.",
          desc_en:
            "Pork stir-fried with garlic, ginger and chives.",
          price: 11.99,
          img: "img/cerdo.png",
        },
      ],
    },
    {
      id: "pastas",
      items: [
        {
          id: "pasta-carne",
          name_es: "Pasta con Carne",
          name_en: "Noodles with Beef",
          desc_es:
            "Fideos salteados con tiras de carne y vegetales.",
          desc_en:
            "Stir-fried noodles with beef and vegetables.",
          price: 11.99,
          img: "img/fideoscarne.JPEG",
        },
        {
          id: "pasta-cerdo",
          name_es: "Pasta con Cerdo",
          name_en: "Noodles with Pork",
          desc_es:
            "Fideos con lonjas de cerdo y verduras crujientes.",
          desc_en:
            "Noodles with pork and crunchy vegetables.",
          price: 9.99,
          img: "img/fideocerdo.JPEG",
        },
        {
          id: "pasta-pollo",
          name_es: "Pasta con Pollo",
          name_en: "Noodles with Chicken",
          desc_es:
            "Fideos con pollo y verduras crujientes.",
          desc_en:
            "Noodles with chicken and crunchy vegetables.",
          price: 9.99,
          img: "img/pastapollo.JPEG",
        },
        {
          id: "pasta-vegetales",
          name_es: "Pasta con Vegetales",
          name_en: "Vegetable Noodles",
          desc_es: "Fideos salteados con vegetales variados.",
          desc_en: "Stir-fried noodles with assorted vegetables.",
          price: 9.0,
          img: "img/pastavegetales.JPEG",
        },
        {
          id: "pasta-especial",
          name_es: "Pasta Especial",
          name_en: "Special Noodles",
          desc_es:
            "Fideos con camarones, pollo, jamón y vegetales.",
          desc_en:
            "Noodles with shrimp, chicken, ham and vegetables.",
          price: 10.99,
          img: "img/pastas.png",
        },
      ],
    },
    {
      id: "combos",
      items: [
        {
          id: "combo-veg-agridulce-lumpia",
          name_es:
            "Arroz frito con vegetales + Pollo agridulce + Lumpia",
          name_en:
            "Veg fried rice + Sweet & sour chicken + Spring roll",
          desc_es: "Combo individual.",
          desc_en: "Single combo.",
          price: 9.99,
          img: "img/Arroz frito con vegetales + Pollo agridulce + Lumpia.JPEG",
        },
        {
          id: "combo-especial-res-lumpia",
          name_es:
            "Arroz frito especial + Carne con brócoli + Lumpia",
          name_en:
            "Special fried rice + Beef & broccoli + Spring roll",
          desc_es: "Combo individual.",
          desc_en: "Single combo.",
          price: 11.99,
          img: "img/Arroz frito especial + Carne con brócoli + Lumpia.JPEG",
        },
        {
          id: "combo-especial-cerdo-o-pollo",
          name_es:
            "Arroz frito especial + Cerdo agridulce o Pollo con vegetales",
          name_en:
            "Special fried rice + Sweet & sour pork or Chicken & veggies",
          desc_es: "Elegí una proteína.",
          desc_en: "Choose one protein.",
          price: 10.99,
          img: "img/combo.JPEG",
        },
        {
          id: "combo-arroz-costillas-chopsuey",
          name_es: "Arroz frito + Costillas + Chop Suey",
          name_en: "Fried rice + Ribs + Chop suey",
          desc_es: "Combo individual.",
          desc_en: "Single combo.",
          price: 9.99,
          img: "img/arrozfritocostillaschopsuey.JPEG",
        },
        {
          id: "combo-fideos-carnes-lumpia-costilla",
          name_es:
            "Fideos (carne/pollo/cerdo) + Lumpia + Costilla",
          name_en:
            "Noodles (beef/chicken/pork) + Spring roll + Rib",
          desc_es: "Elegí tu proteína.",
          desc_en: "Choose your protein.",
          price: 11.99,
          img: "img/fideoslumpiacostilla.JPEG",
        },
        {
          id: "pan",
          name_es: "Pan",
          name_en: "Bread",
          desc_es: "Pan.",
          desc_en: "Bread.",
          price: 1.0,
          img: "img/combos.png",
        },
      ],
    },
    {
      id: "postre",
      items: [
        {
          id: "tres-leches",
          name_es: "Tres Leches",
          name_en: "Three-Milk Cake",
          desc_es: "Clásico postre casero.",
          desc_en: "Classic milk-soaked cake.",
          price: 7.0,
          img: "img/postres.JPEG",
        },
        {
          id: "quesillo",
          name_es: "Quesillo",
          name_en: "Flan",
          desc_es: "Flan venezolano.",
          desc_en: "Venezuelan flan.",
          price: 5.0,
          img: "img/flan.jpg",
        },
      ],
    },
  ];
  
  // =======================
  // Estado global
  // =======================
  const state = {
    cat: MENU.length ? MENU[0].id : null,
    cart: new Map(),
    filters: {
      q: "",
      pmin: null,
      pmax: null,
      sort: "relevance", // o "price_asc" / "price_desc"
      allCats: false,
    },
    get total() {
      let s = 0;
      for (const { item, qty } of this.cart.values()) {
        s += item.price * qty;
      }
      return s;
    },
    fmt(n) {
      return I18N.money(n);
    },
    get lang() {
      return I18N.get();
    },
    set lang(v) {
      I18N.set(v);
    },
  };
  
  // =======================
  // DOM Refs
  // =======================
  const catsNavEl = document.getElementById("cats-bottom");
  const catsMainEl = document.getElementById("cats");
  const gridEl = document.getElementById("grid");
  const badgeEl = document.getElementById("badge");
  const drawer = document.getElementById("drawer");
  const backdrop = document.getElementById("backdrop");
  const fab = document.getElementById("fab");
  const closeDrawer = document.getElementById("closeDrawer");
  const itemsEl = document.getElementById("items");
  const subtEl = document.getElementById("subt");
  const totEl = document.getElementById("tot");
  const btnES = document.getElementById("btnES");
  const btnEN = document.getElementById("btnEN");
  const stitle = document.querySelector(".section-title");
  const cartTitle = document.getElementById("cartTitle");
  const shipLbl = document.getElementById("ship");
  const lblSubt = document.getElementById("lblSubt");
  const lblDelivery = document.getElementById("lblDelivery");
  const lblTotal = document.getElementById("lblTotal");
  const waBtn = document.getElementById("sendWA");
  const clearBtn = document.getElementById("clear");
  
  // Toolbar
  const qEl = document.getElementById("q");
  const pminEl = document.getElementById("pmin");
  const pmaxEl = document.getElementById("pmax");
  const sortEl = document.getElementById("sort");
  const allEl = document.getElementById("searchAll");
  
  // =======================
  // Utils
  // =======================
  const norm = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  
  function relevanceScore(q, item) {
    if (!q) return 1;
    const name = norm(I18N.name(item));
    const desc = norm(I18N.desc(item));
    const nq = norm(q);
    let score = 0;
    if (name === nq) score += 5;
    if (name.startsWith(nq)) score += 4;
    if (name.includes(nq)) score += 3;
    if (desc.includes(nq)) score += 1;
    return score;
  }
  
  function debounce(fn, ms = 220) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  }
  
  // =======================
  // Persistencia carrito
  // =======================
  const STORAGE_KEY = "ml_cart_v1";
  
  function saveCart() {
    const data = [...state.cart.values()].map((r) => ({
      id: r.item.id,
      qty: r.qty,
    }));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* ignore */
    }
  }
  
  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const arr = JSON.parse(raw) || [];
      arr.forEach(({ id, qty }) => {
        const item = MENU.flatMap((c) => c.items).find((x) => x.id === id);
        if (item)
          state.cart.set(id, { item, qty: Math.max(1, qty | 0) });
      });
    } catch {
      /* ignore */
    }
  }
  
  // =======================
  // Render: categorías
  // =======================
  function renderCats() {
    if (!MENU.length) return;
  
    const lang = I18N.get();
    const labels = CAT_NAMES[lang] || CAT_NAMES.es;
  
    const markup = MENU.map(
      (c) => `
      <button
        class="cat-btn pill-anim btn-anim ripple-wrap ${
          c.id === state.cat ? "active" : ""
        }"
        data-cat="${c.id}"
      >
        ${labels[c.id] || c.id}
      </button>`
    ).join("");
  
    const bindHandlers = (root) => {
      const buttons = root.querySelectorAll("button[data-cat]");
      buttons.forEach((b) => {
        b.addEventListener("click", () => {
          state.cat = b.dataset.cat;
          // al cambiar de categoría apagamos "todas las categorías"
          state.filters.allCats = false;
          if (allEl) allEl.checked = false;
  
          renderCats();
          renderGrid();
  
          if (root === catsNavEl) {
            root.scrollLeft = 0;
          }
        });
      });
    };
  
    if (catsNavEl) {
      catsNavEl.innerHTML = markup;
      bindHandlers(catsNavEl);
    }
    if (catsMainEl) {
      catsMainEl.innerHTML = markup;
      bindHandlers(catsMainEl);
    }
  }
  
  // =======================
  // Render: grid de platos
  // =======================
  function renderGrid() {
    if (!gridEl) return;
  
    const lang = I18N.get();
    const { q, pmin, pmax, sort, allCats } = state.filters;
  
    const baseItems = allCats
      ? MENU.flatMap((c) =>
          (c.items || []).map((it) => ({ ...it, __cat: c.id }))
        )
      : (() => {
          const current = MENU.find((c) => c.id === state.cat);
          return (current?.items || []).map((it) => ({
            ...it,
            __cat: current.id,
          }));
        })();
  
    const nq = q.toString().trim().toLowerCase();
  
    let items = baseItems.filter((it) => {
      if (nq) {
        const match =
          norm(I18N.name(it)).includes(norm(nq)) ||
          norm(I18N.desc(it)).includes(norm(nq));
        if (!match) return false;
      }
      if (pmin != null && it.price < pmin) return false;
      if (pmax != null && it.price > pmax) return false;
      return true;
    });
  
    switch (sort) {
      case "price_asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "name_asc":
        items.sort((a, b) =>
          I18N.name(a).localeCompare(I18N.name(b))
        );
        break;
      case "name_desc":
        items.sort((a, b) =>
          I18N.name(b).localeCompare(I18N.name(a))
        );
        break;
      default:
        items.sort(
          (a, b) => relevanceScore(q, b) - relevanceScore(q, a)
        );
    }
  
    if (!items.length) {
      const catLabel = allCats
        ? lang === "es"
          ? "Todas las categorías"
          : "All categories"
        : (CAT_NAMES[lang] && CAT_NAMES[lang][state.cat]) || "";
      gridEl.innerHTML = `
        <div class="card reveal" style="padding:18px; text-align:center">
          <h3 style="margin:0 0 8px">${catLabel}</h3>
          <p style="color:var(--muted)">
            ${
              lang === "es"
                ? "No hay resultados con los filtros actuales."
                : "No results with current filters."
            }
          </p>
        </div>`;
        if (typeof window.attachReveal === "function") {
          window.attachReveal(gridEl);
        }
        if (typeof window.attachImageZoom === "function") {
          window.attachImageZoom(gridEl);
        }
      return;
    }
  
    gridEl.innerHTML = items
      .map((p) => {
        const labels = CAT_NAMES[lang] || CAT_NAMES.es;
        const catName = labels[p.__cat] || "";
        return `
        <article class="card card-anim reveal">
          <img src="${p.img}" alt="${I18N.name(p)}">
          <div class="info">
            <h3>${I18N.name(p)}</h3>
            <p class="muted">${catName}</p>
            <div class="row">
              <div class="price">${I18N.money(p.price)}</div>
              <button class="add btn-anim btn-glow ripple-wrap" data-id="${
                p.id
              }">
                ${lang === "es" ? "Agregar" : "Add"}
              </button>
            </div>
            <p style="margin-top:8px; color:var(--muted)">${I18N.desc(
              p
            )}</p>
          </div>
        </article>`;
      })
      .join("");
  
    gridEl
      .querySelectorAll("button.add")
      .forEach((b) => {
        b.onclick = () => {
          const it = items.find((x) => x.id === b.dataset.id);
          if (!it) return;
          addToCart(it);
  
          const txt = b.textContent;
          b.disabled = true;
          b.textContent =
            lang === "es" ? "✔ Agregado" : "✔ Added";
          setTimeout(() => {
            b.disabled = false;
            b.textContent = txt;
          }, 900);
        };
      });
  
      if (typeof window.attachReveal === "function") {
        window.attachReveal(gridEl);
      }
      if (typeof window.attachImageZoom === "function") {
        window.attachImageZoom(gridEl);
      }
  }
  
  // =======================
  // Carrito
  // =======================
  function addToCart(item) {
    const had = state.cart.get(item.id);
    state.cart.set(item.id, {
      item,
      qty: (had ? had.qty : 0) + 1,
    });
    pulseBadge();
    updateCartUI();
  }
  
  function changeQty(id, delta) {
    const row = state.cart.get(id);
    if (!row) return;
    row.qty += delta;
    if (row.qty <= 0) {
      state.cart.delete(id);
    } else {
      state.cart.set(id, row);
    }
    updateCartUI();
  }
  
  function clearCart() {
    state.cart.clear();
    updateCartUI();
  }
  
  function pulseBadge() {
    const totalQty = [...state.cart.values()].reduce(
      (s, x) => s + x.qty,
      0
    );
    badgeEl.textContent = totalQty > 99 ? "99+" : totalQty;
    badgeEl.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.2)" },
        { transform: "scale(1)" },
      ],
      { duration: 250 }
    );
  }
  
  function updateCartUI() {
    const totalQty = [...state.cart.values()].reduce(
      (s, x) => s + x.qty,
      0
    );
    badgeEl.textContent = totalQty > 99 ? "99+" : totalQty;
  
    itemsEl.innerHTML = "";
    if (totalQty === 0) {
      itemsEl.innerHTML = `<p style="opacity:.8; padding:10px">${I18N.text(
        "cart_empty"
      )}</p>`;
    } else {
      for (const { item, qty } of state.cart.values()) {
        const el = document.createElement("div");
        el.className = "ci";
        el.innerHTML = `
          <div>
            <h4>${I18N.name(item)}</h4>
            <div style="opacity:.75">${I18N.money(item.price)} · ${
          item.id
        }</div>
          </div>
          <div class="qty">
            <button aria-label="Quitar 1">−</button>
            <strong>${qty}</strong>
            <button aria-label="Agregar 1">+</button>
            <button title="Eliminar" style="margin-left:6px">🗑️</button>
          </div>`;
        const [btnMinus, btnPlus, btnTrash] =
          el.querySelectorAll("button");
        btnMinus.onclick = () => changeQty(item.id, -1);
        btnPlus.onclick = () => changeQty(item.id, +1);
        btnTrash.onclick = () => {
          state.cart.delete(item.id);
          updateCartUI();
        };
        itemsEl.appendChild(el);
      }
    }
    subtEl.textContent = I18N.money(state.total);
    totEl.textContent = I18N.money(state.total);
    saveCart();
  }
  
  // Drawer
  function openDrawer() {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  }
  function closeDrawerFn() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }
  
  fab && (fab.onclick = openDrawer);
  backdrop && (backdrop.onclick = closeDrawerFn);
  closeDrawer && (closeDrawer.onclick = closeDrawerFn);
  clearBtn && (clearBtn.onclick = clearCart);
  
  // =======================
  // WhatsApp
  // =======================
  function buildWAMessage() {
    if (state.cart.size === 0) return I18N.text("hello");
    const lines = [I18N.text("hello"), ""];
    for (const { item, qty } of state.cart.values()) {
      lines.push(
        `• ${I18N.name(item)} x${qty} – ${I18N.money(
          item.price * qty
        )}`
      );
    }
    lines.push("", `${I18N.text("total")}: ${I18N.money(state.total)}`);
    lines.push(
      `${I18N.text("delivery")}: *${I18N.text("ship_to_coord")}*`
    );
    lines.push(
      I18N.get() === "es"
        ? "Nombre y dirección:"
        : "Name and address:"
    );
    return lines.join("\n");
  }
  
  waBtn &&
    waBtn.addEventListener("click", () => {
      const WA_PHONE = "13215664889";
      const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
        buildWAMessage()
      )}`;
      window.open(url, "_blank");
    });
  
  // =======================
  // Textos estáticos / idioma
  // =======================
  function applyStaticTexts() {
    stitle && (stitle.textContent = I18N.text("choose_category"));
    cartTitle && (cartTitle.textContent = I18N.text("your_order"));
    closeDrawer &&
      (closeDrawer.textContent = I18N.text("close"));
    shipLbl && (shipLbl.textContent = I18N.text("ship_to_coord"));
    waBtn && (waBtn.textContent = I18N.text("sendWA"));
    clearBtn && (clearBtn.textContent = I18N.text("clear"));
    lblSubt && (lblSubt.textContent = I18N.text("subtotal"));
    lblDelivery &&
      (lblDelivery.textContent = I18N.text("delivery"));
    lblTotal && (lblTotal.textContent = I18N.text("total"));
  }
  
  function setLangUI(lang) {
    btnES &&
      btnES.classList.toggle("active", lang === "es");
    btnEN &&
      btnEN.classList.toggle("active", lang === "en");
  }
  
  btnES &&
    btnES.addEventListener("click", () => {
      state.lang = "es";
      applyStaticTexts();
      setLangUI("es");
      renderCats();
      renderGrid();
    });
  
  btnEN &&
    btnEN.addEventListener("click", () => {
      state.lang = "en";
      applyStaticTexts();
      setLangUI("en");
      renderCats();
      renderGrid();
    });
  
  // =======================
  // Toolbar listeners
  // =======================
  qEl &&
    qEl.addEventListener(
      "input",
      debounce(() => {
        state.filters.q = qEl.value.trim();
        renderGrid();
      })
    );
  
  pminEl &&
    pminEl.addEventListener(
      "input",
      debounce(() => {
        const v =
          pminEl.value === "" ? null : Number(pminEl.value);
        state.filters.pmin =
          v != null && !Number.isNaN(v) ? v : null;
        renderGrid();
      })
    );
  
  pmaxEl &&
    pmaxEl.addEventListener(
      "input",
      debounce(() => {
        const v =
          pmaxEl.value === "" ? null : Number(pmaxEl.value);
        state.filters.pmax =
          v != null && !Number.isNaN(v) ? v : null;
        renderGrid();
      })
    );
  
  sortEl &&
    sortEl.addEventListener("change", () => {
      state.filters.sort = sortEl.value;
      renderGrid();
    });
  
  allEl &&
    allEl.addEventListener("change", () => {
      state.filters.allCats = !!allEl.checked;
      renderGrid();
    });
  
  // =======================
  // Scroll reveal
  // =======================
  (function () {
    const opts = {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, opts);
  
    window.attachReveal = function attachReveal(root = document) {
      root
        .querySelectorAll(".reveal:not(.is-in)")
        .forEach((el) => io.observe(el));
    };
  
    attachReveal(document);
  })();
  
  // =======================
  // Ripple effect
  // =======================
  (function () {
    const makeRipple = (ev) => {
      const btn = ev.currentTarget;
      const rect = btn.getBoundingClientRect();
      const r = document.createElement("span");
      r.className = "ripple";
      const size = Math.max(rect.width, rect.height);
      r.style.width = r.style.height = size + "px";
      r.style.left =
        ev.clientX - rect.left - size / 2 + "px";
      r.style.top =
        ev.clientY - rect.top - size / 2 + "px";
      btn.appendChild(r);
      r.addEventListener("animationend", () => r.remove());
    };
    document
      .querySelectorAll(".ripple-wrap")
      .forEach((b) => {
        b.addEventListener("click", makeRipple);
      });
  })();
  
  // Touch-friendly hover en mobile
  document.addEventListener(
    "touchstart",
    () => {},
    { passive: true }
  );
  
  // =======================
  // Navbar sticky
  // =======================
  (function () {
    const nav = document.querySelector("nav.top");
    if (!nav) return;
    const navTop = nav.offsetTop;
  
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY >= navTop) {
          nav.classList.add("is-fixed");
          document.body.classList.add("has-fixed-nav");
        } else {
          nav.classList.remove("is-fixed");
          document.body.classList.remove("has-fixed-nav");
        }
      },
      { passive: true }
    );
  })();
  // =======================
// Zoom de imágenes (FLIP)
// =======================
(function () {
  // CSS inyectado (para no tocar tu CSS externo)
  const css = `
    .img-zoom-overlay{
      position:fixed; inset:0;
      background: rgba(0,0,0,.62);
      backdrop-filter: blur(4px);
      display:flex; align-items:center; justify-content:center;
      z-index: 9999;
      opacity:0;
    }
    .img-zoom-overlay.is-in{ opacity:1; }
    .img-zoom-stage{ position:relative; width: min(92vw, 980px); height: min(86vh, 720px); }
    .img-zoom-stage img{
      width:100%; height:100%;
      object-fit: contain;
      border-radius: 16px;
      box-shadow: 0 25px 80px rgba(0,0,0,.45);
      background: rgba(255,255,255,.04);
    }
    .img-zoom-close{
      position:fixed; top:16px; right:16px;
      z-index: 10000;
      border:0;
      border-radius: 999px;
      padding:10px 12px;
      cursor:pointer;
      background: rgba(0,0,0,.45);
      color: #fff;
      font-size: 18px;
      line-height: 1;
      backdrop-filter: blur(6px);
    }
    .img-zoom-thumb{ cursor: zoom-in; }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function openImageFromThumb(thumbImg) {
    if (!thumbImg || !thumbImg.src) return;

    // Rect original (thumb)
    const r0 = thumbImg.getBoundingClientRect();

    // Overlay + contenedor final
    const overlay = document.createElement("div");
    overlay.className = "img-zoom-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    const closeBtn = document.createElement("button");
    closeBtn.className = "img-zoom-close";
    closeBtn.type = "button";
    closeBtn.textContent = "✕";

    const stage = document.createElement("div");
    stage.className = "img-zoom-stage";

    const bigImg = document.createElement("img");
    bigImg.src = thumbImg.src;
    bigImg.alt = thumbImg.alt || "Imagen del plato";
    bigImg.decoding = "async";

    stage.appendChild(bigImg);
    overlay.appendChild(stage);
    document.body.appendChild(overlay);
    document.body.appendChild(closeBtn);

    // Cerrar helpers
    const cleanup = () => {
      overlay.remove();
      closeBtn.remove();
      document.removeEventListener("keydown", onKey);
    };

    const closeWithAnim = () => {
      if (prefersReduced) return cleanup();

      // animación inversa: desde big -> thumb
      const bigRect = bigImg.getBoundingClientRect();
      const ghost = bigImg.cloneNode(true);
      ghost.style.position = "fixed";
      ghost.style.left = bigRect.left + "px";
      ghost.style.top = bigRect.top + "px";
      ghost.style.width = bigRect.width + "px";
      ghost.style.height = bigRect.height + "px";
      ghost.style.objectFit = "contain";
      ghost.style.borderRadius = "16px";
      ghost.style.zIndex = "10001";
      document.body.appendChild(ghost);

      overlay.classList.remove("is-in");
      closeBtn.style.opacity = "0";

      const dx = r0.left - bigRect.left;
      const dy = r0.top - bigRect.top;
      const sx = r0.width / bigRect.width;
      const sy = r0.height / bigRect.height;

      ghost.animate(
        [
          { transform: "translate(0,0) scale(1,1)" },
          { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` },
        ],
        { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
      ).onfinish = () => {
        ghost.remove();
        cleanup();
      };
    };

    const onKey = (e) => {
      if (e.key === "Escape") closeWithAnim();
    };

    overlay.addEventListener("click", (e) => {
      // click fuera de la imagen cierra
      if (e.target === overlay) closeWithAnim();
    });
    closeBtn.addEventListener("click", closeWithAnim);
    document.addEventListener("keydown", onKey);

    // Fade in overlay
    requestAnimationFrame(() => overlay.classList.add("is-in"));

    // Animación FLIP (thumb -> fullscreen)
    if (prefersReduced) return;

    // Creamos "ghost" desde el thumb
    const ghost = thumbImg.cloneNode(true);
    ghost.style.position = "fixed";
    ghost.style.left = r0.left + "px";
    ghost.style.top = r0.top + "px";
    ghost.style.width = r0.width + "px";
    ghost.style.height = r0.height + "px";
    ghost.style.objectFit = getComputedStyle(thumbImg).objectFit || "cover";
    ghost.style.borderRadius = getComputedStyle(thumbImg).borderRadius || "12px";
    ghost.style.zIndex = "10001";
    ghost.style.cursor = "zoom-out";
    document.body.appendChild(ghost);

    // ocultamos el big durante el viaje para que no "duplique"
    bigImg.style.visibility = "hidden";

    // Esperamos layout final y animamos hasta bigRect
    requestAnimationFrame(() => {
      const r1 = bigImg.getBoundingClientRect();

      const dx = r1.left - r0.left;
      const dy = r1.top - r0.top;
      const sx = r1.width / r0.width;
      const sy = r1.height / r0.height;

      ghost.animate(
        [
          { transform: "translate(0,0) scale(1,1)" },
          { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` },
        ],
        { duration: 320, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
      ).onfinish = () => {
        ghost.remove();
        bigImg.style.visibility = "visible";
      };
    });
  }

  // Exponemos un helper global para llamarlo desde renderGrid()
  window.attachImageZoom = function attachImageZoom(root = document) {
    root.querySelectorAll("article.card img").forEach((img) => {
      // Evitar duplicar listeners
      if (img.dataset.zoomBound) return;
      img.dataset.zoomBound = "1";
      img.classList.add("img-zoom-thumb");
      img.addEventListener("click", () => openImageFromThumb(img));
    });
  };
})();

  // =======================
  // Init
  // =======================
  loadCart();
  applyStaticTexts();
  setLangUI(state.lang);
  renderCats();
  renderGrid();
  updateCartUI();
  