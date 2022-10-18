const menuMobile = document.getElementById("menuMobile");
function toggleMenu(){
    const menu = document.getElementById("menu");
    menu.classList.toggle("active")
}
menuMobile.addEventListener("click", toggleMenu)