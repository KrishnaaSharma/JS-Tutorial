// Array


const myArr = [0,1,2,3,4,5];
const myArr2 = new Array(1,2,3,4,5);

// console.log(myArr[1]); // 1
// console.log(myArr2);

// myArr.push(6);  // //[0, 1, 2, 3, 4, 5, 6] - Add element at last
// myArr.pop(6);  // [0, 1, 2, 3, 4, 5] - remove element from last
// myArr.unshift(8); // [8, 0, 1, 2, 3, 4, 5] - add element at first
// myArr.shift(8); //  [0, 1, 2, 3, 4, 5] - remove element from first
console.log(myArr); 

// const newArr = myArr.join(); //0,1,2,3,4,5-  conver array to string
// console.log(newArr);
// console.log(typeof newArr);

// Slice
console.log("A". myArr);

// const my1 = myArr.slice(1,4); // 
// console.log(my1);// [1,2,3] it will not change the original array
// console.log(myArr);

//  Splice
// console.log("B", myArr);
// const my2 = myArr.splice(1,4); // 
// console.log(my2);//  [1, 2, 3, 4] it will change original array
// console.log(myArr); // [0,5]

// Remove elements using Splice

// myArr.splice(1,2);// it will remove 2 element from index 1
// console.log(myArr); // [0, 3, 4, 5]


// Add elements useing splice
// myArr.splice(1, 1, 99);//it will remove 1 element from index 1 and add 99 at index 1
// console.log(myArr);// [0, 99, 2, 3, 4, 5]


myArr.splice(1, 0, 99);// it will remove 0 element from index 1 and add 99 at index 1
console.log(myArr); //  [0, 99, 1, 2, 3, 4, 5]

// Replece elements useing splice 

myArr.splice(1, 0, 88); // it will remove 1 element from index 1 and add 88 at index 1
console.log(myArr);// [0, 88, 1, 2, 3, 4, 5]


