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
    trigger: ".grid-container",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: ".grid-images",
    anticipatePin: 1
  }
})
.set(".image:not(.center-img)", {autoAlpha: 0})
.to(".image:not(.center-img)", {duration: 0.01, autoAlpha: 1})
.to(".grid-images", {
  scale: 1,
  ease: "none",
});