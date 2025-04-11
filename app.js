let gseq = [];
let useq = [];

let start = false;
let level = 0;
let btns = ["red", "green", "orange", "blue "];
let h2 = document.querySelector("h3");
document.addEventListener("keypress", function () {
  if (start == false) {
    start = true;

    levelup();
  }
});
function W(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}
function r(btn) {
  btn.classList.add("useerflash");
  setTimeout(function () {
    btn.classList.remove("useerflash");
  }, 500);
}
function levelup() {
  useq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let index = Math.floor(Math.random() * 3);
  let color = btns[index];
  let i = document.querySelector(`.${color}`);
  gseq.push(color);
  W(i);
}
function check(idx) {
  if (useq[idx] === gseq[idx]) {
    if (useq.length == gseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over <b>Your score was ${level}</b><br>Try again by pressing any button`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function press() {
  let btn = this;
  r(btn);
  usercolor = btn.getAttribute("id");
  useq.push(usercolor);
  check(useq.length - 1);
}

let all = document.querySelectorAll(".btn");
for (btn of all) {
  btn.addEventListener("click", press);
}
function reset() {
  start = false;
  gseq = [];
  useq = [];
  level = 0;
}
