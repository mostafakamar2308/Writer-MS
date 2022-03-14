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

// entryTextAnimation();
