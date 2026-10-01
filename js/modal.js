function initModal() {
  const modal = document.querySelector("[data-modal]");
  const grid = document.querySelector("[data-catalog-grid]");

  if (!modal || !grid || typeof products === "undefined") {
    return;
  }

  const dialog = modal.querySelector(".modal__dialog");
  const imageEl = modal.querySelector("[data-modal-image]");
  const titleEl = modal.querySelector("[data-modal-title]");
  const descriptionEl = modal.querySelector("[data-modal-description]");
  const plansEl = modal.querySelector("[data-modal-plans]");
  const billingEl = modal.querySelector("[data-modal-billing]");
  const priceEl = modal.querySelector("[data-modal-price]");
  const closeControls = modal.querySelectorAll("[data-modal-close]");

  let activeProduct = null;
  let selectedPlan = "starter";
  let selectedBilling = "monthly";

  function isOpen() {
    return modal.classList.contains("is-open");
  }

  function calcPrice(product, planKey, billingKey) {
    const planAdd = product.plans[planKey]?.addPrice ?? 0;
    const billingAdd = product.billing[billingKey]?.addPrice ?? 0;
    return product.price + planAdd + billingAdd;
  }

  function formatPrice(product, planKey, billingKey) {
    const amount = calcPrice(product, planKey, billingKey);
    const period = billingKey === "yearly" ? "month · billed yearly" : "month";
    return `$${amount} / ${product.unit} · ${period}`;
  }

  function updatePrice() {
    if (!activeProduct || !priceEl) {
      return;
    }
    priceEl.textContent = formatPrice(activeProduct, selectedPlan, selectedBilling);
  }

  function renderOptions(container, options, groupName, selectedKey) {
    container.replaceChildren();

    Object.entries(options).forEach(([key, option]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "modal__option";
      button.dataset.group = groupName;
      button.dataset.value = key;
      button.setAttribute("aria-pressed", String(key === selectedKey));
      button.classList.toggle("is-active", key === selectedKey);
      button.textContent = option.label;
      container.append(button);
    });
  }

  function fillModal(product) {
    activeProduct = product;
    selectedPlan = "starter";
    selectedBilling = "monthly";

    if (imageEl) {
      imageEl.src = product.image;
      imageEl.alt = `${product.name} preview`;
    }

    if (titleEl) {
      titleEl.textContent = product.name;
    }

    if (descriptionEl) {
      descriptionEl.textContent = product.description;
    }

    renderOptions(plansEl, product.plans, "plan", selectedPlan);
    renderOptions(billingEl, product.billing, "billing", selectedBilling);
    updatePrice();
  }

  function openModal(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product) {
      return;
    }

    fillModal(product);
    modal.classList.add("is-open");
    modal.removeAttribute("hidden");
    document.body.classList.add("is-modal-open");

    const closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  function closeModal() {
    if (!isOpen()) {
      return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("hidden", "");
    document.body.classList.remove("is-modal-open");
    activeProduct = null;
  }

  function handleOptionClick(event) {
    const button = event.target.closest(".modal__option");
    if (!button || !activeProduct) {
      return;
    }

    const { group, value } = button.dataset;
    if (!group || !value) {
      return;
    }

    if (group === "plan") {
      selectedPlan = value;
      renderOptions(plansEl, activeProduct.plans, "plan", selectedPlan);
    } else if (group === "billing") {
      selectedBilling = value;
      renderOptions(billingEl, activeProduct.billing, "billing", selectedBilling);
    }

    updatePrice();
  }

  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".catalog-card");
    if (!card) {
      return;
    }
    openModal(card.dataset.productId);
  });

  grid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const card = event.target.closest(".catalog-card");
    if (!card || event.target !== card) {
      return;
    }
    event.preventDefault();
    openModal(card.dataset.productId);
  });

  closeControls.forEach((control) => {
    control.addEventListener("click", closeModal);
  });

  dialog?.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  plansEl?.addEventListener("click", handleOptionClick);
  billingEl?.addEventListener("click", handleOptionClick);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      closeModal();
    }
  });
}

initModal();
