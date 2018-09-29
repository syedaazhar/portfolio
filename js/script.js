

// navbar animation
window.onscroll = function () { scrollFunction() };
function scrollFunction() {

  $(document).ready(function () {

    let i = $("body").width();

    if (i >= "850") {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style = "padding: 8px 10px; background-color : #191a1b";
        document.querySelector(".navbar-brand").style.fontSize = "20px";

      } else {
        document.querySelector(".navbar").style = "padding: 30px 10px; background-color :rgba(33, 37, 41, 0)";
        document.querySelector(".navbar-brand").style.fontSize = "35px";

      }
    }

  });
}

// ***

// when the page will be scroll main hadinng div will be invisible

$(window).scroll(function () {
  $(".main-heading").css("opacity", 1 - $(window).scrollTop() / 250);
});

// ***

// AOS library  

AOS.init();




function showDiv() {
  let container = document.querySelector('.grid-container');
  for (let i = 0; i < details.length; i++) {
    container.innerHTML += `<div class="card skill-box shadow bg-white" id="${details[i].box}" data-aos="zoom-in">
                              <div class="card-body skills">
                                <div class='skills-img' id="${details[i].skillsId}"></div>
                              </div>
                            </div>`
  }
}

showDiv();



let container2 = document.querySelector('#container-2');
for (let i = 0; i < projectDet.length; i++) {
  container2.innerHTML += `  <div class="card portfolio-box shadow bg-white" id="${projectDet[i].proBox}" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <div class="card-body project">
                                  <div class='project-img' id="${projectDet[i].proImg}"></div>
                                  <div class="project-del">
                                    <h5>
                                      <a href=" https://syedaazhar.github.io/${projectDet[i].webLink}/"
                                       target="_blank">
                                          ${projectDet[i].webName}
                                      </a>
                                    </h5>
                                    <a href="https://github.com/syedaazhar/${projectDet[i].webLink}" target="_blank">
                                      <i class="fab fa-github"></i>
                                      You can see code here

                                    </a>
                                  </div>
                                </div>
                            </div>`
}


let about = document.querySelector('.timeline')
for (let i = 0; i < eduDetails.length; i++) {
  about.innerHTML += `<section class="circle-div">
                        <div class="circle" id="${eduDetails[i].circle}"></div>
                      </section>

                      <div class="about-content animated flash">
                        <div class="content-del">

                          <h2>${eduDetails[i].place}</h2>
                          <h4>${eduDetails[i].qualification}</h4>
                        </div>
                      </div>`
}

