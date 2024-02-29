
window.addEventListener("load", ()=>{

    const toggle_close = document.getElementById("close_toggle")
    const toggle_open = document.getElementById("open_toggle");
    
    const navItems = document.querySelector("header div:nth-of-type(2)")
    
    const open_drawer =  () =>{
        navItems.classList.contains('menu_open') ? navItems.classList.add('animation') : navItems.classList.remove('animation')
        navItems.classList.toggle('menu_open')
        navItems.classList.toggle('menu_close')
    }
    
    toggle_open.addEventListener("click", open_drawer)

    const navigation_links =  document.querySelectorAll("header div:nth-of-type(2) a")
    navigation_links.forEach((a)=>{
         a.addEventListener("click", ()=>{
            console.log(a.getAttribute('id'))
            const section = document.querySelector(`.${a.getAttribute('id')}`)
            section.scrollIntoView({behavior:"smooth",block:"center"})
            navItems.classList.toggle('menu_open')
            navItems.classList.toggle('menu_close')
         })
    })


    document.addEventListener('click', function(event) {
        var isClickInsideMenu = navItems.contains(event.target);
        var isClickInsideButton = toggle_open.contains(event.target);
    
        if (!isClickInsideMenu && !isClickInsideButton &&  navItems.classList.contains('menu_open')) {
             navItems.classList.toggle('menu_open')
             navItems.classList.toggle('menu_close')
        }
      });
    




   
})