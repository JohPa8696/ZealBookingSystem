//Array of images which you want to show: Use path you want.
var imageNames=new Array('img/venue-banner.jpg','img/studios.jpg','img/Gear.jpg','img/hero.jpg');
var images = new Array();
var nextImage=0;

preloadImages(imageNames);
function preloadImages() {
    i=1
    for (var i=0; i <imageNames.length ; i++){
        images[i] = new Image();
        images[i].src = imageNames[i];
    };
	setInterval(function(){ doSlideshow(); }, 5000);
}

function doSlideshow(){
    if(nextImage>=images.length){nextImage=0;}
    var header =  document.getElementById("intro-header");
   	header.style.backgroundImage="url("+images[nextImage++].src+")";
}