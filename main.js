document.getElementById("img").style.display = "none";
document.getElementById("p").style.display = "none";
function clickforsurprise(){
    document.getElementById("img").style.display = "block";
    document.getElementById("p").style.display = "block";
    document.getElementById("cfs").style.display = "none";
    speak()
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "Happy Mother day Mom!";
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    utterThis.rate = "0.9";
    synth.speak(utterThis); 
}