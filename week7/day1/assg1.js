// <!-- ASSIGMNET 1:User Login Simulation with Promises

// You are building a simple authentication system.

// Task

// Create a function called loginUser(username, password) that:

// Returns a Promise.

// Uses setTimeout to simulate a 3-second server delay.

// Inside the setTimeout:

// If username is "admin" and password is "1234"
// → resolve with an object:

// {
//   status: 200,
//   message: "Login successful",
//   user: username
// }

// Otherwise
// → reject with an object:

// {
//   status: 401,
//   message: "Invalid credentials"
// }
// Requirements

// Call the function with:

// Correct credentials

// Incorrect credentials

// Handle responses using:

// .then()

// .catch()

// .finally() (log "Login attempt finished")

// Expected Console Flow (Example)
// Attempting login...
// (wait 3 seconds)
// Login successful
// Login attempt finished




function loginUser(username, password){
  return new Promise(function(resolve, reject){

    setTimeout(function(){
      if (username=="admin"&& password  ==="123"){

      
        resolve({
         status: 200,
         message: "Login successful",
        user: username
      })
    } else{
      reject({
        status: 401,
       message: "Invalid credentials"
      })
    }

  }, 3000);
  });
}
loginUser()
.then (function(massage){
  console.log(massage);
})
.catch(function(error){
  console.log(error)

})
.finally (function(){
  console.log("Login attempt finished");
})
