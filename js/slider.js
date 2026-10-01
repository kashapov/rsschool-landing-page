function initSlider() {
  const slider = document.querySelector("[data-slider]");

  if (!slider) {
    return;
  }

  const section = slider.closest("section") || document;
  const track = slider.querySelector(".slider__track");
  const slides = Array.from(slider.querySelectorAll(".slider__slide"));
  const dots = Array.from(slider.querySelectorAll(".slider__dot"));
  const prevBtn = section.querySelector("[data-slider-prev]");
  const nextBtn = section.querySelector("[data-slider-next]");

  if (!track || slides.length < 3) {
    return;
  }

  let index = 0;
  let isAnimating = false;

  function goTo(nextIndex, animate) {
    const total = slides.length;
    index = ((nextIndex % total) + total) % total;

    if (animate === false) {
      track.style.transition = "none";
    } else {
      track.style.transition = "";
      isAnimating = true;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
    updateDots();

    if (animate === false) {
      // Force reflow so the next animated move still transitions.
      void track.offsetWidth;
      track.style.transition = "";
    }
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle("is-active", active);
      if (active) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  }

  function onTransitionEnd(event) {
    if (event.target !== track || event.propertyName !== "transform") {
      return;
    }
    isAnimating = false;
  }

  track.addEventListener("transitionend", onTransitionEnd);

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (isAnimating) {
        return;
      }
      goTo(index - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (isAnimating) {
        return;
      }
      goTo(index + 1);
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      if (isAnimating || i === index) {
        return;
      }
      goTo(i);
    });
  });

  function handleResize() {
    goTo(index, false);
  }

  window.addEventListener("resize", handleResize);

  goTo(0, false);
}

initSlider();
