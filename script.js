console.log("сайт Сад Арканы загружен");

var buttons = document.querySelectorAll(".btn-download-inner");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    e.preventDefault();
    alert("Скоро здесь будет ссылка на скачивание!");
  });
}

var stage = document.getElementById("stage");
var wrapper = document.querySelector(".wrapper");
var ORIGINAL_WIDTH = 1920;
var ORIGINAL_HEIGHT = 4253;

function fitToScreen() {
  var scale = window.innerWidth / ORIGINAL_WIDTH;
  wrapper.style.transform = "scale(" + scale + ")";
  stage.style.height = (ORIGINAL_HEIGHT * scale) + "px";
}

fitToScreen();
window.addEventListener("resize", fitToScreen);
