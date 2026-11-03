document.querySelectorAll(".chip[aria-pressed]").forEach((chip) => {
    chip.addEventListener("click", () => {
        const pressed = chip.getAttribute("aria-pressed") === "true";
        chip.setAttribute("aria-pressed", String(!pressed));
    });
});

document.querySelectorAll(".chip-remove").forEach((button) => {
    button.addEventListener("click", () => {
        button.closest(".chip").remove();
    });
});