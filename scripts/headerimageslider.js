// //Array of images which you want to show: Use path you want.
// var imageNames=new Array('img/venue-banner.jpg','img/studios.jpg','img/Gear.jpg','img/hero.jpg');
// var images = new Array();
// var nextImage=0;

// preloadImages(imageNames);
// function preloadImages() {
//     i=1
//     for (var i=0; i <imageNames.length ; i++){
//         images[i] = new Image();
//         images[i].src = imageNames[i];
//     };
// 	setInterval(function(){ doSlideshow(); }, 5000);
// }

// function doSlideshow(){
//     if(nextImage>=images.length){nextImage=0;}
//     var header =  document.getElementById("intro-header");
//    	header.style.backgroundImage="url("+images[nextImage++].src+")";
// }


var vid = document.getElementById("facilities-video");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})