// object de-structuring

// Without de-structuring
// const jsuser = {
//     name : "Krishna",
//     age : 20,
//     city : "mumbai"
// }

// const name = jsuser.name;
// console.log(jsuser.name);// Krishna


// with de-structuring

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
console.log(city, district);// thaene mumbai
