const canvas = document.querySelector("#bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", resize_canvas_to_full);
function resize_canvas_to_full() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // ctx.fillStyle = "red";
  // ctx.fillRect(150, 50, 100, 100);
}
function Circle(x, y, color) {
  this.x = x;
  this.y = y;
  this.radius = Math.random() * 50;
  this.dx = Math.random() * 05 + 1;
  this.dy = Math.random() * 05 + 1;
  this.color = color;
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  };
  this.animate = function () {
    console.log("start");
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
    console.log("end");
    requestAnimationFrame(this.animate);
  };
}
let arr = [];
for (let i = 0; i < 50; i++) {
  let cyc = new Circle(
    Math.random() * (innerWidth - 50 * 2.5) + 50,
    Math.random() * (innerHeight - 50 * 2.5) + 50,
    `hsl(${Math.random() * 360}, 100%, 50%)`
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
canvas.addEventListener("mousemove", function (e) {});
