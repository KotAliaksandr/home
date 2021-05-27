//                          Задание №1: 

    
const showNumber = (ms) => {
    ms = Math.floor(Math.random( ) * 10);

    const newShowNumber = new Promise((resolve, reject) => {
        if(ms % 2 == 0) {
            resolve(ms);
        } else {
            reject(alert('Odd number'));
        };
    });

    newShowNumber
        .then(result => console.log(result));
};

showNumber()



//                              Задание №2:


// const onePromise = () => new Promise((resolve) => {
//     setTimeout(() =>{
//         console.log('Hello world');
//         resolve();
//     }, 4000);
// });

// const twoPromise = () => new Promise((resolve) => {
//     setTimeout(() =>{
//         console.log('I love java script');
//         resolve();
//     }, 2000);
// });

// const threePromise = () => new Promise((resolve) => {
//     setTimeout(() =>{
//         console.log('HTML and CSS or JAVA SCRIPT');
//         resolve();
//     }, 1500);
// });

// const fourPromise = () => new Promise((resolve) => {
//     setTimeout(() =>{
//         console.log('THANKS ALEXEI');
//         resolve();
//     }, 3000);
// });

// const fivePromise = () => new Promise((resolve) => {
//     setTimeout(() =>{
//         console.log('HTML and CSS');
//         resolve();
//     }, 1000);
// });

// const sixPromise = () => new Promise((resolve) => {
//     setTimeout(() =>{
//         console.log('JAVA SCRIPT');
//         resolve();
//     }, 500);
// });

// onePromise()
//     .then(() => fivePromise())
//     .then(() => sixPromise())
//     .then(() => threePromise())
//     .then(() => twoPromise())
//     .then(() => fourPromise());


//                                 Задание №3:


// for(let i = 0; i < 5; i++) {
//     unknownPromise = new Promise((resolve) => {
//         let x = Math.floor(Math.random() * 5000);

//         setTimeout(() => {
//             console.log('Promise № :', i, '/', 'time:', x);
//             resolve();
//         }, x)
//     });
// };

// Promise.all([unknownPromise])
//     .then(() => console.log('test'))
// Promise.race([unknownPromise])
//     .then(() => console.log('test'))
