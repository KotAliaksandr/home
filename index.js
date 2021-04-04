const massiv_one = [];
const massiv_two = [];
let massiv_one_two = [];
let max = 0;

for (let i = 0; i < 10; i++) {
  massiv_one.push(Math.floor(Math.random() * 100));
  massiv_two.push(Math.floor(Math.random() * 100));
}

console.log(massiv_one);
console.log(massiv_two);

function solder(massiv_one, massiv_two) {
  massiv_one_two = massiv_one.concat(massiv_two);
  massiv_one_two.push('glued', 'array');
  console.log(massiv_one_two);

  for (let i = 0; i < massiv_one_two.length; i++) {
    let x = massiv_one_two[i] % 2;
    if (x == 0) {
      massiv_one_two[i] *= 2;
    }
  }
  console.log(massiv_one_two);

  for (let i = 0; i < massiv_one_two.length; i++) {
    if (max < massiv_one_two[i]) {
      max = massiv_one_two[i];
    }
  }
  console.log(max);

  let min = massiv_one_two[0];

for (let i = 0; i < massiv_one_two.length; i++) {
    if (min > massiv_one_two[i]) {
      min = massiv_one_two[i];
    }
  }
  console.log(min);
}

 solder(massiv_one, massiv_two);
 