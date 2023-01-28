
// ===============================
// // // // потрібно створити функцію яка буде формувати чергу в магазині
// // // // 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// // // // 2 параметр це кількість кас
// // // // Повертає обєкт де ключ це номер касси, значення це час черги на касі
// // // // 12 + 2 + 15 = 29
// // // // 3 + 5 + 6 + 7 = 21
// // // // { 1 : 29, 2 : 21}


function fn(buyers, cases) {
    const obj = {};
    for (let i = 1; i <= cases; i += 1) {
        obj[i] = 0;
    }
    const time = buyers.reduce((acc,elem)=>{
        const values= Object.values(acc);
        const minValue=Math.min(...values);
        const current=values.indexOf(minValue)+1
        acc[current]+=elem;
        return acc
    },obj)
    return obj
}
console.log(fn([12,3,5,6,2,15,7],2))

// решение в одну строку
// function fn(buyers, cases) {
//     const obj = {};
//     for (let i = 1; i <= cases; i += 1) {
//         obj[i] = 0;
//     }

//     buyers.reduce((acc,item)=>{
//         acc[Object.values(acc).indexOf(Math.min(...Object.values(acc))) + 1] += item;
//         return acc
//     },obj)

//     return obj
// }
// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2))
// ===================================

// Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// Not found
// const people1 = [
//     {
//       name: "Alex",
//       know: ["Eva", "Jhon"],
//     },
//     {
//       name: "Ivan",
//       know: ["Jhon", "Alex"],
//     },
//     {
//       name: "Eva",
//       know: ["Alex", "Jhon"],
//     },
//     {
//       name: "Jhon",
//       know: ["Alex"],
//     },
//   ];
  
//   // Not found
  
//   const people2 = [
//     {
//       name: "Alex",
//       know: ["Eva", "Jhon"],
//     },
//     {
//       name: "Jhon",
//       know: [],
//     },
//     {
//       name: "Eva",
//       know: [],
//     },
//     {
//       name: "Ivan",
//       know: ["Jhon", "Alex"],
//     },
//   ];
  
//   // jhon
  
//   const people3 = [
//     {
//       name: "Alex",
//       know: ["Eva", "Jhon"],
//     },
//     {
//       name: "Jhon",
//       know: [],
//     },
//     {
//       name: "Eva",
//       know: ["Alex", "Jhon"],
//     },
//     {
//       name: "Ivan",
//       know: ["Jhon", "Alex"],
//     },
//   ];
  
//   function findNarsis(arr) {
//     const resalt = arr.filter((el) => !el.know.length);
//     console.log(resalt);
//     if (resalt.length !== 1) {
//       console.log("Not found");
//       return;
//     }
//     const narsis = resalt[0].name;
  
//     const isNarsis = arr.every(
//       (el) => el.know.includes(narsis) || el.name === narsis
//     );
//     if (isNarsis) {
//       console.log(narsis);
//     } else {
//       console.log("Not found");
//     }
//   }
  
//   findNarsis(people1);
//   findNarsis(people2);
//   findNarsis(people3);