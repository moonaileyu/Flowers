const buttons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".tab-panel");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        buttons.forEach(function (item) {
            item.classList.remove("active");
        });

        panels.forEach(function (panel) {
            panel.classList.remove("active");
        });

        button.classList.add("active");
        document.getElementById(button.getAttribute("data-tab")).classList.add("active");
    });
});