let lastScrollTop = 0;
const header = document.getElementById("headerstuff");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        // Scrolling down, hide the navbar
        header.style.transform = "translateY(-100%)";
    } else {
        // Scrolling up, show the navbar
        header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});