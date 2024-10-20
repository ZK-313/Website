let lastScrollTop = 0;
const header = document.getElementById("headerstuff");
const content = document.getElementById("content");

 // Get the navbar height
let headerHeight = header.offsetHeight;
 // Apply the height dynamically as padding to the body or content
content.style.paddingTop = (headerHeight-100) + "px";

window.addEventListener("resize", function() {
    // Get the navbar height
    let headerHeight = header.offsetHeight;
    // Apply the height dynamically as padding to the body or content
    content.style.paddingTop = (headerHeight-100) + "px";
});

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


function proj1(){
    const description = document.getElementById("project_info");
    document.getElementById("project_name").innerHTML = "Blackjack";
    description.innerHTML = "A simple blackjack game made in Python utilizing the tkinter library for GUI, and Pillow (PIL) to handle images. The game has a special ruleset which can be found in the 'rules' window which outlines how bets will be returned.";
    //description.innerHTML = description.innerHTML + "<iframe src=\"https://replit.com/@ZulfiqarK/Blackjack-tkinta5?lite=1&outputonly=1\" width=\"600\" height=\"400\"></iframe>";
}