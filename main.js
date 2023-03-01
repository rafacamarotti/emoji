emoji = "";
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bGI79b8zl/model.json',modelloaded);
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src"'+data_uri+'"/>';
    });
}
console.log('ml5.version:',ml5.version);
function modelloaded(){
    console.log('modelo carregado');
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1= "esse é o seu emoji: ";
    var utterThis=  new speechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis); 
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotresult);
}