// add class navbarDark on navbar scroll
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
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
    l.addEventListener("click", () => {
        new bootstrap.Collapse(menuToggle).toggle();
    });
});

// Handle the beforeunload event
// window.addEventListener("beforeunload", function (e) {
//     e.preventDefault();
//     e.returnValue = "";
//     return "Are you sure you want to leave this page?";
// });

// // Toggle button functionality
// const toggleButton = document.getElementById("toggleButton");
// const collapseContent = document.getElementById("collapseContent");

// collapseContent.addEventListener("shown.bs.collapse", function () {
//     toggleButton.textContent = "Show Less";
// });

// collapseContent.addEventListener("hidden.bs.collapse", function () {
//     toggleButton.textContent = "Show More";
// });

// toggleButton.addEventListener("click", function () {
//     if (collapseContent.classList.contains("show")) {
//         toggleButton.textContent = "Show More";
//     } else {
//         toggleButton.textContent = "Show Less";
//     }
// });
