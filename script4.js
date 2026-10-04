// ===== Welcome Message =====
console.log("Welcome to my portfolio website!");

// ===== Smooth Scrolling =====
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// ===== Contact Button =====
const contactButton = document.querySelector(".btn");
contactButton.addEventListener("click", function() {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({
        behavior: "smooth"
    });
});