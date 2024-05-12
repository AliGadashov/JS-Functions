//------------------------------- Task 1 -------------------------------------------

// alert("Task 1 : \n Ədədlərdən ibarət bir array qəbul edən və bu ədədlərin ədədi ortasını tapan bir funksiya yazın ");

// function average(array) {
//   let sum = 0;
//   for (let num of array) {
//     sum += num;
//   }
//   let avr = sum / 2;
//   return avr;
// }

// let arr = [];
// let howMany = parseInt(prompt("Neçə ədəd daxil etmək istəyirsiniz?"));

// for (let i = 0; i < howMany; i++) {
//   let number = parseInt(prompt("Ədəd daxil edin:"));
//   arr.push(number);
// }

// console.log(`daxil etdiyiniz ededlerin ededi ortasi :`, average(arr));

//------------------------------- Task 2 -------------------------------------------

// alert('Task 2 : \n String qəbul edən və onu tərsinə yazan funksiya yazın, məsələn "salam" qəbul edir "malas" qaytarır');

// function reverse(word) {
//   let reverseWord = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     reverseWord += word.charAt(i);
//   }
//   return reverseWord;
// }

// let word = prompt("Bir soz daxil edin: ");

// let reverseWord = reverse(word);
// console.log(reverseWord);

//------------------------------- Task 3 -------------------------------------------

// alert("Task 3 : \n Ədədin faktorialını hesablayan funksiya yazın");

// function calcFactorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
// }

// let number = prompt("Faktorialini hesablamaq istediyiniz ededi daxil edin: ");
// let factorial = calcFactorial(number);
// console.log(`${number} ədədin faktorialı: ${factorial}`);

//------------------------------- Task 4 -------------------------------------------

// alert('Task 4 : \n  Sözlərdən ibarət array qəbul edən və bu sözlərdən uzununu tapan funksiya yazın, məsələn ["apple", "orange","strawberry"] qəbul edir "strawberry"  qaytarır');

// function findLongestWord(words) {
//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// let words = ["apple", "orange", "strawberry"];
// let longest = findLongestWord(words);
// console.log("Longest word: " + longest);

//------------------------------- Task 5 -------------------------------------------

alert("Task 5 : \n Verilən ədədin rəqəmləri cəmini hesablayan funksiya yazın");

function sum(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}

let arr = [];
let howMany = parseInt(prompt("Neçə ədəd daxil etmək istəyirsiniz?"));

for (let i = 0; i < howMany; i++) {
  let number = parseInt(prompt("Ədəd daxil edin:"));
  arr.push(number);
}

console.log(`daxil etdiyiniz ededlerin cəmi :`, sum(arr));
