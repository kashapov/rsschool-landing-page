const CATALOG_MOBILE_LIMIT = 4;
const CATALOG_MQ = window.matchMedia("(max-width: 768px)");

function initCatalog() {
  const grid = document.querySelector("[data-catalog-grid]");
  const moreWrap = document.querySelector(".catalog-more");
  const moreBtn = document.querySelector("[data-catalog-more]");
  const tabs = Array.from(document.querySelectorAll(".catalog-tabs__btn"));

  if (!grid || typeof products === "undefined") {
    return;
  }

  let activeCategory = tabs.find((tab) => tab.classList.contains("is-active"))
    ?.dataset.category || "care-modules";
  let expanded = false;

  function isMobile() {
    return CATALOG_MQ.matches;
  }

  function getByCategory(category) {
    return products.filter((product) => product.category === category);
  }

  function formatMeta(product) {
    return `From $${product.price} / ${product.unit} · month`;
  }

  function createCard(product) {
    const article = document.createElement("article");
    article.className = "catalog-card";
    article.dataset.category = product.category;
    article.dataset.productId = product.id;
    article.tabIndex = 0;

    const image = document.createElement("img");
    image.className = "catalog-card__image";
    image.src = product.image;
    image.alt = `${product.name} preview`;
    image.width = 640;
    image.height = 400;

    const body = document.createElement("div");
    body.className = "catalog-card__body";

    const title = document.createElement("h3");
    title.className = "catalog-card__title";
    title.textContent = product.name;

    const text = document.createElement("p");
    text.className = "catalog-card__text";
    text.textContent = product.description;

    const meta = document.createElement("p");
    meta.className = "catalog-card__meta";
    meta.textContent = formatMeta(product);

    body.append(title, text, meta);
    article.append(image, body);

    return article;
  }

  function updateMoreVisibility(total) {
    const showMore = isMobile() && total > CATALOG_MOBILE_LIMIT && !expanded;

    if (moreWrap) {
      moreWrap.classList.toggle("is-visible", showMore);
      moreWrap.hidden = !showMore;
    }
  }

  function render() {
    const items = getByCategory(activeCategory);
    const limit =
      isMobile() && !expanded ? CATALOG_MOBILE_LIMIT : items.length;
    const visible = items.slice(0, limit);

    grid.replaceChildren(...visible.map(createCard));
    updateMoreVisibility(items.length);
  }

  function setActiveTab(category) {
    activeCategory = category;
    expanded = false;

    tabs.forEach((tab) => {
      const isActive = tab.dataset.category === category;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    render();
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;
      if (!category || category === activeCategory) {
        return;
      }
      setActiveTab(category);
    });
  });

  if (moreBtn) {
    moreBtn.addEventListener("click", () => {
      expanded = true;
      render();
    });
  }

  function handleViewportChange() {
    if (!isMobile()) {
      expanded = false;
    }
    render();
  }

  if (typeof CATALOG_MQ.addEventListener === "function") {
    CATALOG_MQ.addEventListener("change", handleViewportChange);
  } else if (typeof CATALOG_MQ.addListener === "function") {
    CATALOG_MQ.addListener(handleViewportChange);
  }

  window.addEventListener("resize", handleViewportChange);

  render();
}

initCatalog();
