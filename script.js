const header_burger = document.querySelector(".header_burger");
const menu_block = document.querySelector(".menu_block");
const container_background = document.querySelector(".container_background");
if (header_burger){
    const headerMenu = document.querySelector(".header_menu");
    header_burger.addEventListener("click",function (e){
        header_burger.classList.toggle('_active')
        menu_block.classList.toggle('_active')
        container_background.classList.toggle('_active')
    });
};