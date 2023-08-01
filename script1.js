
//Active Menu///////
// let menuLi = document.querySelector('header ul li a');
// let section = document.querySelector('section');

// function activeMenu(){
//     let len = section.length;
//     while(--len && window.scrollY + 97 < section[len].offsetTop){}
//     menuLi.forEach(sec => sec.classList.remove("active")); 
//     menuLi[len].classList.add("active");
// }

// activeMenu();
// window.addEventListener("scroll",activeMenu);



// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

