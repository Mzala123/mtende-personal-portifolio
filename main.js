const toggle_close = document.getElementById("close_toggle")
const toggle_open = document.getElementById("open_toggle");

const navItems = document.querySelector("header div:nth-of-type(2)")

const open_drawer =  () =>{
    navItems.classList.contains('menu_open') ? navItems.classList.add('animation') : navItems.classList.remove('animation')
    navItems.classList.toggle('menu_open')
    navItems.classList.toggle('menu_close')
}

toggle_open.addEventListener("click", open_drawer)


/* <main>              
              <div class="intro">
                  <div>
                    <h2>Hie <span>I'm Mtende J Mwanza</span></h2>
                    <h3>Full-Stack Web developer</h3>
                    <p>Perceptive and result driven Full-Stack Developer, proficient at designing innovative
                       IT solutions and enhancing existing systems with new features. <br>
                    </p>
                    <p>
                        As a Full-Stack Developer, I am capable of building robust, user friendly and quality 
                        software within schedule. I have vast experience and knowledge in developing data 
                        driven web applications and desktop applications.
                    </p>
                  </div>
                  <div>
                    <picture>
                        <img src="src/mtende.jpeg" alt="">
                    </picture>
                     
                  </div>
              </div>
          </main> */