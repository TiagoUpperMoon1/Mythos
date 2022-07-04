var i = 0; 			
var images = [];	
var time = 2000;	

images[0] = "images/Loki.jpg";
images[1] = "images/Thor.jpg";
images[2] = "images/Odin.jpg";



function changeImg() {
	document.slide.src = images[i];

	
	if (i < images.length - 1) {
		
		i++;
	} else {
		
		i = 0;
	}

	setTimeout("changeImg()", time);
}


window.onload = changeImg;
