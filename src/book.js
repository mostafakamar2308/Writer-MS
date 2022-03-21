import gsap from "gsap";
import whoop from "/y/287708199-200-k787994.jpg";
import book_draw from "/y/171414502-200-k912968.jpg";

const myBooks = [
  {
    bookName: "نعيق",
    description: `بينما أنت آخر همِك اختبار رياضيات يوم الثلاثاء، 
        هنالك من يحلم ان تجرِ الدماء في عروقه لا خارجها. 
        انها حرب، انها ليست كأمك تُلسع من الطعام الساخن فتقبل اصبعك،  الحرب ستترك تحترق. 
        تسع اغبياء، سيتعين عليهم مواجهة ما فُرض عليهم، 
        و ربما بعضهم ايضا.`,
    cover: whoop,
    bgColor: ["#011638", "#7A82AB"],
    color: "#dfd3d3",
    link: "https://www.wattpad.com/story/287708199-%D9%86%D9%8E%D8%B9%D9%90%D9%8A%D9%82%D9%92-whoop",
  },
  {
    bookName: "ارسميني",
    description: "جميعنا نكسر قواعدنا لأجل شخص ما",
    cover: book_draw,
    bgColor: ["#4c2a85", "#a6ffa1"],
    color: "#dfd3d3",
    link: "https://www.wattpad.com/story/171414502-draw-me-%D8%A7%D8%B1%D8%B3%D9%85%D9%8A%D9%86%D9%8A",
  },
];
export let bookNum = 0;
const backwardMove = document.querySelector(".backward");
const forwardMove = document.querySelector(".forward");
const bookCoverItem = document.querySelector(".bookCover").children[0];
const bookNameItem = document.querySelector(".bookName");
const bookDescriptionItem = document.querySelector(".bookDescription");
const bookLink = document.querySelector(".book-link");

export function chooseBook() {
  if (bookNum == 0) {
    bookCoverItem.src = myBooks[bookNum].cover;
    bookNameItem.textContent = myBooks[bookNum].bookName;
    bookDescriptionItem.textContent = myBooks[bookNum].description;
    bookLink.setAttribute("href", myBooks[bookNum].link);
    changeColor(bookNum);
    bookNum = 1;
  } else {
    bookCoverItem.src = myBooks[bookNum].cover;
    bookNameItem.textContent = myBooks[bookNum].bookName;
    bookDescriptionItem.textContent = myBooks[bookNum].description;
    bookLink.setAttribute("href", myBooks[bookNum].link);
    changeColor(bookNum);
    bookNum = 0;
  }
}
function changeColor(numb) {
  document.body.style.background = `linear-gradient(270deg, ${myBooks[numb].bgColor[0]} 15%, ${myBooks[numb].bgColor[1]} 76%)`;
  document.querySelector(".book").style.color = myBooks[numb].color;
  document.querySelectorAll(".mover").forEach((ele) => {
    ele.style.color = "white";
  });
}
backwardMove.addEventListener("click", function () {
  gsap.to(".book", { duration: 0.35, x: "150%" });
  setTimeout(() => {
    chooseBook();
  }, 350);
  gsap.to(".book", { delay: 0.5, duration: 0.35, x: "0" });
});

forwardMove.addEventListener("click", function () {
  gsap.to(".book", { duration: 0.35, x: "-150%" });
  setTimeout(() => {
    chooseBook();
  }, 350);
  gsap.to(".book", { delay: 0.5, duration: 0.35, x: "0" });
});
