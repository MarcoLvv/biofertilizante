const logo = document.querySelector('.logo')
const menu = document.querySelector('.menu')

console.log(menu)
console.log(logo)

logo.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != logo){
    menu.classList.toggle("spread")
    }
})