// Opens a <dialog class="modal"> from any button with data-modal-open set to the dialog's id.
// showModal() does the hard parts: it keeps focus inside, closes on Escape and hands focus back to the button that opened it
document.querySelectorAll("[data-modal-open]").forEach((button) => {
    const modal = document.getElementById(button.dataset.modalOpen);

    button.addEventListener("click", () => {
        // Escape leaves the last answer in place, so clear it first
        modal.returnValue = "";
        modal.showModal();
    });
});

document.querySelectorAll("dialog.modal").forEach((modal) => {
    // Every button closes the modal. Its value becomes modal.returnValue, so a screen can tell Reset from Cancel
    modal.querySelectorAll(".modal-close, .modal-buttons .button").forEach((button) => {
        button.addEventListener("click", () => modal.close(button.value));
    });

    // A click on the scrim lands on the dialog itself, so check it was outside the box
    modal.addEventListener("click", (event) => {
        if (event.target !== modal) {
            return;
        }

        const box = modal.getBoundingClientRect();
        const outside = event.clientX < box.left || event.clientX > box.right
            || event.clientY < box.top || event.clientY > box.bottom;

        if (outside) {
            modal.close();
        }
    });
});
