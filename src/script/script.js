const header = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");
const toggleButton = document.getElementById("toggleButton");

window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add("navbarDark");
    } else {
        header.classList.remove("navbarDark");
    }
};

navLinks.forEach((l) => {
    l.addEventListener("click", () => {
        new bootstrap.Collapse(menuToggle).toggle();
    });
});

let isExpanded = false;
toggleButton.addEventListener("click", function () {
    if (isExpanded) {
        toggleButton.textContent = "Show More";
    } else {
        toggleButton.textContent = "Show Less";
    }
    isExpanded = !isExpanded;
});
