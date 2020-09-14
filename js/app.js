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

/*
  let featuresInfo = document.querySelectorAll('.info-list .item');
  let mainSections = document.querySelectorAll('.screen-list .item');

  window.addEventListener("scroll", event => {

    featuresInfo.forEach(feature => {
      let section = document.getElementById(feature.dataset.benefit);


      if (
        section.getBoundingClientRect().top <= 0 &&
        section.getBoundingClientRect().bottom  <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        feature.classList.add("active");
      } else {
        feature.classList.remove("active");
      }
    });
  });*/

