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


function countryToggle(countryNavContainer, countryContainer){
  const countryNav = document.querySelector(countryNavContainer);
  const countryNavItems = countryNav.children;
  const countriesContainer = document.querySelector(countryContainer);
  const countries = countriesContainer.children;
  const countrySelectElMobile = document.querySelector('#countrySelectMobile');
  const navPositions = [];
  const navSizes = [];
  const indicator = document.createElement('i');
  indicator.className = 'indicator';

  for(let i = 0; i < countryNavItems.length; i++){
    navPositions[i] = countryNavItems[i].offsetLeft;
    navSizes[i] = countryNavItems[i].offsetWidth;
  }

  //Set inital placement of indicator
  countryNav.appendChild(indicator);
  indicator.style.left = `${navPositions[0]}px`;
  indicator.style.width = `${navSizes[0]}px`;

  //Show first country on load
  countries[0].classList.add('active');

  function updateFiList(index){
    let activeFiItem = countriesContainer.querySelector('.active');
    activeFiItem.classList.remove('active');
    countries[index].classList.add('active');
  }

  function updateCustomNav(index){
    countryNav.querySelector('.active').classList.remove('active');
    countryNavItems[index].classList.add('active');
    indicator.style.left = `${navPositions[index]}px`;
    indicator.style.width = `${navSizes[index]}px`;
  }

  for(let i = 0; i < countryNavItems.length; i++){
      countryNavItems[i].addEventListener('click', function(){
        updateCustomNav(i);
        if(countrySelectElMobile){countrySelectElMobile.selectedIndex = i;}
        updateFiList(i);
      });
  }
  if(countrySelectElMobile){
    countrySelectElMobile.addEventListener('input', function(){
      updateCustomNav(this.selectedIndex);
      updateFiList(this.selectedIndex);
      if(window.innerWidth <= 900){
        window.window.scrollTo({
          top: 400,
          behavior: 'smooth'
        });
      }
    });
  }
}


//Consumer  Page
if(contentDiv.classList.contains('consumer')){
  gsap.registerPlugin(ScrollTrigger);
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

}


//Merchant Page
if(contentDiv.classList.contains('business')){

  gsap.registerPlugin(ScrollTrigger);
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

}

//Fianancial Institutions PAge
if(contentDiv.classList.contains('fi')){
  
  countryToggle('.country-nav ul','.fi-list');


}


//Fianancial Institutions PAge
if(contentDiv.classList.contains('wheretouse')){
  countryToggle('.country-nav ul','.merchant-list');
}

