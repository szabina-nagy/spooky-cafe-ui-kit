document.querySelectorAll(".chip[aria-pressed]").forEach((chip) => {
    chip.addEventListener("click", () => {
        const pressed = chip.getAttribute("aria-pressed") === "true";
        chip.setAttribute("aria-pressed", String(!pressed));

        // A group with an All chip (data-chip-all) never has All and the others pressed together
        const group = chip.closest(".chips-field");
        const all = group && group.querySelector("[data-chip-all]");

        if (!all) {
            return;
        }

        const others = group.querySelectorAll(".chip[aria-pressed]:not([data-chip-all])");

        if (chip === all) {
            // All stays pressed and releases the others
            all.setAttribute("aria-pressed", "true");
            others.forEach((other) => other.setAttribute("aria-pressed", "false"));
        } else {
            // Any other chip releases All, and All comes back when the last one is released
            const anyPressed = [...others].some((other) => other.getAttribute("aria-pressed") === "true");
            all.setAttribute("aria-pressed", String(!anyPressed));
        }
    });
});

document.querySelectorAll(".chip-remove").forEach((button) => {
    button.addEventListener("click", () => {
        button.closest(".chip").remove();
    });
});