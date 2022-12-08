// let result;
// function formatMessage(message, maxLength) {
  
//   // Change code below this line
//   if (message.length > maxLength) {
//     result=message.slice(0,maxLength) + "..." ;
//   } else {
//     result=message;
//   }
 
//   /// Change code above this line
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16)
// console.log(result)
// let result;
// function checkForSpam(message) {
  
//   // Change code below this line
  
// if(message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//   result=true;
// } else {
//   result=false;
// }
//   // Change code above this line
//   return result;

// }
// checkForSpam("Amazing SalE, only tonight!");
// console.log(result)


// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// використовувати цикл while()

// function calcDays(depth) {

// }
// calcDays(42)//виповзе за 8 днів
// calcDays(17)//виповзе за 3 дні
// calcDays(18)//виповзе за 4 дні

// const depth = 18;
// const daySpeed = 7;
// const nightSpeed = 2;
// let days = 0;
// let distance = 0;

// while (distance < depth) {
//   distance += daySpeed;
//   days += 1;
//   if (distance < depth) {
//     distance -= nightSpeed;
//   }
// }

// console.log(days);
// ==============================================
// При завантаженні сторінки користувачеві пропонується
//В prompt ввести число. Введення додається до значення змінної total.
//Операція введення числа триває до того часу,
//Поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів не потрібно.
// let total = 0;
// let flag = false;
// do {
//   const number=  Number(prompt());
//   if (number) {
//     flag = true;
//     total += number;
//   } else {
//     flag = false;
//   }
  
// } while (flag);
// // const total = prompt();1
// console.log(total);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

  

//   if (password === ADMIN_PASSWORD) {
//    return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }
// ====================================================

// function checkStorage(available, ordered) {
//   checkStorage(100, 50)
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//  console.log(message);
//   return message;
  
  
//   // Change code above this line
// }
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }
// ===========================================================
function getExtremeElements(array) {
  // Change code below this line
return array[0]

  // Change code above this line
}

getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);

console.log(array);