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
    trigger: ".features",
    start: "top 193px",
    end: window.innerHeight * 1.5,
    scrub: true,
    pin: ".features",
    anticipatePin: 1
  }
})
.to(".intro-img", {
  scale: 1,
  x:0,
  ease:  'none',
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".grid-container",
    start: "top 193px",
    end: 'bottom bottom',
    scrub: true,
    pin: ".grid",
    anticipatePin: 1
  }
})
.to(".grid", {
  scale: 1,
  x:0,
  ease:  'none',
}).to(".first .text", {duration: 0.15, opacity: 1}, "-=0.2");