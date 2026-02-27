//synchronous (blocking)
// do this -> then do this -> then do this

//asynchronous (non-blocking)
//start this -> continue working ->cone back later

// call back promise async await event loop

// setTimeout
// function orderFood(){
//     console.log("order food")

//     setTimeout(function(){
//         console.log("food is ready")
//     }, 2000)
// }
// orderFood()
// console.log("watching a movie while waiting for the food to be ready")


//callback
//a function that is passed as an argument to another function and is executed after some operation has been completed

// function orderPizza(callback){
//     console.log("ordering pizza");

//     setTimeout (function(){
//         console.log ("orderer received the pizza")
//         callback()//this is the callback function that will be executed after the pizza is ready
//     }, 4000);

// }
// function FoodReady(){
//     console.log ("working on order")

// }
// orderPizza(FoodReady)


//promise
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// a promise represent s: panding, resolved(success), rejected(error)
//.then() what to do on success
//.catch() what to do on error

// function orderPizza(){
//     return new Promise (function(resolve, reject){
//         console.log ("ordering pizza");

//         setTimeout(function(){
//             resolve("order delivered"); // this is the callback function that will be executed after the pizza delivered//masssage
//     },1200);
        
//     });
// }
// orderPizza()
// .then(function(massage){
//     console.log(massage)
// })
// .catch(function(error){
//     console.log(error)
// });


// add failure
 
// function orderPizza(){
//     return new Promise(function(resolve, reject){
//         console.log("ordering pizza");

//         let PizzaAvailable = false; // change this to true to test the success case

//         setTimeout(function(){
//             if (PizzaAvailable){
//                 resolve("pizza delivered");
//             }else{
//                 reject("NO pizza available")
//             }
//         },3000);
//     });

// }
// orderPizza()
// .then(function(massage){             // resolve goes to .then()
//     console.log("success", massage)
// })
// .catch(function(error){             // reject goes to .catch()
//     console.log("error", error)
// });


// function checkExam(score){
//     return new Promise(function(resolve, reject){
//         console.log("checkiing exam results");

//         setTimeout(function(){
//             if(score >=50){
//                 resolve("congratulations, you passed the exam")

//             }else{
//                 reject("sorry, you failed the exam")
//             }
//         },1000);
//     })

// }
// checkExam(80)
// .then(function(massage){
//     console.log( massage)
// })
// .catch(function(error){
//     console.log( error)
// })




//question
//Create a function called processPayment(amount) that:

// Returns a Promise.

// Uses setTimeout to simulate a 2-second delay.

// If amount is greater than 0:

// resolve the promise with the message:
// "Payment of KES {amount} successful"

// If amount is less than or equal to 0:

// reject the promise with the message:
// "Invalid payment amount"

// After creating the function:

// Call it once with a valid amount.

// Call it once with an invalid amount.

// Use .then() and .catch() to handle both cases.

// function processPayment(amount){
//     return new Promise(function(resolve, reject){
//         console.log("processing payment");

//         setTimeout(function(){
//             if(amount > 0){
//                 resolve(`Payment of KES ${amount} successful`);
//             }else{
//                 reject("Invalid payment amount");
//             }
//         }, 2000);
//     });
// }
// processPayment(0)
//     .then(function(message){
//         console.log(message);
//     })
//     .catch(function(error){
//         console.log(error);
//     });
    


//async or wait - makes promise look like normal code it removes .then()chaining making it easier to read
// when we add a sync b4 a function it automatically returns a promise

// function getData(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("data received");
//         },2000);
//     })
// }
// getData().then(function(massage){
//     console.log(massage);
// })

// async function greet(){
//   return "hello students";

// }
// greet().then(function(massage){
//     console.log(massage)
// })


// // await passes inside an async function until the promise finishes

// function getData(){
//     return new Promise(function(resolve){
//       setTimeout(function(){
//         resolve("data loaded")

//       }, 3000);
//     });
// }
    
// async function showData() {
//     console.log ("loading");

//     let result = await getData();
    
// }
// showData();





// Goal: Create a sequence of asynchronous steps using callbacks.

// Create three variables: step1, step2, step3.
// Each should take a callback and use a random delay.
// Chain them together.


// step1
// step2
// step3

// step 1 -> step 2 -> step 3 SUBQUENTIAL AYNC FLOW


// setTimeout(()=> {
//  console.log("step 1");

// }, Math.random() * 1000)

// setTimeout(()=> {
//  console.log("step 2");

// }, Math.random() * 1000)

// setTimeout(()=> {
//  console.log("step 3");

// }, Math.random() * 1000)

// function step1(callback){
//     console.log ("starting step one");

//     setTimeout(()=>{
//         console.log("finished step 1")
//         callback();

//     }, Math.random() * 1000)
// }

// function step2(callback){
//     console.log ("starting step two");

//     setTimeout(()=>{
//         console.log("finished step 2")
//          callback();
//     }, Math.random() * 1000)
// }

// function step3(callback){
//     console.log ("starting step three");

//     setTimeout(()=>{
//         console.log("finished step 3")
        
//     }, Math.random() * 1000)
// }
//  step1(function(){
//     step2(function(){
//         step3();
//     })

//  })





 //QUESTION

//  Implement the function:

// runStepsWithError(steps, done)
// Description

// steps is an array of functions.

// done is a callback that runs when execution finishes or fails.

// Each step receives:

// (next, fail)

// next() → move to the next step

// fail() → stop execution immediately

// Requirements

// Your function must:

// Execute steps in order.

// Only proceed when next() is called.

// Stop immediately if fail() is called.

// If fail() is called:

// Do NOT run remaining steps.

// Call done("Error occurred").

// If all steps succeed:

// Call done().



function runStepsWithError(steps, done) {
  let currentStep = 0;

  function runNextStep() {
    // If all steps finished successfully
    if (currentStep >= steps.length) {
      done(); 
      return;
    }

    // Get current step
    const step = steps[currentStep];

    // Move to next step
    function next() {
      currentStep++;
      runNextStep();
    }

    // Stop execution immediately
    function fail() {
      done("Error occurred");
    }

    // Execute the step
    step(next, fail);
  }

  // Start execution
  runNextStep();
}