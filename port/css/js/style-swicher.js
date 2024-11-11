const styleSwitcherToggle=document.querySelector(".style-swicher-toggler");
styleSwicherToggler.addEventListener("click",() => {
    document.querySelector(".style-swicher").classList.toggle("open");
})

window.addEventListener( "scroll",() =>{
    if(document.querySelector(".style-swicher").classList.contains("open")){
        document.querySelector(".style-swicher").classList.remove("open")
    }
})

const alternatestyles = document.querySelectorAll(".alternate-style");
function setActivestyle(color){
    alternatestyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.getAttribute("disabled","true");  
        }
    })
}

const daynight = document.querySelector(".day-night");
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("fa-sun"); 
    }else{
        daynight.querySelector("i").classList.add("fa-moon");
    }
})