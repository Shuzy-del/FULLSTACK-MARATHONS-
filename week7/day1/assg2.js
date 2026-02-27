// ASSIGMNET 2: Order Delivery Status Checker

// You are building a small e-commerce system.

// Task

// Create a function called checkDeliveryStatus(orderId) that:

// Returns a Promise.

// Uses setTimeout to simulate a 2-second delay.

// Inside the setTimeout:

// If orderId is a number greater than 0:

// Generate a random number using Math.random().

// If the random number is greater than 0.5
// → resolve with:

// {
//   status: "Delivered",
//   orderId: orderId
// }

// Otherwise
// → reject with:

// {
//   status: "Delayed",
//   orderId: orderId
// }

// If orderId is invalid (not a positive number)
// → immediately reject with:

// {
//   error: "Invalid Order ID"
// }
// Requirements

// Call the function with:

// A valid order ID

// An invalid order ID

// Use .then() to log success.

// Use .catch() to handle errors.

// Use .finally() to log:
// "Order check completed:

function checkDeliveryStatus(orderId){
   return new Promise(function(resolve,reject){
      if (typeof orderId!== "number" || orderId <= 0){
         reject({
            error: "Invalid Order ID"
         });
         return;
      }

      setTimeout(function(){
         if (Math.random() > 0.5){
            resolve({
               status: "Delivered",
               orderId: orderId
            });
         } else {
            reject({
               status: "Delayed",
               orderId: orderId
            });
         }
      }, 2000);
   });
}
 checkDeliveryStatus(101)
 .then(function(massage){
  console.log(massage)
 })
 .catch(function(error){
  console.log(error)
 })
.finally(function(){
  console.log("Order check completed")
})