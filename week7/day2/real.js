//fatch()- function used to make http request to fetch resources JSON styled data image,files


// fetch(url, {option}) // GET,POST DELETE
    //- fetch() return a promise meaning its asynchronous
    // that means that we must handle it with.then () and .await()

//intagram
// browser sends a request ->server sends the data back
// fetchh() is how we ask for that data in js


// const data = fetch (url);
// console.log (data)


fetch(`https://jsonplaceholder.typicode.com/users/3`)
.then(res=>{
    console.log("Response object:", res); //res is a response object & it contain status code, headers & data still sealed

    if(!res.ok){ // checks if the server responded with a success status
        throw new Error("student not found"); // if status is 404, 500.... we manually create an error
    };
    return res.json(); // converts the JSON text into a js object

})
.then(student =>{
    console.log("full student object:", student);
    // console.log(`name:{"student}`);
})

.catch(err =>{
    console.error("error", err.massage);
});

// //fetch() > response object(res) > check res.ok > json > actual js object (student)

// async function intagram() {
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/2`); // pouse here untill the server responds
//         if(!response.ok){ // fetch() does not throw error for 404 or 500 so manually check
//             throw new ErrorEvent("post not found")

//         }
//         const post = await response.json() // server responded but the body still locked
//         console.log ("full post", post)

//     } catch(error){
//         console.error("ERROR", error,massage)
//     }
    
// }

// intagram();