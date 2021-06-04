//                                The task №1.
//  	    Пользователь вводит строку кириллицей разного регистра. Напишите функцию, 
//      которая принимает строку в качестве аргумента и заменяет регистр каждого символа
//      на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
//      то на выходе должен быть массив [кАжДыЙ оХоТнИк].


// let str = 'sASHA kOT';

// const changeArr = str => {

//     const arrStr = str.split('');
//     const newArrStr = arrStr.map(item => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase());
//     console.log(newArrStr.join(''));
// };

// changeArr(str);


//                                   The task №2.
//  	    Напишите функцию removeDuplicates(arr), которая возвращает массив,
//      в котором удалены повторяющиеся элементы из массива arr 
//      (игнорируйте чувствительность к регистру). Не использовать Set!!!


// const arr1 = ['Sasha','Petya', 'sasha', 'Petya', 'Petya', 'sasha'];

// const removeDuplicates = arr1 => {

//     const newArr1 = arr1.map(item => item.toUpperCase());
//     const newArr2 = newArr1.filter((item, index) => index == newArr1.indexOf(item));

//     console.log(newArr2);
// };
    
// removeDuplicates(arr1);


//                                     The task №3.
//         Напишите код, который создаёт массив элементов,представляющих собой сумму
//     соответствующих элементов заданных массивов.


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3];
// const arr3 = [];

// const getSummArray = () => {

//     let lengestArr;

//     arr1.length > arr2.length ? lengestArr = arr1.length : lengestArr = arr2.length;

//     for(let i = 0; i < lengestArr; i++) {

//         arr1[i] ? arr1.push(0) : null;
//         arr2[i] ? arr2.push(0) : null;

//         arr3.push(arr1[i] + arr2[i]);
//     };

//     console.log(arr3);
// };

// getSummArray();


//                                     The task №4.
//          Напишите функцию countIdentic(arr), которая возвращает количество
//      повторяющихся элементов в массиве.


// const arr = [22, 22, 1, 3, 3, 3, 4, 4, 4, 4, 4, 10, 4, 4, 'Sasha', 'Sasha','Petya', 'sasha', 'Petya', 'Petya'];

// const countIdentic = arr => {

//     let counter = 0;
//     arr.filter((item, index) => index !== arr.indexOf(item) ? counter++ : null);

//     console.log(counter);
// };
    
// countIdentic(arr);


//                                     The task №5.
//      Напишите функцию union, которая возвращает массив состоящий 
//   только из уникальных элементов из каждого массива.

// const arr1 = [1, 2, 3, 7,];
// const arr2 = [2, 5, 6, 7,];
// const arr3 = [3, 5, 6, 8, 9, 10];

// const unionArr = (arr1, arr2, arr3) => {

//     const newArr = arr1.concat(arr2, arr3);
//     const arrUnion = newArr.filter((item, index) => index == newArr.indexOf(item) ? item : null);

//     console.log(arrUnion);
// };

// unionArr(arr1, arr2, arr3);
