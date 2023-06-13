const menu = document.querySelector(".menu");
const menuN = document.querySelector('.menu-navegacion')

console.log(menuN)
console.log(menu)


menu.addEventListener('click', ()=>{
    menuN.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menuN.classList.contains('spread') && e.target != menuN && e.target != menu ){
        menuN.classList.toggle("spread")

    }
})

