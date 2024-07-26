var drumlength = document.querySelectorAll(".drum").length;
for (i = 0; i < drumlength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    animation(this.innerHTML);
  });
}

document.addEventListener("keypress", function (pressbutton) {
  makeSound(pressbutton.key);
  animation(pressbutton.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "g":
      var snare = new Audio("sounds/crash.mp3");
      snare.play();
      break;

    case "h":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;

    case "j":
      var kick = new Audio("sounds/snare.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function animation(current) {
  var activebutton = document.querySelector("." + current);
  activebutton.classList.add("pressed");
  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 80);
}
