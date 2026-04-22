function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Optional: highlight navbar on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#020617cc";
    } else {
        navbar.style.background = "#020617";
    }
});