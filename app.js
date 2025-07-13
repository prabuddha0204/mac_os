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
