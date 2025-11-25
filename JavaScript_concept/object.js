//  // singleton 

//  const Jsuser = {
//     name : "Krishna",
//     "full name" : " Sharma",
//     age : 24,
//     email : "krishna@gmail.com"
//  }

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])

// // const tinderuser = new object

// const tinderuser = {}

// tinderuser.id = "234"
// tinderuser.name = "tony"

// // console.log(tinderuser);// {id: '234', name: 'tony'}


// const reguaruser = {
//     email : "tony@google.com",
//     fullname : {
//         userfullname : {
//             fisrtname : "tony",
//             lastname : "stark"
//         }
//     }

// }
    
//  console.log(reguaruser.fullname.userfullname.fisrtname);
 
  
 // Object assign

//  const obj1 = {1 : "a", 2 : "b"}
//  const obj2 = {3 : "a", 4 : "b"}

// // const obj3 ={obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // {1: 'a', 2: 'b', 3: 'a', 4: 'b'}


const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

// Merge objects
const merged = { ...obj1, ...obj2 };

// Extract only values
const values = Object.values(merged);

console.log(values);