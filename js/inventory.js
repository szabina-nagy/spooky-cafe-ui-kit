// Menu board: the chips filter the menu list. A row shows when its data-category matches the data-filter of a pressed chip.
// All (data-chip-all), or no chip pressed, shows every row
const filters = document.querySelector(".chips-field");
const items = document.querySelectorAll(".drink-list [data-category]");

function filterMenu() {
    const pressed = [...filters.querySelectorAll('.chip[aria-pressed="true"]')];
    const showAll = pressed.length === 0 || pressed.some((chip) => chip.hasAttribute("data-chip-all"));
    const categories = pressed.map((chip) => chip.dataset.filter);

    items.forEach((item) => {
        item.hidden = !showAll && !categories.includes(item.dataset.category);
    });
}

// Listens on the group, not the chips, so chips.js has already updated aria-pressed when this runs
filters.addEventListener("click", filterMenu);
filterMenu();
