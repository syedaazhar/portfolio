

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

let details = [
  {
    box: 'box-1',
    skillsId: 'skills-img1',
    // skills: 'HTML_Logo.png',
  },
  {
    box: 'box-2',
    skillsId: 'skills-img2',
    // skills: '7.png',
  },
  {
    box: 'box-3',
    skillsId: 'skills-img3',
    // skills: '347px-Badge_js-strict.svg.png'
  }
]



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

let projectDet = [
  {
    proBox :' pro-box-1',
    proImg : 'project-img1',
    webLink : 'new-weather-app',
    webName : 'Weather Forcast',
    repo : ''
  },
  {
    proBox :' pro-box-2',
    proImg : 'project-img2',
    webLink : 'news-app',
    webName : 'News-app'
    
  },
  {
    proBox :' pro-box-3',
    proImg : 'project-img3',
    webLink : 'web-whatsapp',
    webName : 'Web-whatsapp'
    
  },
  {
    proBox :' pro-box-4',
    proImg : 'project-img4',
    webLink : 'mobile-gallery',
    webName : 'Mobile-gallery'
    
  },
  {
    proBox :' pro-box-5',
    proImg : 'project-img5',
    webLink : 'new-project',
    webName : 'WEDDING PLANNERS'
    
  },
  {
    proBox :' pro-box-6',
    proImg : 'project-img6',
    webLink : 'mt-file',
    webName : 'Making Life Matter'
  }
]

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


