const sign = document.querySelector(".menu__link__sing")
const active = document.querySelector(".wrapper ")

console.log(active)

sign.addEventListener("click", () => {
    active.classList.add('active');
    
})