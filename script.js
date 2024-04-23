// Eventlistener for navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/* document.getElementById("logo").addEventListener("click", function() {
    console.log("Logoelementet klickades på!");

    var header = document.querySelector("header");

    var sidebar = document.querySelector(".sidebar");
    console.log("Vi kollar på sidebar nu", sidebar);

    header.style.backgroundColor = "grey";
    header.style.color = "white";

    sidebar.style.backgroundColor = "black";
    sidebar.style.backgroundImage = "";
    sidebar.style.color = "white";
});
 */

document.getElementById("logo").addEventListener("click", function() {
    var navbar = document.querySelector(".navbar");
    var sidebar = document.querySelector(".sidebar");

    if (navbar.classList.contains("dark")) {
        navbar.classList.remove("dark");
        sidebar.classList.remove("dark");
    } else {
        navbar.classList.add("dark");
        sidebar.classList.add("dark");
    };
});

