let contentDiv = document.getElementById('content');

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

//Merchant Page
if(contentDiv.classList.contains('consumer')){
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
}


//Merchant Page
if(contentDiv.classList.contains('business')){


  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "top 129px",
      end: "bottom top",
      scrub: true,
    }
  });

  gsap.utils.toArray(".parallax").forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth)
    tl1.to(layer, {y: movement, ease: "none"}, 0)
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "top 129px",
      end: "bottom top",
      scrub: true,
    }
  })
  .to(".mason ul", {
    x:-400,
    ease:  'none',
  });

  /*
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
  */

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

}

//Fianancial Institutions PAge
if(contentDiv.classList.contains('fi')){
  const countryNav = document.querySelector('.country-nav ul');
  const countryNavItems = countryNav.children;
  const fiContainer = document.querySelector('.fi-list');
  const fiList = fiContainer.children;
  const navPositions = [];
  const navSizes = [];
  const indicator = document.createElement('i');
  indicator.className = 'indicator';

  for(let i = 0; i < countryNavItems.length; i++){
    navPositions[i] = countryNavItems[i].offsetLeft;
    navSizes[i] = countryNavItems[i].offsetWidth;
  }

  console.log(navPositions);
  countryNav.appendChild(indicator);
  indicator.style.left = `${navPositions[0]}px`;
  indicator.style.width = `${navSizes[0]}px`;
  fiList[0].classList.add('active')

  for(let i = 0; i < countryNavItems.length; i++){
      countryNavItems[i].addEventListener('click', function(){
        let activeNavitem = countryNav.querySelector('.active');
        let activeFiItem= fiContainer.querySelector('.active');
        activeNavitem.classList.remove('active');
        activeFiItem.classList.remove('active')
        this.classList.add('active');
        indicator.style.left = `${navPositions[i]}px`;
        indicator.style.width = `${navSizes[i]}px`;
        fiList[i].classList.add('active')
      });
  }
}