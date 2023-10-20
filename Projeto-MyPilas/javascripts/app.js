var alternador = document.querySelector(".js-toggle");

alternador.onclick = function() {
    var menu = document.querySelector(".js-menu");
    menu.classList.toggle("menu--show-menu");
}