const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY
        > 120);
})

AOS.init({
    offset:300,
    duration:1400,
});