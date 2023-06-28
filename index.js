
// start point of scroll image
var i = 0;
var images= []; //imagee array
var time = 2000; //time between switch

// image list 
 images[0] = "images/anniversery.jpg";
 images[1] = "images/prize.jpg";
 images[2] = "images/fitst.jpg";
 images[3] = "images/civil_couse.jpg";
 images[4] = "images/civil_engi.jpg";
 images[5] = "images/computer.jpg";
 

//change the image

function changeImg(){

    if(i < images.length){
        document.slide.src = images[i];
         i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()",time);
}
// Run function when page loads
window.onload=changeImg;

// choosing civil or computer in button 

