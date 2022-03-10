import gsap from "gsap";
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

entryTextAnimation();
let btl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
btl.to(".btrfly-1", {
  duration: 2.5,
  translateY: "-= 150",
  translateX: "+= 150",
  yoyo: true,
  ease: true,
});

let rtl = gsap.timeline({ repeat: -1 });
rtl.to(".bunny", { duration: 1.5 });
// ttl.reverse();
