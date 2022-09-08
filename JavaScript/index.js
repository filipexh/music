var numberOfDrums = document.querySelectorAll("button").length;

for (var i=0; i<numberOfDrums; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

});

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

});

function makeSound(key) {

switch (key) {
  case "A":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;

  case "M":
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;

  case "I":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;

  case "G":
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;

  case "O":
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;

  case "H":
  var kick = new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;

  case "K":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;

  default: console.log(buttonInnerHTML);

  }

}

//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
