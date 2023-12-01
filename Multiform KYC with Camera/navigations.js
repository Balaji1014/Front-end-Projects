
var field1 = document.getElementById("field1");
var field2 = document.getElementById("field2");
var field3 = document.getElementById("field3");
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var bar = document.getElementById("li2");
var bar3 = document.getElementById("li3");
var fileupload = document.getElementById("file-upload");
var btn = document.getElementById("btns");
var imag = document.getElementById("img");
var close = document.getElementById("close");
var takephoto = document.getElementById("take-photo");
var camera = document.getElementById("takephoto");  
var cameraClose = document.getElementById("camera-close");
var photoUpload = document.getElementById("photo-upload-btn");
var photoClose = document.getElementById("photo-upload-close");
var img2 = document.getElementById("img-2");
var uploadtick = document.getElementById("upload-tick");
var takephotoTick = document.getElementById("takephoto-upload-tick");
var imageuploadTick = document.getElementById("image-upload-tick");
next1.onclick = function () {
    field1.style.display = "none";
    field2.style.display = "block";
    bar.classList.add("active");
}

back1.onclick = function () {
    field2.style.display = "none";
    field1.style.display = "block";
    bar.classList.remove("active");
}

next2.onclick = function () {

    field2.style.display = "none";
    field3.style.display = "block";
    bar.classList.add("active");
    bar3.classList.add("active");
}

back2.onclick = function () {
    field3.style.display = "none";
    field2.style.display = "block";
    bar3.classList.remove("active");
}

fileupload.onclick = function () {

    btn.style.display = "none";
    imag.style.display = "block";
}

close.onclick = function () {

    imag.style.display = "none";
    btn.style.display = "block";
    fileupload.style.borderBottom = "none";
}

takephoto.onclick = function () {

    btn.style.display = "none";
    camera.style.display = "block";
}

cameraClose.onclick = function () {
  camera.style.display = "none";
    btn.style.display = "block";
    takephoto.style.borderBottom = "none";
}
photoClose.onclick = function (){
    img2.style.display = "none";
    btn.style.display = "block";
    photoUpload.style.borderBottom = "none";
}

photoUpload.onclick = function (){
    img2.style.display = "block";
    btn.style.display = "none";
}

uploadtick.onclick = function(){
    img2.style.display = "none";
    btn.style.display = "block";
    photoUpload.style.borderBottom = "3px solid #007130";
}

takephotoTick.onclick = function(){

    camera.style.display = "none";
    btn.style.display = "block";
   takephoto.style.borderBottom = "3px solid #007130";
}


imageuploadTick.onclick = function(){

    imag.style.display = "none";
    btn.style.display = "block";
    fileupload.style.borderBottom = "3px solid #007130";
}