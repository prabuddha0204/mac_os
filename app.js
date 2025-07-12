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

// Step 1: Slide black screen up to reveal splash1
window.onload = () => {
  // wait 0.5s and slide black screen up
  setTimeout(() => {
    splash1.style.display = "flex";
    blackScreen.classList.add("slide-up");

    // Step 2: After 2s, slide black screen down again
    setTimeout(() => {
      blackScreen.classList.remove("slide-up");
      blackScreen.classList.add("slide-down");

      // Step 3: After slide down, switch to splash2
      setTimeout(() => {
        splash1.style.display = "none";
        splash2.style.display = "none";
        blackScreen.style.display = "none";
      }, 1000); // wait for slide-down animation
    }, 3000); // after 2s of splash1
  }, 500); // initial wait before showing splash1
};
