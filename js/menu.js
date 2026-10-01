const MENU_MQ = window.matchMedia("(width <= 768px)");

function initMenu() {
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-mobile-menu]");

  if (!burger || !menu) {
    return;
  }

  function isOpen() {
    return menu.classList.contains("is-open");
  }

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("is-menu-open", open);

    if (!open) {
      menu.setAttribute("hidden", "");
    } else {
      menu.removeAttribute("hidden");
    }
  }

  function closeMenu() {
    setOpen(false);
  }

  function toggleMenu() {
    setOpen(!isOpen());
  }

  burger.addEventListener("click", toggleMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      closeMenu();
    }
  });

  function handleViewportChange() {
    if (!MENU_MQ.matches && isOpen()) {
      closeMenu();
    }
  }

  if (typeof MENU_MQ.addEventListener === "function") {
    MENU_MQ.addEventListener("change", handleViewportChange);
  } else if (typeof MENU_MQ.addListener === "function") {
    MENU_MQ.addListener(handleViewportChange);
  }

  window.addEventListener("resize", handleViewportChange);
}

initMenu();
