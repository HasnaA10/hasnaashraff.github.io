// //Animation to change he occupation
// let words = document.querySelectorAll(".word");
// words.forEach((word)=> {
//     let letters = word.textContent.split("");
//     word.textContent="";
//     letters.forEach((letter)=>{
//         let span = document.createElement("span");
//         span.textContent = letter;
//         span.className = "letter";
//         word.append(span);
//     });
// });

// let currentWordIndex =0;
// let maxWordIndex = words.length - 1;
// words[currentWordIndex].style.opacity = "1"

// let changeText= ()=>{
//     let currentWord = words[currentWordIndex];
//     let maxWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

//     Array.from(currentWord.children).forEach((letter, i)=>{
//         setTimeout(()=>{
//             letter.className = "letter out";
            
//         },i * 80);
//     });

//     nextWord.style.opacity = "1";
//     Array.from(nextWord.children).forEach((letter,i)=>{
//         letter.className = "letter behind";
//         setTimeout(()=>{
//             letter.className = "letter in";
//         },340 + 1 * 80);
//     });
// };


// currentWordIndex = currentWordIndex === maxWord ? 0 : currentWordIndex + 1;


// changeText(); 
// setInterval(changeText, 3000)

// //home page
// let words = document.querySelectorAll(" .word");
// words.forEach((word)=>{
//     let letters = word.textContent.split("");
//     word.textContent="";
//     letters.forEach((letter)=>{
//         let span = document.createElement("span");
//         span.textContent = letter;
//         span.className = "letter";
//         words.append(span);
//     });
// });

// let currentWordIndex = 0;
// let maxWordIndex = words.length - 1;
// words[currentWordIndex].style.opacity = "1";

// let changeText = ()=>{
//     let currentWord = words[currentWordIndex];
//     let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

//     Array.from(currentWord.children).forEach((letter, i)=>{
//         setTimeout(()=>{
//             letter.className = "letter out";
//         }, i * 80);
//     });

//     nextWord.style.opacity = '1';
//     Array.from(nextWord.children).forEach((letter,i)=>{
//         letter.className = "letter behind";
//         setTimeout(()=>{
//             letter.className = "letter in";
//         }, 340 + i*80);
//     });

//     currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
// };

// changeText();
// setInterval(changeText, 3000);

//active nav bar
//Get the container element
// var menuLi = document.getElementsByClassName("navlist");

//Get all buttons with class="btn" inside the container
// var section = menuLi.getElementsByClassName("nav");

//Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < section.length; i++) {
//   section[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }


// // active menu///

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelector('section');

function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener(scroll, activeMenu);


// sticky navbar

const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})


function confirmButtonClicked() {
    // validation for required feilds
    var name = document.getElementById("send-form").elements[0].value;
    var email = document.getElementById("purchase-form").elements[1].value;
    

    if (name === '' || !validateEmail(email)) {
        alert("Please fill required fields")
        return
    } 
}

//validate email
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
