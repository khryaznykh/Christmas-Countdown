function christmasCountDown () {
    const christmasDate = new Date("December 25, 2024 00:00");
    const nowDate = new Date();
    const difference = christmasDate - nowDate;
    const secondMS = 1000;
    const minuteMS = 1000 * 60;
    const hourMS = 1000 * 60 * 60;
    const daysMS = 1000 * 60 * 60 * 24;
    
    const days = Math.floor(difference / daysMS);
    document.querySelector(".days").textContent=days;
    
    const hours = Math.floor((difference%daysMS) / hourMS);
    document.querySelector(".hours").textContent=hours;
    
    const minutes = Math.floor ((difference%hourMS) / minuteMS);
    document.querySelector(".minutes").textContent=minutes;
    
    const seconds = Math.floor((difference%minuteMS) / secondMS);
    document.querySelector (".seconds").textContent=seconds;

    if (difference <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timer);
        merryChristmas();
    } 
    
    
}

let timer = setInterval (christmasCountDown, 1000);

function merryChristmas() {
    const greetings = document.querySelector ("h1");
    greetings.textContent = "MERRY CHRISTMAS!! HO-HO-HO!!!";
    greetings.classList.add ("red");
}

const buttonPlay = document.querySelector ("#playbutton");
const image = document.querySelector ("#image")

let music=0;

buttonPlay.addEventListener ("click", musicPlay);
function musicPlay() {
    if (music%2 === 0) {
        document.querySelector ("#myAudio").play();
        image.setAttribute("src", "icons8-pause-80.png"); 
    }
    else {
        document.querySelector ("#myAudio").pause();
        image.setAttribute("src", "icons8-play-80.png"); 
    }
    music++;
}


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value":800,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#fff"]
      },
    //   "shape": {
    //     "type": "image",
    //     "stroke": {
    //       "width": 3,
    //       "color": "#fffff"
    //     },
    //     "polygon": {
    //       "nb_sides": 5
    //     },
    //     "image": {
    //         "src": "https://www.bing.com/images/search?view=detailV2&ccid=nF8kZqdT&id=8F1F945EB85A1B0F4DD8D17A9F6FE24DF2FF4ED0&thid=OIP.nF8kZqdT1_4W6GEMHueCIgHaIL&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9c5f2466a753d7fe16e8610c1ee78222%3frik%3d0E7%252f8k3ib5960Q%26riu%3dhttp%253a%252f%252fwww.clipartbest.com%252fcliparts%252fdi7%252fjE5%252fdi7jE5x6T.jpg%26ehk%3dfZ9IuktN2tXfz9Fo8guJXS%252fWKyZX6hmiY0VsKcSbUGQ%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=652&expw=590&q=Drawing+a+Star+Shape&simid=608020962848353194&FORM=IRPRST&ck=84FD2917AB5C1FD8A80E68C395E439AA&selectedIndex=106&ajaxhist=0&ajaxserp=0",
    //         "width": 100,
    //         "height": 100
    //     }
    //   },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffff",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);;