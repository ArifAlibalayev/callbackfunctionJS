const array = [3, 7, 12, 34, 21, 64, 48, 13]

// ? 1.Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.

// function OrtaSum(arr) {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]

//     }
//     return sum;
// }

// array.forEach((x, i, arr1, orta) => {
//     orta = OrtaSum(array) / array.length
//     console.log(orta);
// });

// ? 2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.
// const arrcut = [];


// function EvenDetector(array, cb) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (cb(array[i])) {
//             sum += array[i];
//         }
//     }
//     return sum;
// }

// function isEven(number) {
//     return number % 2 === 0;
// }


// let evensum = EvenDetector(array, isEven);

// console.log(evensum);



// ? 3. Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// function OddDetector(array, cb) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (cb(array[i])) {
//             sum += array[i];
//         }
//     }
//     return sum;
// }

// function isOdd(number) {
//     return number % 2 !== 0;
// }


// let oddsum = OddDetector(array, isOdd);

// console.log(oddsum);

// ? 4.Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.

// const evens = array.filter(function isEven(number) {
//     return number % 2 === 0;
// });
// const odds = array.filter(function isOdd(number) {
//     return number % 2 !== 0;
// });

// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;

// }

// const sumOfEvenNumbers = sumArray(evens);
// const sumOfOddNumbers = sumArray(odds);

// console.log(sumOfEvenNumbers * sumOfOddNumbers);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// const Odd = []
// const Even = []

// function OddEven(...arr) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             Odd.push(array[i])
//             sumodd += Odd[i]
//         } else {
//             Even.push(array[i])

//         }

//     }

//     return [Odd, Even, sumodd];
// }

// console.log(OddEven(array));

