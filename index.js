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

function sendEmail(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const msg = document.getElementById("message").value;
    Email.send({
        SecureToken : "3b653b21-85b1-442b-badf-a20de4a34be7",
        To : 'zulfiqar991@gmail.com',
        From : "contact@zulfiqark.com",
        Subject : name +", "+email+", "+subject,
        Body : msg
    }).then(
        message => alert("Email has been sent!"),
    );
    }

function proj1(){
    const description = document.getElementById("project_info");
    document.getElementById("project_name").innerHTML = "Blackjack";
    description.innerHTML = "A simple blackjack game made in Python utilizing the tkinter library for GUI, and Pillow (PIL) to handle images. The game has a special ruleset which can be found in the 'rules' window which outlines how bets will be returned.";
    document.getElementById("git-link").setAttribute("href","https://github.com/ZK-313/blackjack");
    //description.innerHTML = description.innerHTML + "<iframe src=\"https://replit.com/@ZulfiqarK/Blackjack-tkinta5?lite=1&outputonly=1\" width=\"600\" height=\"400\"></iframe>";
}
function proj2(){
    const description = document.getElementById("project_info");
    document.getElementById("project_name").innerHTML = "Todo-List CLI / App";
    description.innerHTML = "A simple Java command line interface to simulate a todo list. Allows users to add and remove tasks, along with mark them as done and incomplete. All commands can be found by typing 'todo -h' in the terminal. There is also a frontend app for Windows users who choose to use it, made using HTML, css, and javascript, all powered by ElectronJS.";
    document.getElementById("git-link").setAttribute("href","https://github.com/ZK-313/Todo-list-CLI");
    //description.innerHTML = description.innerHTML + "<iframe src=\"https://replit.com/@ZulfiqarK/Blackjack-tkinta5?lite=1&outputonly=1\" width=\"600\" height=\"400\"></iframe>";
}