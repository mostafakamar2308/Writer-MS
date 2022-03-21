import { chooseBook } from "/src/book.js";
import gsap from "gsap";
const entryText = "السلام عليكم . . . ";
const entryDiv = document.querySelector(".entry-cover");
entryDiv.style.display = "none";
function entryTextAnimation() {
  let i = 0;

  let interval = setInterval(function () {
    if (i < entryText.length) {
      console.log("hi");
      entryDiv.textContent += entryText[i];
      i++;
    } else {
      clearInterval(interval);
      let tl = gsap.timeline();
      tl.to(entryDiv, { duration: 1, opacity: 0 }).to(entryDiv, {
        display: "none",
      });
    }
  }, 200);
}

entryTextAnimation();

const addToWorldBtn = document.querySelector("#add-to-my-world-btn");
const goToWorldBtn = document.querySelector("#myWorld-btn");
const mainIntro = document.querySelector(".logo");
const myWorld = document.querySelector("#myWorld");
const addToWorld = document.querySelector("#add-to-my-world");
const mainMenu = document.querySelector("nav").children[0];
const MyBooks = document.querySelector("nav").children[1];
const AboutMe = document.querySelector("nav").children[2];

function introDissappear(move) {
  if (document.querySelector(".intro").style.display != "none") {
    gsap.to(".intro", { duration: 0.5, x: move, display: "none" });
  }
}
function myWorldAppear() {
  if (myWorld.style.display === "grid") {
  } else {
    myWorld.style.display = "grid";
    myWorld.style.opacity = ".5";
    chooseBook();
    gsap.fromTo(
      myWorld,
      { x: "100%" },
      { delay: 0.5, duration: 0.5, x: "0%", opacity: 1 }
    );
  }
}
function addToWorldAppear() {
  if (addToWorld.style.display === "grid") {
  } else {
    addToWorld.style.display = "grid";
    addToWorld.style.opacity = "0";
    gsap.fromTo(
      addToWorld,
      { x: "-100%" },
      { delay: 0.5, duration: 0.5, x: "0%", opacity: 1 }
    );
  }
}
function introAppear() {
  document.body.style.background = "#ebe5df";
  gsap.to(addToWorld, { duration: 0.5, display: "none" });
  gsap.to(myWorld, { duration: 0.5, display: "none" });
  gsap.to("#about-me", { duration: 0.5, y: "200%", display: "none" });
  gsap.to(".intro", { duration: 0.5, x: "0%", display: "block" });
  document.querySelector(".logo").children[0].src = "./logo-black.png";
}
addToWorldBtn.addEventListener("click", function () {
  introDissappear("100%");
  addToWorldAppear();
});

goToWorldBtn.addEventListener("click", function () {
  introDissappear("-100%");
  myWorldAppear();
});
mainIntro.addEventListener("click", function () {
  introAppear();
});
mainMenu.addEventListener("click", function (e) {
  introAppear();
});
MyBooks.addEventListener("click", function () {
  gsap.to(addToWorld, { duration: 0.5, x: "-100%", display: "none" });
  introDissappear("-100%");
  myWorldAppear();
});

const drawCollection = document.querySelector(".draw-btn");
const drawCollectionView = document.querySelector(".drawings-btn");
const view = document.querySelector(".drawings");
const drawPlace = document.querySelector(".draw-div");
gsap.to(view, { duration: 0.2, x: "-1000%", display: "none" });
function viewDrawings(visible, clicked, removed, hidden, percent, display) {
  if (!clicked.classList.contains("selected")) {
    clicked.classList.add("selected");
    removed.classList.remove("selected");

    visible.style.display = display;
    gsap.to(hidden, { duration: 0.5, x: percent, display: "none" });
    gsap.to(visible, { delay: 0.4, duration: 0.5, x: 0 });
  }
}
drawCollection.addEventListener("click", function () {
  viewDrawings(
    drawPlace,
    drawCollection,
    drawCollectionView,
    view,
    "-300%",
    "grid"
  );
});
drawCollectionView.addEventListener("click", function () {
  viewDrawings(
    view,
    drawCollectionView,
    drawCollection,
    drawPlace,
    "300%",
    "flex"
  );
});

AboutMe.addEventListener("click", function () {
  introDissappear("-100%");
  gsap.to(addToWorld, { duration: 0.5, display: "none", x: "-300%" });
  gsap.to(myWorld, { duration: 0.5, display: "none", x: "300%" });
  document.querySelector("#about-me").style.display = "flex";
  gsap.fromTo("#about-me", { y: "200%" }, { delay: 0.8, duration: 0.5, y: 0 });
});
