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
let result;
function checkForSpam(message) {
  
  // Change code below this line
  
if(message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
  result=true;
} else {
  result=false;
}
  // Change code above this line
  return result;

}
checkForSpam("Amazing SalE, only tonight!");
console.log(result)
