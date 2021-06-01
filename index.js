//                                The task №1.
//  	    Пользователь вводит строку кириллицей разного регистра. Напишите функцию, 
//      которая принимает строку в качестве аргумента и заменяет регистр каждого символа
//      на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
//      то на выходе должен быть массив [кАжДыЙ оХоТнИк].


// const inpEnter = document.createElement('input');
// inpEnter.innerHTML = '';
// document.body.append(inpEnter);
// inpEnter.style.border = 'solid';
// inpEnter.style.margin = '3%';
// inpEnter.style.width = '30vw';
// inpEnter.style.height = '5vh';
// inpEnter.style.fontSize = '3vh';

// const button = document.createElement('button');
// button.innerHTML = 'click';
// document.body.append(button);
// button.style.width = '15vw';
// button.style.height = '5vh';
// button.style.fontSize = '3vh';


// button.onclick = () => {

//     const changeArr = str => {
//         str = inpEnter.value;
//         const arrStr = str.split('');

//         const newArrStr = arrStr.map(item => {
//             if (item === item.toUpperCase()) {
//                 return item.toLowerCase();
//             } else {
//                 return item.toUpperCase();
//             };
//         });

//         const li = document.createElement('li');
//         document.body.append(li);
//         li.style.margin = '1%';
//         li.style.fontSize = '3vh';
//         li.innerHTML = newArrStr.join('');
//     };
//     changeArr();
// };


//                                   The task №2.
//  	    Напишите функцию removeDuplicates(arr), которая возвращает массив,
//      в котором удалены повторяющиеся элементы из массива arr 
//      (игнорируйте чувствительность к регистру). Не использовать Set!!!


// const arr1 = ['Sasha','Petya', 'sasha', 'Petya', 'Petya', 'sasha'];

// const removeDuplicates = arr => {
//     arr = arr1.map(item => {
//         return item.toUpperCase();
//     });
    
//     const newArr = arr.filter((item, index) => {
//         return index == arr.indexOf(item);
//     });
//     console.log(newArr);
// };
    
// removeDuplicates();


//                                     The task №3.
//         Напишите код, который создаёт массив элементов,представляющих собой сумму
//     соответствующих элементов заданных массивов.


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3];
// const arr3 = [];
// let x;

// const getSummArray = () => {
//     if(arr1.length > arr2.length) {
//         x = arr1.length;
//     } else {
//         x = arr2.length;
//     };
//     for(i = 0; i < x; i++) {
//         if (arr1[i] === undefined) {
//             arr1.push(0)
//         }
//         if (arr2[i] === undefined) {
//             arr2.push(0)
//         }
//         arr3.push(arr1[i] + arr2[i])
//     }
//     console.log(arr3);
// };

// getSummArray()


//                                     The task №4.
//          Напишите функцию countIdentic(arr), которая возвращает количество
//      повторяющихся элементов в массиве.


// const arr = [22, 22, 1, 3, 3, 3, 3, 4, 4, 4, 4, 4, 10, 4, 4, 'Sasha', 'Sasha','Petya', 'sasha', 'Petya', 'Petya'];
// let counter = 0;

// const countIdentic = num => {
//     num = arr;
//     const newArr = num.filter((item, index) => {
//         if (index !== num.indexOf(item)) {
//             counter++
//         }
//     });
//     console.log(counter);
// };
    
// countIdentic();


//                                     The task №5.
//      Напишите функцию union, которая возвращает массив состоящий 
//   только из уникальных элементов из каждого массива.

// const arr1 = [1, 2, 3, 7,];
// const arr2 = [2, 5, 6, 7,];
// const arr3 = [3, 5, 6, 8, 9, 10];
// const arrUnion = [];
// const newArr = [];

// const union = (newArr) => {
//     newArr = arr1.concat(arr2, arr3);

//     getArrUnion = () => newArr.forEach((item, index) => {
//         if(index == newArr.indexOf(item)) {
//             arrUnion.push(item);
//         };
//     });
//     getArrUnion();
//     console.log(arrUnion);
// };

// union();
