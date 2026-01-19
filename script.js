const topel = document.querySelector('.top');
const btns = document.querySelectorAll('.btn')
const logo = document.querySelector('.logo')
const none = document.querySelector('.none')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 1){
        topel.classList.add('scrolled')
        logo.classList.add('scrolled')
        none.classList.add('scrolled')
        btns.forEach(btn => {
            btn.classList.add('scrolled')
        })
        
    }else{
        topel.classList.remove('scrolled')
        logo.classList.remove('scrolled')
        none.classList.remove('scrolled')
        btns.forEach(btn => {
            btn.classList.remove('scrolled')
        })
    }
})

const missionbtn = document.querySelector('.mission')
const mission = document.querySelector('.mission-content')
const closebtn = document.querySelector('.close')

missionbtn.addEventListener('click',()=>{
    mission.style.display = "block"
})
closebtn.addEventListener('click',()=>{
    mission.style.display = "none"
})

