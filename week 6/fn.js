// THURSADAY 19/2/2026

// const person = {
//     name: "Aisha",
//     age: 20,
//     role: enginner
// };

// const person1 ={
//     name: "fatuma"
//     age: 30
//     role: manager


// }

// const person3 ={
// //     name: "fahma"
// //     age: 33
// //     role: developer


//};
 //A constructer funtion is a blueprint that helps us create mant object with the same structure but different value without 
// repeating 

// function person (name , age , role){
//     this.name = name        // "this means the object is currently using this code"    this.name....person .name
//     this . age = age 
//     this . role = role

// this.introduce = function(){
//     return "Hey, I am " + this.name + this.age
// }

// }
// const personl = new person ("Aisha",23, "developer")


// console.log(personl.introduce());
// // console.log(personl);


// const person1= new person("Aisha","23", "enginner");  // create an empty object{}, set This to the object, and set the propertise
// // return the object
// const person2= new person("abdi","30", "developer" );
// const person3= new person("yussuf", "20","teacher");
// const person4= new person("fatuma", "34", "secretary");

// console.log(person3);





//prototype---- an object that objects can inherite from -------- is where shared methods live
// It allows objects created from that function to share methods.

// function person (name,role){
//     this.name = name;
//     this.role = role;

// person.prototype.greet = function(){
//     return "Hi Iam " + this .name;
// };
// }

// const p1 = new person("Fatuma", 20);
// console.log(p1.greet()); //does p1 have greet? NO // check person prototype //



// create a constructor function called Student that accepts name, age and course, creates an object with those parameters. Then create two student objects, log them to the console.
//keep


//create a constructor called product that: Accepts name, price and quantity, create 2 products and logs them.


function product (name,price , quality){
    this.name =name;
    this.price =price;
 this.quality = quality;

}

const product1 =new product("Laptop", "price" ,5000, "excellent");
const product2 = new product("Phone","price", "20000" , "good");

console.log(product1.name,)
console.log(product1.price)
    
console.log(product2.name);



