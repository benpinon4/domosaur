// warmup challenges

//1.
let span1 = document.querySelector(".mess-with-me");

span1.style.fontSize = "40px";

//2.
let paraMessWithMe = document.querySelector("p.mess-with-me");

paraMessWithMe.style.backgroundColor = "green";

//3.
let hideMe = document.querySelector("#hide-me");

hideMe.style.display = "none";

//4.
let firstDino = document.querySelector("#triceratops");

firstDino.style.width = "324px";

//Event-List//
//1.

span1.addEventListener("click", function () {
  span1.style.color = "orange";
});

//2.
firstDino.addEventListener("click", function () {
  firstDino.style.border = "2px solid red";
});

//3.
let featherDino = document.querySelector("#feathers");

featherDino.addEventListener("click", function () {
  featherDino.style.opacity = ".5";
});

//4. and stretch goal 1.

let dinoRow = document.querySelector("#row");

let backgroundSwitch = document.querySelector("#toggle");

backgroundSwitch.addEventListener("click", function () {
  if (dinoRow.style.backgroundColor === "") {
    dinoRow.style.backgroundColor = "pink";
  } else if (dinoRow.style.backgroundColor === "pink") {
    dinoRow.style.backgroundColor = "";
  }
});

//5. and stretch goal 2

let bigPic = document.querySelector("#biggify");

bigPic.addEventListener("mouseenter", function () {
  bigPic.style.width = "200px";
});
bigPic.addEventListener("mouseleave", function () {
  bigPic.style.width = "162px";
});
