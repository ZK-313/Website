let lastScrollTop = 0;
const header = document.getElementById("headerstuff");
const content = document.getElementById("content");

 // Get the navbar height
const headerHeight = header.offsetHeight;

 // Apply the height dynamically as padding to the body or content
content.style.paddingTop = headerHeight + "px";

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