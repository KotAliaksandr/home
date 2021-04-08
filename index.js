const arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.splice(1, 2);
console.log(arr);

let str = 'дана произвольная строка';
console.log(str);

let x = str.split(' ');
console.log(x);

x.reverse()
console.log(x);

const arr1 = [];

for (let i = x.length - 1; i >= 0; i--) {
    arr1.push(x[i]);
}
console.log(arr1);
