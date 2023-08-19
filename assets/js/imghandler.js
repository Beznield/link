function simpleMessage() {
	alert("This is just an alert box");
}

var myImage = document.getElementById("mainImage");

var imageArray = ["assets/img/7.JPG","assets/img/9.JPG","assets/img/5.JPG","assets/img/4.JPG",
				 "assets/img/4.JPG"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length -1 ) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage, 5000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};