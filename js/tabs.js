document.querySelectorAll(".tabs").forEach((tabList) => {
    const tabs = [...tabList.querySelectorAll('[role="tab"]')];

    function select(chosen) {
        tabs.forEach((tab) => {
            tab.setAttribute("aria-selected", "false");
            tab.setAttribute("tabindex", "-1");
        });
        chosen.setAttribute("aria-selected", "true");
        chosen.setAttribute("tabindex", "0");
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => select(tab));
    });

    tabList.addEventListener("keydown", (event) => {
        const enabled = tabs.filter((tab) => !tab.disabled);
        const index = enabled.indexOf(event.target);
        let next;

        if (event.key === "ArrowRight") {
            next = (index + 1) % enabled.length;
        } else if (event.key === "ArrowLeft") {
            next = (index - 1 + enabled.length) % enabled.length;
        } else if (event.key === "Home") {
            next = 0;
        } else if (event.key === "End") {
            next = enabled.length - 1;
        } else {
            return;
        }

        event.preventDefault();
        select(enabled[next]);
        enabled[next].focus();
    });
});