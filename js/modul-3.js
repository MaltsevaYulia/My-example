//modul 3
//10/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);
// =======================================
//11/41
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);
// ============================================
//12/41
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         propCount +=1;
        
//     }
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({})); // повертає 0
// console.log(countProps({ name: "Mango", age: 2 }));// повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));// повертає 3
// ==============================================
// 13/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//     values.push(apartment[key]);
// }
// console.log(values);
// =============================================
// 14/41
// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;
//     const  keys = Object.keys(object);
//     console.log(keys);

// for (const key of keys) {
//     propCount +=1
// }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({}));//0
// console.log(countProps({ name: "Mango", age: 2 }));//2
// ===================================================
// 16/41
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
// //   Change code below this line
//     const keys = Object.keys(salaries);
//     console.log(keys);
//     for (const key of keys) {
//         totalSalary += salaries[key];
//     }
    
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));//330
// =========================================================
// 17/41
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // for (let i = 0; i < colors.length; i++) {
// //     const element = colors[i];
// //     console.log(element.hex);
// //     hexColors.push(element.hex);
// //     rgbColors.push(element.rgb)
// // }

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);
// ================================================
// 18/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     let prodPrice = null;
    
//     for (const product of products) {
//     if (product.name === productName) {
//         prodPrice = product.price;
//     }
        
// }

// return prodPrice;
//   // Change code above this line
// }
// console.log(getProductPrice("Radar"));//1300
// console.log(getProductPrice("Engine"));//null
// console.log(getProductPrice("Droid"));//400
// ===============================================
// 19/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     let AllPropValues = [];
//     for (const product of products) {
//         if (product.hasOwnProperty(propName)) {
//             AllPropValues.push(product[propName]);
//         }
        
//     }

//     return AllPropValues;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));//["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));// повертає [4, 3, 7, 9]
// console.log(getAllPropValues("category"));// []
// =====================================================
// 20/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let TotalPrice = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             TotalPrice = product.price * product.quantity;
//         }
        
//     }

//     return TotalPrice;
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"));//5200
// console.log(calculateTotalPrice("Blaster"));//0
// =============================================================
//30/41
// function makeTask(data) {

//   // const {text,category ="General",priority = "Normal"}=data;
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     const task = { completed, category, priority, ...data }
//     return task;
//   // Change code above this line
// }
// console.log(makeTask({}));//{ category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash"}));
// //повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// ===================================================
// 33/41
// Change code below this line
// function findMatches(arreys,...restArrerys) {
//     const matches = []; // Don't change this line
//     for (const restArrery of restArrerys) {
//         if (arreys.includes(restArrery)) {
//             matches.push(restArrery);
//         }
        
//     }

//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));//повертає [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));//[17, 89, 2]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));//[]
// ==========================================================
// 35/41
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const indexOfBook = this.books.indexOf(oldName);
//     //   console.log(indexOfBook);
//       this.books.splice(indexOfBook, 1, newName);
//       return this.books;

//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// //значення властивості books - це масив
// //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// ==================================================================
//39/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//       if (this.potions.includes(potionName)) {
//           const indexPotion= this.potions.indexOf(potionName);
//           this.potions.splice(indexPotion,1)
         
//       }


//     return this.potions
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));//["Speed potion", Stone skin"]
// console.log(atTheOldToad.removePotion("Speed potion"));//["Stone skin"]
// ================================================================
// 40/41
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//       const indexOldName = this.potions.indexOf(oldName);
//       this.potions.splice(indexOldName, 1, newName)
//       return this.potions;


//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// //["Speed potion", "Polymorth", "Stone skin"]
// ===========================================================
// 41/41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(newPotion) {
//         const { name } = atTheOldToad;
//         const { name: newName } = newPotion;

//         for (const potion of this.potions) {
//             if (potion.name === newName) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
                
//         }
//         this.potions.push(newPotion);
//   },
//     removePotion(potionName) {
        
//         for (let i = 0; i < this.potions.length; i++) {
//             // console.log(this.potions[i].name);
//             if (potionName === this.potions[i].name) {
//             this.potions.splice(i, 1);
//             }
            
//          }

//     // return `Potion ${potionName} is not in inventory!`;
    
//   },
//     updatePotionName(oldName, newName) {
      
//         for (const potion of this.potions) {
//             console.log(potion);
//             if (potion.name===oldName) {
//                 potion.name=newName
//             }
//         }
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// // console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// //в масиві potions останнім елементом буде цей об'єкт
// // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// // console.log(atTheOldToad.removePotion("Dragon breath"));
// //[ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// //у властивості `potions` буде масив
// //`[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
// console.log(atTheOldToad.potions);
// ================================================================================
function forecast(arr) {
  // Only change code below this line
  
  return arr.slice(2, 4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


