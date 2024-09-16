
let btnUp=document.getElementById("UpBtn");
let loading=document.getElementById("Loading")
let nav= document.getElementById("nav");
let secondSection = document.getElementById('nav');
let secondSectionTop = secondSection.offsetTop +350;
let closeIcon = document.getElementById("strg");
let icTime = document.getElementById("tim")




// Up button \\
btnUp.onclick = function () {
    window.scroll(0, 0);
}
window.onload=function () {
    loading.style.display="none";
    document.body.style.overflow='auto';
}
//Scroll
window.onscroll = function () {
    if (scrollY > secondSectionTop) {

        nav.style.height = "80px !important";
        nav.style.position= "fixed"
        nav.style.top = "0"
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "rgba(255,255,255)  !important";
        nav.style.zIndex = "100";
    }
    else if (scrollY > 200) {
        btnUp.style.opacity = "1"
    }
    else {
        nav.style.height = "auto";
        btnUp.style.opacity = "0" 
        nav.style.position="static"
    }
}

closeIcon.onclick = function(){
    if(closeIcon.classList.contains("fa-bar-staggered")){
    {
        closeIcon.style.display = "none";
        icTime.style.display = "block";
    } }
    else
    {
        closeIcon.classList.add("fa-bar-staggered");
        closeIcon.classList.remove("fa-times");
    }
}

