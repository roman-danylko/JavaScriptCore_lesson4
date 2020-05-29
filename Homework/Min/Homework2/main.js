let a = +prompt("Write first number");
let b = +prompt("Write second number");

let q = a;
let w = b;

if (q < 0) {
  q *= -1;
}
if (w < 0) {
  w *= -1;
}

let c = 10 - q;
let d = 10 - w;

if (c < 0) {
  c *= -1;
}
if (d < 0) {
  d *= -1;
}

if (c > d) {
  document.write(`${b} є ближче до 10`);
} else if (c == d) {
  document.write(`${a} i ${b} є одинково близькі до 10`);
} else {
  document.write(`${a} є ближче до 10`);
}
