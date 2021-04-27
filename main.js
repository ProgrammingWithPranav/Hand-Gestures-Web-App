Webcam.set({
  width: 320,
  height: 240,
  image_format: "jpeg",
  jpeg_quality: 90,
});
Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("snapshot").innerHTML = '<img src="'+data_uri+'"/>';
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FZt2qDgPC/model.json", modelLoaded);

function modelLoaded() {
  console.log(ml5.version);
}