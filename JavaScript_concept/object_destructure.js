// object de-structuring- Object is a data structure used to store data in key-value pairs.

// Without de-structuring
// const jsuser = {
//     name : "Krishna",
//     age : 20,
//     city : "mumbai"
// }

// const name = jsuser.name;
// console.log(jsuser.name);// Krishna


// with de-structuring-  Destructuring is a JavaScript feature to extract values from objects into variables in a cleaner way.


// const jsuser2 = {
//     name : "Krishna",
//     age : 20,
//     city : "Delhi"
// }

// const {name, age } = jsuser2;
// console.log(name, age );// Krishna 20

// nested object de-structuring

const jsuser2 = {
    name : "Krishna",
    age : 20,
    address :{
        city : "thane",
        district : "mumbai"
    }
}

const {name, address : {city, district}}= jsuser2;
console.log(city, district);// thane mumbai


