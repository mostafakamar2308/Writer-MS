import gsap from "gsap";

const drawCanvas = document.querySelector("#draw");
let boundries = drawCanvas.getBoundingClientRect();
drawCanvas.width = "600";
drawCanvas.height = "450";
const brushColor = document.querySelector("#brush-color-range");
const brushSize = document.querySelector("#brush-size-range");
const resetBtn = document.querySelector("#reset-drawing");
const sendBtn = document.querySelector("#send-drawing");
const canvasColor = document.querySelector("#canvas-color-range");

const ctx = drawCanvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, drawCanvas.width, drawCanvas.height);

function draw(x, y, radius, color) {
  ctx.lineWidth = radius;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.lineTo(x, y);
  ctx.stroke();
}
let mouseCor = {
  x: undefined,
  y: undefined,
};
let isPainting = false;
drawCanvas.addEventListener("mousedown", function () {
  isPainting = true;
});
drawCanvas.addEventListener("mousemove", function (e) {
  boundries = drawCanvas.getBoundingClientRect();
  mouseCor.x = e.x - boundries.left;
  mouseCor.y = e.y - boundries.top;
  if (isPainting === true) {
    draw(mouseCor.x, mouseCor.y, brushSize.value, brushColor.value);
  }
});
drawCanvas.addEventListener("mouseup", function () {
  isPainting = false;
  ctx.beginPath();
});
resetBtn.addEventListener("click", function () {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, drawCanvas.width, drawCanvas.width);
  document.querySelector("#sender-name").value = "";
});
const iff = document.querySelector("#down");
sendBtn.addEventListener("click", function () {
  if (
    document.querySelector("#sender-name").value.trim() != "" &&
    document.querySelector("#sender-name").value !== "Test"
  ) {
    let image = drawCanvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.target = "_blank";
    link.href = image;

    link.download = document.querySelector("#sender-name").value + ".png";
    link.rel = "noreferrer";
    link.click();
    document.body.appendChild(link);
    document.body.removeChild(link);
  } else if (document.querySelector("#sender-name").value === "Test") {
    console.log("You Found the first secret");
    createSecret();
  }
});
function createSecret() {
  let container = document.createElement("section");
  container.id = "secret-container";
  document.body.appendChild(container);

  let secret = document.createElement("div");
  container.appendChild(secret);

  let label = document.createElement("label");
  label.textContent = "عارفة أنا مين الأول؟ *اسمي الاول بس*";
  secret.append(label);

  let textbox = document.createElement("input");
  textbox.type = "text";
  textbox.placeholder = "افتكرى شفرة مورس هاهاها";
  secret.appendChild(textbox);

  let p = document.createElement("p");
  p.textContent = "";
  secret.appendChild(p);
  textbox.addEventListener("input", function () {
    changeText(textbox, p);
  });
}
let changeText = function (textbox, p) {
  if (textbox.value == "م") {
    p.textContent = "بسم الله XD";
  } else if (textbox.value == "مص") {
    p.textContent = "أيوة فاضل تلت حروف";
  } else if (textbox.value == "مصط") {
    p.textContent = "أيوة فاضل حرفين";
  } else if (textbox.value == "مصطف") {
    p.textContent = "أيوة فاضل حرف";
  } else if (textbox.value == "مصطفي") {
    p.textContent = "هاتي الياءالتانية XDDD";
  } else if (textbox.value == "مصطفى") {
    p.textContent = "أيوة أنا";
    getName(textbox.parentNode);
  } else if (textbox.value.includes(".") || textbox.value.includes("-")) {
    p.textContent = "اكتبى بالعربي، انا بفكرك بذكري اجمد ايام حياتي";
  } else {
    p.textContent = "إخص غلطتي في اسمي؟!! ويت ولا نسيتي؟ اااااااااااااااااا";
  }
};
function getName(r) {
  gsap.to(r, { duration: 1, opacity: 0 });
  setTimeout(() => {
    r.firstChild.textContent = "موافقة تتجوزينى؟ اه او لا";
    r.children[1].textContent = "";
    r.children[2].textContent = "";
  }, 1050);
  r.removeChild(r.children[1]);
  let newTextbox = document.createElement("input");
  r.appendChild(newTextbox);
  newTextbox.addEventListener("input", function () {
    checkApproval(r);
  });
  gsap.to(r, { delay: 1.05, duration: 1, opacity: 1 });
}
//حلها بانك تمسح الانبوت بوكس دا وتحط واحد تاني وخلاص
function checkApproval(parent) {
  if (parent.children[2].value == "اه") {
    parent.children[1].textContent = "أخيرا يا بنتي ااااااااا";
  } else if (parent.children[2].value == "لا") {
    parent.children[1].textContent = "ساد والله";
  } else {
    parent.children[1].textContent = "يا اه يا لا";
  }
}
canvasColor.addEventListener("input", function () {
  ctx.fillStyle = canvasColor.value;
  ctx.fillRect(0, 0, drawCanvas.width, drawCanvas.height);
});
