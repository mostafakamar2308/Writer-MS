const canvas = document.querySelector("#bg-canvas");
const ctx = canvas.getContext("2d");
let arr = [];
let mouseCo = {
  x: undefined,
  y: undefined,
};
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
window.addEventListener("resize", resize_canvas_to_full);
function resize_canvas_to_full() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  arr = [];
  for (let i = 0; i < 50; i++) {
    let cyc = new Circle(
      Math.random() * (innerWidth - 50 * 2.5) + 50,
      Math.random() * (innerHeight - 50 * 2.5) + 50,
      `hsl(${Math.random() * 360}, 80%, 40%)`
    );
    arr.push(cyc);
  }
  moveCircle();
}
let maxRadius = 40;
function Circle(x, y, color) {
  this.x = x;
  this.y = y;
  this.radius = Math.random() * 15 + 2;
  this.minRadius = this.radius;
  this.dx = Math.random() * 3 + 1;
  this.dy = Math.random() * 3 + 1;
  this.color = color;
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };
  this.animate = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    if (
      mouseCo.x - this.x > -250 &&
      mouseCo.x - this.x < 250 &&
      mouseCo.y - this.y > -250 &&
      mouseCo.y - this.y < 250
    ) {
      if (this.radius < maxRadius) {
        this.radius++;
      }
    } else {
      if (this.radius > this.minRadius) {
        this.radius--;
      }
    }
    this.draw();
  };
}
for (let i = 0; i < 50; i++) {
  let cyc = new Circle(
    Math.random() * (innerWidth - 50 * 2.5) + 50,
    Math.random() * (innerHeight - 50 * 2.5) + 50,
    `hsl(${Math.random() * 360}, 80%, 40%)`
  );
  arr.push(cyc);
}
function moveCircle() {
  requestAnimationFrame(moveCircle);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < arr.length; i++) {
    arr[i].animate();
  }
}
moveCircle();

let s = 0;
const myWorld = document.querySelector("#myWorld");
document.body.addEventListener("mousemove", function (e) {
  mouseCo.x = e.x;
  mouseCo.y = e.y;
});
