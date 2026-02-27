// defoult parameter
// function calculator(num1 = 0, num2 = 0, operation = "add") {
//   let result;

//   switch (operation) {
//     case "add":
//       result = num1 + num2;
//       break;

//     case "subtract":
//       result = num1 - num2;
//       break;

//     default:
//       result = "Invalid operation";
//   }

//   console.log(result);
// }

// calculator();
// calculator(10);
//  calculator(10, 5, "add");
//  calculator(4, "subtract");



//  function subcribe(plan=`free`){
//   let access;
//   if(plan==`free`){
//     access= `landing page only`;

//   }else if (plan ===`premium`){
//     access = `full website access`;

//   } else{
//     access =`Invalid plan`;
//   }
//   return `you have $(access) access`;
//  }
// console.log(subcribe);


// // callback function
// function greet(name,callback){
//   console.log("Hi" + name)
//   callback();
// }
// function sayBye(){
//   console.log("GOODBYE");
// }
// greet("Nafisa", sayBye);

// another example of callback
// function processPayment(amount, afterPayment){
//   console.log (`processing payment of $${amount})...`)
//   afterPayment();

// }
// function thankyouMsg(){
//   console.log("thank you for your payment!");

// }
// processPayment(100, thankyouMsg)

//TUESDAY CLASS DATE 17FEB 2026

//RESET PARAMETER
// function name(age,cohort="software dev",...parameter){

// }

// function sumALL(...nums){
//   // console.log(nums);
//   return nums.reduce((total,n)=>+n,0);

// }
// // console.lcog(sumALL(3,4,5,1.6));
// console.log(sumALL());


// spread operator
// const MeanOne =[20,40,30,15];
// const MeanTwo =[12,13,14,18];

// const Meancombo =[...MeanOne.slice(2), ...MeanTwo.slice(0,2)];
// console.log(Meancombo);



// const car ={
// brand: "Toyota",
// model: "camry",
// colour: "black",
// }
// const car_more ={
//   model: "corolla",
//   year: 2022,
//   colour:"blue",
// }
// const car_combo ={...car,year:car_more.year};

// console.log(car_combo);


// const nums =[40,80,70,30];
// // console.log(Math.max(...nums));

// const more =[...nums,90,12,200];
// console.log(more);


// const food ={
//   fruit:[apple,mango],
//   snacks:[chips],
//   juice:[pinapplejuice]
// }
// console.log(food)

// function findMax(defoult = 0, ...Numbers) {
//   // spread the rest parameter into Math.max
//   const Maxvalue = Math.max(defoult, ...Numbers);
//   return Maxvalue;
// }

// console.log(findMax(10, 5, 3, 20));

// console.log(findMax(undefined, 20));
// console.log(findMax());

//WEDNESDAY 18FEB
//  let city = "Nairobi"; //GLOBAL SCOPE

//  function apartment(){
//   let apartmentName ="nyayo"; //OUTER FUNCTION SCOPE
//   function bedroom(){
//    console.log
//   } return bedroom
  
//  }
//  const myBedroom = apartment();
//  console.log(myBedroom);




//  lexical SCOPE 

// let city ="Nairobi";

// function apartment(){
//   let apartmentName ="nyayo";

//   function bedroom(){
//     return `This my bedroom in ${apartmentName}, $(city)`;

//   }
//   return bedroom;
// }
// const myBedroom = apartment();

// console.log (myBedroom());


// let greeting = "hello from global variable";

// function outerFunction(){
//   let name = "Nafisa"

//   function innerFunction(){
//     return `${greeting}, my name is ${name}`;
//   }
//   return innerFunction;
// }
// const myInner = outerFunction();

// console.log(myInner());



// closure and lexical scope
// function creatDiscount(discount){

//   return function(price){
//     return price - (price * discount);

//   };
// }
// const tenPercentoff = creatDiscount(0.10)


// tenPercentoff(1000);

// console.log(tenPercentoff(1000));


//ANOTHER EXAMPLE
function creatBankAcc(owner){
  let balance = 1000;

  return function deposit(amount){
    balance += amount
    return balance
  }
}

const nafisaAcc = creatBankAcc("nafisa");

console.log(nafisaAcc(3000));