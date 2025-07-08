const FontawesomeBar = document.querySelector(".FontawesomeBar");
const menu_bar = document.querySelector(" .nav-bar-mini .menu-bar");

FontawesomeBar.addEventListener("click", () => {
    menu_bar.classList.toggle("show");
});