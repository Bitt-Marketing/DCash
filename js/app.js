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
var FRAMES = 148;
var FPS = 30;
var video = document.getElementById('video');

window.addEventListener('scroll', function (e) {
  var time = (window.scrollY / 1000) * FRAMES / FPS;
  video.currentTime = time;
  console.log(time);
});

window.addEventListener('load', function(e) {
  video.pause();
  video.currentTime = 0;
});*/
