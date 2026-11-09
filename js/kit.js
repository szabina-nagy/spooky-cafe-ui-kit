// Behaviour for the kit page only. The game screens do not load this file

// Tabs demo: the menu hides behind a teaser until a tab is chosen, by click or arrow keys
const tabsDemo = document.querySelector("#tabs");

if (tabsDemo) {
    const tabList = tabsDemo.querySelector('[role="tablist"]');
    const reveal = () => tabsDemo.classList.remove("is-teasing");

    tabList.addEventListener("click", reveal);
    tabList.addEventListener("keydown", (event) => {
        if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
            reveal();
        }
    });
}
