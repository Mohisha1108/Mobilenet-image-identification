Webcam.set({
    width: 300,
    height: 350,
    image_format: 'png',
    png_quaity:90,
    constraints: {
        facingMode: "enviroment"
    }
});
var camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src="+ data_uri+" id='captured_image'>";
    });
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('MobileNet',modelloaded);
function modelloaded(){
    console.log("model has been loaded");
}
function check(){
    var img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("Object_name").innerHTML = result[0].label;
    }
}