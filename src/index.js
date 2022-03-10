import gsap from "gsap";
import { TimelineMax } from "gsap/gsap-core";
const entryText = "السلام عليكم ...";
const entryDiv = document.querySelector(".entry-cover");
function entryTextAnimation() {
  let i = 0;
  let j = 1;

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
function removeElement(ele) {
  ele.parentNode.removeChild(ele);
}
entryTextAnimation();
