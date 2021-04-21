const first = document.getElementById('first');
const last = document.getElementById('last');
let enter = document.getElementById('enter');
const result = document.getElementById('result');
let arr7 = [];

function openM() {
    arr7.push(enter.value);
    console.log(arr7);
};

function show() {
    result.innerHTML = arr7.sort((b,c) => b - c);
};
