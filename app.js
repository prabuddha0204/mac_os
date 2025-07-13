setTimeout(() => {
  document.getElementById("splash1").style.display = "none";
  document.getElementById("splash2").style.display = "flex";

  setTimeout(() => {
    document.getElementById("splash2").style.display = "none";
    document.getElementById("main-ui").style.display = "flex";
  }, 2000);
}, 2000);
const blackScreen = document.getElementById("black-screen");
const splash1 = document.getElementById("splash1");
const splash2 = document.getElementById("splash2");

window.onload = () => {
  setTimeout(() => {
    splash1.style.display = "flex";
    blackScreen.classList.add("slide-up");

    setTimeout(() => {
      blackScreen.classList.remove("slide-up");
      blackScreen.classList.add("slide-down");

      setTimeout(() => {
        splash1.style.display = "none";
        splash2.style.display = "none";
        blackScreen.style.display = "none";
      }, 1000);
    }, 2700);
  }, 500);
};
let file = document.querySelector("#file");
let btn1 = document.querySelector(".menu1");
btn1.addEventListener("click", () => {
  if (file.style.display === "flex") {
    file.style.display = "none";
  } else {
    file.style.display = "flex";
  }
});
document.addEventListener("click", (e) => {
  if (!btn1.contains(e.target) && !file.contains(e.target)) {
    file.style.display = "none";
  }
});
let edit = document.querySelector("#edit");
let btn2 = document.querySelector(".menu2");
btn2.addEventListener("click", () => {
  if (edit.style.display === "flex") {
    edit.style.display = "none";
  } else {
    edit.style.display = "flex";
  }
});
document.addEventListener("click", (e) => {
  if (!btn2.contains(e.target) && !edit.contains(e.target)) {
    edit.style.display = "none";
  }
});
let view = document.querySelector("#view");
let btn3 = document.querySelector(".menu3");
btn3.addEventListener("click", () => {
  if (view.style.display === "flex") {
    view.style.display = "none";
  } else {
    view.style.display = "flex";
  }
});
document.addEventListener("click", (e) => {
  if (!btn3.contains(e.target) && !edit.contains(e.target)) {
    view.style.display = "none";
  }
});
let special = document.querySelector("#special");
let btn4 = document.querySelector(".menu4");
btn4.addEventListener("click", () => {
  if (special.style.display === "flex") {
    special.style.display = "none";
  } else {
    special.style.display = "flex";
  }
});
document.addEventListener("click", (e) => {
  if (!btn4.contains(e.target) && !edit.contains(e.target)) {
    special.style.display = "none";
  }
});
const windowEl = document.getElementById("welcomeWindow");
const titleBar = document.getElementById("titleBar");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

titleBar.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - windowEl.offsetLeft;
  offsetY = e.clientY - windowEl.offsetTop;
  windowEl.style.zIndex = parseInt(windowEl.style.zIndex || 10) + 1;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    windowEl.style.left = `${e.clientX - offsetX}px`;
    windowEl.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
const welcomeIcon = document.querySelector(".welcome1");
const welcomeWindow = document.getElementById("welcomeWindow");

welcomeIcon.addEventListener("click", () => {
  welcomeWindow.style.display = "flex";
});
