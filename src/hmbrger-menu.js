import gsap from "gsap";
const menu = document.querySelector(".hmbrger-menu");
menu.addEventListener("click", function () {
  if (
    document.querySelector("nav").style.display == "none" ||
    !document.querySelector("nav").style.display
  ) {
    gsap.fromTo("nav", { y: "-100%", display: "flex" }, { duration: 1, y: 0 });
    for (let i = 0; i < 3; i++) {
      menu.firstChild.children[i].setAttribute("fill", "white");
    }
  } else {
    gsap.to("nav", { duration: 1, y: "-100%", display: "none" });
    for (let i = 0; i < 3; i++) {
      menu.firstChild.children[i].setAttribute("fill", "black");
    }
  }
});
let navLinks = Array.from(document.querySelector("nav").children);
navLinks.forEach((ele) => {
  ele.addEventListener("click", function () {
    gsap.to("nav", { duration: 1, y: "-100%", display: "none" });
    for (let i = 0; i < 3; i++) {
      menu.firstChild.children[i].setAttribute("fill", "black");
    }
  });
});
