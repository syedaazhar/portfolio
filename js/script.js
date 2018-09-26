

// navbar animation
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style = "padding: 8px 10px; background-color : #191a1b";
    document.querySelector(".navbar-brand").style.fontSize = "20px";
  } else {
    document.querySelector(".navbar").style = "padding: 30px 10px; background-color :rgba(33, 37, 41, 0)";
    document.querySelector(".navbar-brand").style.fontSize = "35px";
  }
}

// ***

// when the page will be scroll main hadinng div will be invisible

$(window).scroll(function(){
  $(".main-heading").css("opacity", 1 - $(window).scrollTop() / 250);
});

// ***

// AOS library  

AOS.init();

// **

// for(let i=0;i<3;i++){
//   let contain =document.querySelector('.grid-container');
//   contain.innerHTML=`<div class="card skill-box shadow bg-white" data-aos="zoom-in">
//                       <div class="card-body skills">
//                         <div class='skills-img' id="skills-img1" 
//                         style = background-image:url(${i});></div>
//                       </div>
//                     </div>`;
// }








// CSSPlugin.defaultTransformPerspective = 400; 

// TweenMax.to(".green", 3, {rotationX:360});
// TweenMax.to(".orange", 3, {rotationY:360});
// TweenMax.to(".grey", 3, {x:100, y:100, scale:2, skewX:45, rotation:180});