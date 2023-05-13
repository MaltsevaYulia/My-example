// function filteredArray(arr, elem) {
    
//     let newArr = [];
//     // Only change code below this line
    
//     for (let i=0; i<arr.length; i++){
//         // console.log(arr[i]);
//       if(arr[i].includes(elem)){
        
//         // newArr.splice(i,1)
//         continue
//       }
//       newArr.push(arr[i])
//     }
  
//     // Only change code above this line
//     return newArr;
//   }
  
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//   console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18))
//   // should return [[10, 8, 3], [14, 6, 23]]
//   console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2))
//   // should return [["flutes", 4]]);

// ==================================================
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  console.log("🚀 ~ tabsBeforeIndex:", tabsBeforeIndex)
  const tabsAfterIndex = this.tabs.splice(index-1); // Get the tabs after the tab
  console.log("🚀 ~ tabsAfterIndex:", tabsAfterIndex)

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  // console.log("🚀 ~ this.tabs:", this.tabs)

  // Only change code above this line
// console.log(this);
  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
//['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab',
//'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs',
//'freeCodeCamp', 'new tab']

const a = [1, 2, 3, 4]
const c=a.splice(2,1);
console.log(c);

