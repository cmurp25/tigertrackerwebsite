
// // When the user clicks on <div>, open the popup
// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }


var infobox = document.getElementById("infobox");


document.getElementById("btn").onclick = function(e) {
    infobox.innerHTML = "End Zone West Camera<br> \
    People Detected: 5 bajillion<br> \
    Sound level: 1 bajillion Db";
    newVar = "littlejohn";
}

document.getElementById("btn2").onclick = function(e) {
    infobox.innerHTML = "End Zone East Camera<br> \
    People Detected: 5 bajillion<br> \
    Sound level: 1 bajillion Db";
    newVar = "videoboard"
}

document.getElementById("btn3").onclick = function(e) {
    infobox.innerHTML = "Core Campus Camera<br> \
    People Detected: 5 bajillion<br> \
    Sound level: 1 bajillion Db";
    newVar = "holmes"
}

document.getElementById("btn4").onclick = function(e) {
    infobox.innerHTML = "College of Business Camera<br> \
    People Detected: 5 bajillion<br> \
    Sound level: 1 bajillion Db";
    newVar = "business";
}

document.getElementById("btn5").onclick = function(e) {
    infobox.innerHTML = "Bowman Field Camera<br> \
    People Detected: 5 bajillion<br> \
    Sound level: 1 bajillion Db";
    newVar = "sikes";
}

document.getElementById("btn6").onclick = function(e) {
    infobox.innerHTML = "Sikes Hall Camera<br> \
    People Detected: 5 bajillion<br> \
    Sound level: 1 bajillion Db";
    newVar = "long";
}

document.getElementById("btn7").onclick = function(e) {
    infobox.innerHTML = "Watt Family Innovation <br> \ Center Camera<br> \
    People Detected: 5 bajillion<br> \
    Sound level: 1 bajillion Db";
    newVar = "cooper";
}

document.getElementById("btn8").onclick = function(e) {
    infobox.innerHTML = "Amphitheater Camera<br> \
    People Detected: 5 bajillion<br> \
    Sound level: 1 bajillion Db";
    newVar = "brackett"
}

document.getElementById("btn9").onclick = function(e) {
    infobox.innerHTML = "Cooper Library Camera<br> \
    People Detected: 5 bajillion<br> \
    Sound level: 1 bajillion Db";
    newVar = "rhodes";
}

window.setInterval(myFunc, 500);
function myFunc(){
   var img = document.getElementById("feedImg");
   img.src = "https://camera.clemson.edu/"+newVar+"/fullsize.jpg?cache="+Date.now().toString();
}
