const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add("navbarDark");
    } else {
        header.classList.remove("navbarDark");
    }
};

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
    l.addEventListener("click", () => {
        new bootstrap.Collapse(menuToggle).toggle();
    });
});

// window.addEventListener("beforeunload", function (e) {
//     e.preventDefault();
//     e.returnValue = "";
//     return "Are you sure you want to leave this page?";
// });

const toggleButton = document.getElementById("toggleButton");
let isExpanded = false;

toggleButton.addEventListener("click", function () {
    if (isExpanded) {
        toggleButton.textContent = "Show More";
    } else {
        toggleButton.textContent = "Show Less";
    }
    isExpanded = !isExpanded;
});
