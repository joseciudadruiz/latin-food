//sticky header
window.onscroll = function() {stickness()};
var navbar = document.getElementById("items");
var sticky = navbar.offsetTop;

function stickness() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

//button to create toggle menu on small screens
function toggled () {
  var button = document.getElementById("toggled");
  if (button.style.display === "none") {
    button.style.display = "block";
  } else {
    button.style.display = "none"
  }
}

//dynamic words
var words = ["Food", "Art", "Style"];
var foot = document.getElementById("food");
currentWord = -1;

window.setInterval(function () {
  currentWord++
  if(currentWord > words.length) currentWord = 0;
  foot.textContent = words[currentWord]
}, 2000);
