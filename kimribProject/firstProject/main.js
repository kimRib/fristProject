let maintext = document.querySelector("h1")
window.addEventListener('scroll',function() {
    let value = window.scrollY;

    if(value>300) {
        maintext.style.animation='removingfont 2s ease-out forwards';
    }else{
        maintext.style.animation='movingfont 2s ease-out';
    }
});

let ListbackColor = document.getElementById("back-color");
let Menulist = document.querySelectorAll("nav a")

Menulist.forEach((menu) => menu.addEventListener("click",(e) => MenuIndicator(e)));

function MenuIndicator(e) {
    ListbackColor.style.left = e.currentTarget.offsetLeft + "px";
    ListbackColor.style.width = e.currentTarget.offsetWidth + "px";
    ListbackColor.style.top = e.currentTarget.offsetTop + e. currentTarget.offsetHeight + "px";
}