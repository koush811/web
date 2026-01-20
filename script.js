const topel = document.querySelector('.top');
const none = document.querySelector('.none')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 1){
        topel.classList.add('scrolled')
        none.classList.add('scrolled')
        
    }else{
        topel.classList.remove('scrolled')
        none.classList.remove('scrolled')
    }
})


const content = document.querySelector('.mission-content')
const wrap = document.querySelector('.wrap')
function Open(){
    content.classList.add('open')
    wrap.classList.add('open')
}
function Close(){
    content.classList.remove('open')
    wrap.classList.remove('open')
}


