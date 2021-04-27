Webcam.set({
  width: 320,
  height: 240,
  image_format: "jpeg",
  jpeg_quality: 90,
});
Webcam.attach("#camera");

function takeSnapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("snapshot").innerHTML =
      '<img id="image" src="' + data_uri + '"/>';
  });
}

classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/FZt2qDgPC/model.json",
  modelLoaded
);

function modelLoaded() {
  console.log(ml5.version);
}

function speak(pred) {
  var synth = window.speechSynthesis;
  text1 = "My prediction is " + pred;
  var utterThis = new SpeechSynthesisUtterance(text1);
  synth.speak(utterThis);
}

function check() {
  var myImg = document.getElementById("image");
  classifier.classify(myImg, getData);
}

function getData(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
    var label = result[0].label;
    document.getElementById("pred").innerHTML = showGesture(label);

    speak(label);
  }
}

function showGesture(label) {
  if (label == "Amazing") {
    return "&#128076;";
  } else if (label == "Best") {
    return "&#128077;";
  } else if (label == "Victory") {
    return "&#9996;";
  }
}
