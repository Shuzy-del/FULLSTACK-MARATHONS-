// GET get data
//POST create new data
//PUT update the data 
//DELETE remove data

// fetch(url,methods)
// connect the output element
const output = document.getElementById("output");

async function getstudent() {
    output.textContent = "loading.....";

    try{
        const newStudent  = {
            name:"PannerNode",
            email:"penner@gmail.com",
            phone:367847
        }
        const response = await fetch ("https://jsonplaceholder.typicode.com/users/4", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newStudent)
        });
        if(!response.ok){
            throw new Error("student not found");

        }
        const student = await response.json()
        output.textContent ="created student with ID" + student
        .Id;

    } catch(error) {
        output.textContent ="Error" + error.massage
    }
}