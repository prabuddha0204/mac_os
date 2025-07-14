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
let apple = document.querySelector("#apple");
let btn5 = document.querySelector(".hi");
btn5.addEventListener("click", () => {
  if (apple.style.display === "flex") {
    apple.style.display = "none";
  } else {
    apple.style.display = "flex";
  }
});
document.addEventListener("click", (e) => {
  if (!btn5.contains(e.target) && !edit.contains(e.target)) {
    apple.style.display = "none";
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

welcomeIcon.addEventListener("dblclick", () => {
  welcomeWindow.style.display = "flex";
});
const folderWindowEl = document.getElementById("folder1");
const folderTitleBarEl = document.getElementById("folder1-title");

let isFolderDragging = false;
let folderOffsetX = 50;
let folderOffsetY = 50;

folderTitleBarEl.addEventListener("mousedown", (e) => {
  isFolderDragging = true;
  folderOffsetX = e.clientX - folderWindowEl.offsetLeft;
  folderOffsetY = e.clientY - folderWindowEl.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isFolderDragging) {
    folderWindowEl.style.left = `${e.clientX - folderOffsetX}px`;
    folderWindowEl.style.top = `${e.clientY - folderOffsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isFolderDragging = false;
});
 const folderIcon = document.querySelector(".folderp");
  const folderWindow = document.getElementById("folder1");

  folderIcon.addEventListener("dblclick", () => {
    folderWindow.style.display = "flex";
  });
  const noteWindow = document.getElementById("noteWindow");
  const noteTitleBar = document.getElementById("noteTitleBar");

  let isNoteDragging = false;
  let dragOffsetX, dragOffsetY;

  noteTitleBar.addEventListener("mousedown", (e) => {
    isNoteDragging = true;
    dragOffsetX = e.clientX - noteWindow.offsetLeft;
    dragOffsetY = e.clientY - noteWindow.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (isNoteDragging) {
      noteWindow.style.left = `${e.clientX - dragOffsetX}px`;
      noteWindow.style.top = `${e.clientY - dragOffsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isNoteDragging = false;
  });
  let note = document.querySelector("#noteWindow");
let btn6 = document.querySelector(".notepad");
btn6.addEventListener("click", () => {
  if (note.style.display === "block") {
    note.style.display = "none";
  } else {
    note.style.display = "block";
  }
});
