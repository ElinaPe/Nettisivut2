const nav = document.querySelector('.topnavi')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }else {
        nav.classList.remove('active')
    }
}


function responsiveNav() {
    let x = document.getElementById("topnavresp");
    if (x.className === "topnavresp") {
        x.className += " responsive";
    } else {
        x.className = "topnavresp";
    }
}
