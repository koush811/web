const topel = document.querySelector('.top');
const none = document.querySelector('.none')
const borders = document.querySelectorAll('.border')

window.addEventListener('scroll', updateheader)
window.addEventListener('load', updateheader)

function updateheader() {
    if (window.scrollY > 0) {
        topel.classList.add('scrolled')
        none.classList.add('scrolled')
        borders.forEach(border => {
            border.classList.add('scrolled')
        });

    } else {
        topel.classList.remove('scrolled')
        none.classList.remove('scrolled')
        borders.forEach(border => {
            border.classList.remove('scrolled')
        });
    }
}

const logo = document.querySelector('.logo')
const targetabout = document.getElementById('about')
const targetform = document.getElementById('form')

logo.addEventListener('click', (e) => {
  e.preventDefault()

  window.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
})

document.querySelector('.none').addEventListener('click', ()=>{
    targetform.scrollIntoView({
        behavior: 'smooth'
    })
})

document.querySelector('.serch').addEventListener('click',()=>{
    targetabout.scrollIntoView({
        behavior: 'smooth'
    })
})

const content = document.querySelector('.mission-content')
const wrap = document.querySelector('.wrap')
const body = document.querySelector('body')
function Open() {
    content.classList.add('open')
    wrap.classList.add('open')
    body.style.overflow = "hidden"
}
function Close() {
    content.classList.remove('open')
    wrap.classList.remove('open')
    body.style.overflow = ""
}

const inputs = document.querySelectorAll('input')
const formbtn = document.querySelector('.formbtn')
const adress = document.getElementById('adress')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

formbtn.addEventListener('click', () => {
    let isChecked = true
    inputs.forEach(input => {
        if (input.value === "") {
            input.style.borderColor = "red"
            isChecked = false
        } else {
            input.style.borderColor = "rgb(187, 185, 185)"
        }
    });

    if (!emailRegex.test(adress.value)) {
        console.log("none")
        adress.style.borderColor = "red"
        isChecked = false
    }

    if(isChecked){
        formbtn.style.backgroundColor = "green"
        formbtn.textContent = "送信完了！"
        setTimeout(()=>{
            formbtn.style.backgroundColor = "black"
            formbtn.textContent = "送信"
            inputs.forEach(input => {
                input.value = ""
            })
        },3000)
    }    
})

const input = document.getElementById('input');
const hidebtns = document.querySelector('.hidebtns');
const btns = document.querySelector('.btns')

input.addEventListener('change', ()=> {
    if (input.checked) {
        hidebtns.style.transform = 'translateX(0)';
        topel.classList.add('scrolled')
        none.classList.add('scrolled')
        borders.forEach(border => {
            border.classList.add('scrolled')
        });
        
    } else {
        hidebtns.style.transform = 'translateX(100%)';
        /*topel.classList.remove('scrolled')
        none.classList.remove('scrolled')
        borders.forEach(border => {
            border.classList.remove('scrolled')
        });*/
    }
});

const hide_btns = document.querySelectorAll('.hide-btn')

hide_btns.forEach(hidebtn => {
    hidebtn.addEventListener('click',()=>{
        hidebtns.style.transform = 'translateX(100%)'
    })
});












