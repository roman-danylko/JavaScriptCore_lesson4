let a = +prompt('Введіть число "а"');
8;
let b = +prompt('Введіть число "b"');
6;
let c = +prompt('Введіть число "c"');
2;

let D = b * b - 4 * a * c;

let x1;
let x2;

document.write(`<div class="a">a = ${a};</div>`);
document.write(`<div class="b">b = ${b};</div>`);
document.write(`<div class="c">c = ${c};</div>`);

if (D > 0) {
  x1 = (-b + Math.sqrt(D)) / (2 * a);
  x2 = (-b - Math.sqrt(D)) / (2 * a);
  document.write(`<div class="x1">x1 = ${x1};</div>`);
  document.write(`<div class="x2">x2 = ${x2};</div>`);
} else if (D == 0) {
  x1 = (-b + Math.sqrt(D)) / (2 * a);
  x2 = x1;
  document.write(`<div class="x1">x1 = x2 = ${x1};</div>`);
} else {
  document.write(`<div class="x1">Рівняння немає дійсних коренів!!!</div>`);
}
