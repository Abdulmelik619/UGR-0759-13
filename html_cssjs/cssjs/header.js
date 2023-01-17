// // const navToggle=document.querySelector(".header__navbar");


// // navToggle.addEventListener('click',function(){
// //     const links=document.querySelector(".menu");
// //     const linksva=window.getComputedStyle(links);
// //     if(linksva.display=='none'){
// //         linksva.display='block';
// //     }
// //     else{
// //         linksva.display='none';
// //     }
// // })

const navbtn = document.getElementById("nav-btn");
const menn1=document.getElementById("really")
navbtn.addEventListener('click', function(){
    // menu.classList.toggle('active');
    menn1.classList.toggle('active');
    
})
// navbtn.addEventListener('click', function() {
//     const menu1 = document.getElementById('menu')
//     menu1.classList.toggle('display-none')

// })