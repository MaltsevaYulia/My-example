              // MODUL2

// function getExtremeElements(array) {
//   // Change code below this line
//   let result1 = [array[0]];
//   let result2 = [array[array.length - 1]];
//   let result3 = result1.concat(result2);
//   return console.log(result3);

//   // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);
// ===========================================================
// 10/32
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words=message.split(delimiter)
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " ")); ;
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");
// ============================================================
// 11/32
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   let total = 0;
//   let words = message.split(" ");
//   console.log(words);
//   console.log(words.length);

//   for (let i = 1; i <= words.length; i += 1) {
//     total = i * pricePerWord;
//   }
//   return total;

//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// const f = "JavaScript is in my blood";
// let b = f.split(" ");
// console.log(b);
// console.log("long", b.length);
// =========================================================
// 13/32
// function slugify(title) {
//   // Change code below this line
//   // title = title.toLowerCase();
//   // title = title.split(' ');
//   // title = title.join('-')
//   title =title.toLowerCase().split(' ').join('-');
//   return title;

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers")); //повертає "arrays-for-begginers"
// slugify("English for developer"); //повертає "english-for-developer"
// slugify("How to become a JUNIOR developer in TWO WEEKS");// повертає "how-to-become-a-junior-developer-in-two-weeks"
// =========================================================
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
// // ========================================================
// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
// ========================================================
// 16 / 32
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//   let newArray = firstArray.concat(secondArray);

//   if (newArray.length >= maxLength) {
//     newArray = newArray.slice(0, maxLength);
//   }
//   return newArray;


//     // Change code above this line
//   }
//  console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));  //повертає ["Mango", "Poly", "Houston", "Ajax"]
//  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));//повертає ["Mango", "Poly", "Ajax"]
// //  console.log(); makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);// повертає ["Earth", "Jupiter"]
// //  console.log(); makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3); //повертає ["Mango", "Ajax", "Chelsea"]
// //  console.log(); makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"]);//повертає []
// //  console.log(); makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);// повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// ========================================================
// 18/32
// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
// for (let i = 0; i <= number; i++) {
//   total += i;
// }
//   return total;

//   // Change code above this line
// }
// console.log(calculateTotal(7));
// ===========================================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i++) {
//   total += order[i];
// }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// ===============================================
// 21/32
// function findLongestWord(string) {
//   // Change code below this line
// const words= string.split(" ");
//   let LongestWord=words[0];
//   for (let word of words) {
//     if (LongestWord.length<word.length) {
//       LongestWord=word;
//     }
    
//   }

// return LongestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // повертає jumped
// console.log(findLongestWord("Google do a roll")); // повертає Google
// console.log(findLongestWord("May the force be with you")); // повертає force
// // ==================================================
// 22/32
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
    
//     numbers.push(i)
    
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));//[1, 2, 3]
// console.log(createArrayOfNumbers(14, 17));//[14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34));// [29, 30, 31, 32, 33, 34]
// =================================================
// 23/32
// function filterArray(numbers, value) {
//    // Change code below this line
//     let newArray = [];
//     for (const number of numbers) {
//     if (number > value) {
//         newArray.push(number)
//     }
//   }

//   return newArray;

//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));//[4,5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));//[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));//[]
// // console.log(123);
// ============================================================
// 24/32
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));//true
// console.log(checkFruit("mandarin"));//false
// console.log(checkFruit("pear"));//true
// ======================================================
// 25/32
// Спільними елементами масивів називають ті елементи,
// які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3]
// спільними будуть числа 3 і 5,
// оскільки вони присутні в обох вихідних масивах.
// А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2),
// яка отримує два масиви довільної довжини в параметри
// array1 і array2, і повертає новий масив,
// що складається з тих елементів, які присутні в обох
// вихідних масивах.
// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let newArray = [];
//     let arrayLength = array2.length;
//     if (arrayLength < array1.length) {
//         arrayLength = array1.length;
//     }
//     for (let i = 0; i < arrayLength; i++) {
//         if (array2.includes(array1[i])) {
//             newArray.push(array1[i])
//         }
        
//     }

//     return newArray;
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));//[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));//[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));//[12, 27, 3]
// ========================================================
// 29/32
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let array=[];
// for (let i = start; i <= end; i++) {
//   if (i%2 === 0){
//     array.push(i);
//   }
// }
//     return array;

//     // Change code above this line
// }
// console.log(getEvenNumbers(2, 5));//[2, 4]
// console.log(getEvenNumbers(3, 11));//[4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12));//[6, 8, 10, 12]
// ==============================================================
// 32/32
function includes(array, value) {
  // Change code below this line
    let massege = false;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value) {
        massege= true;
        }
    }
    return massege;
  // Change code above this line
}
console.log(includes([1, 2, 3, 4, 5], 3));//true
console.log(includes([1, 2, 3, 4, 5], 17));;//false
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));