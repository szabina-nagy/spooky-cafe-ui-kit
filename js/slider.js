document.querySelectorAll(".slider").forEach((slider) => {
    const number = slider.closest(".field").querySelector(".slider-value");

    function update() {
        slider.style.setProperty("--value", slider.value);
        number.textContent = `${slider.value}%`;
        slider.setAttribute("aria-valuetext", `${slider.value}%`);
    }

    slider.addEventListener("input", update);
    update();
});