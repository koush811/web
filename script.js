const topel = document.querySelector('.top');
const none = document.querySelector('.none')

window.addEventListener('scroll', updateheader)
window.addEventListener('load', updateheader)

function updateheader() {
    if (window.scrollY > 0) {
        topel.classList.add('scrolled')
        none.classList.add('scrolled')

    } else {
        topel.classList.remove('scrolled')
        none.classList.remove('scrolled')
    }
}


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

    if (!adress.value.includes('@')) {
        console.log("none")
        adress.style.borderColor = "red"
        isChecked = false
    }

    if(isChecked){
        formbtn.style.backgroundColor = "green"
        formbtn.textContent = "送信完了！"
    }

    setTimeout(()=>{
        formbtn.style.backgroundColor = "black"
        formbtn.textContent = "送信"
        inputs.forEach(input => {
            input.value = ""
        })
    },3000)
})






