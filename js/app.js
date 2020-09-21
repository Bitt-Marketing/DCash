let homeStartedBtns = document.querySelectorAll('.choose-path span');
let homePaths = document.querySelectorAll('.path-information > div');

for(let i = 0; i< homeStartedBtns.length; i++){
    homeStartedBtns[i].addEventListener('click', function(){
        homeStartedBtns.forEach(function(item, index){
            item.classList.remove('active');
            homePaths[index].classList.remove('active');
        });

        this.classList.add('active');
        homePaths[i].classList.add('active');
    })
}


gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".benefits",
    start: "top top",
    end: window.innerHeight * 2,
    scrub: true,
    pin: ".benefits .img",
    anticipatePin: 1
  }
})
.to(".benefits .img", {
  scale: 1,
  y: 100,
  ease:  'none',
});

let merchantFeat = document.querySelector('.landing .right').children;
gsap.timeline({
  scrollTrigger: {
    trigger: ".feature-container",
    start: "top 205px",
    end: window.innerHeight * 2.5,
    scrub: true,
    pin: ".features",
    anticipatePin: 1
  }
})
.to(".intro-img", {
  scale: 1,
  x:0,
  ease:  'none',
})
.to(merchantFeat, { opacity:1, scale: 1, stagger:0.15}, '-=0.45');

gsap.timeline({
  scrollTrigger: {
    trigger: ".why-container",
    start: "top 205px",
    end: window.innerHeight * 4,
    scrub: true,
    pin: ".why",
    anticipatePin: 1
  }
})
.to(".why", {
  scale: 1,
  x:0,
  ease:  'none',
}).to(".first .text", {duration: 0.1, opacity: 1}, "-=0.035");