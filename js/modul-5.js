// 1/20
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// console.log(pizzaPalace.order("Smoked"));//"Order accepted, preparing «Smoked» pizza"
// ==================================================
//10/20
// class Storage{
//   constructor (items ){
//     this.items=items;
//   }
//   getItems(){
//     return this.items
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove){
//     if (this.items.includes(itemToRemove)) {
      
//      return this.items.splice(this.items.indexOf(itemToRemove),1)
//     }
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// =======================================================================

// class StringBuilder{
//   constructor(initialValue){
//     this.value = initialValue;
//   }
//   getValue(){
//     return this.value;
//   }
//   padEnd(str) {
  
//      this.value=this.value + str;
    
//   }
//   padStart(str){
//      this.value=str+this.value;
//   }
//   padBoth(str) {
//      this.value=str+this.value+str;
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// // console.log(builder);
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// console.log(builder);
// ===============================================================
// 16/20
// class Car {
//   // Change code below this line
//   #price;
//   static MAX_PRICE=50000 ;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     // console.log(Car.MAX_PRICE);
//     if (newPrice < Car.MAX_PRICE){
//       this.#price = newPrice;
//     }
    
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// =====================================================
// 20/20
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails=[]
//   }
  
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
    
//    return this.blacklistedEmails.includes(email)
//   }

  // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
// ============================================
// const sum = (...args) => {
  
//   return args.reduce((a, b) => a + b, 0);
// }
// console.log(sum(0,1,2));
// =======================================



