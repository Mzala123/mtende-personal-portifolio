const toggle_close = document.getElementById("close_toggle")
const toggle_open = document.getElementById("open_toggle");

const navItems = document.querySelector("header div:nth-of-type(2)")

const open_drawer =  () =>{

    navItems.classList.contains('menu_open') ? navItems.classList.add('animation') : navItems.classList.remove('animation')
    navItems.classList.toggle('menu_open')
    navItems.classList.toggle('menu_close')


}

toggle_open.addEventListener("click", open_drawer)
// toggle_close.addEventListener("click", close_drawer);