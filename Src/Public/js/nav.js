const line = document.querySelector(".line");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

line.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    line.classList.toggle("toggle");
});