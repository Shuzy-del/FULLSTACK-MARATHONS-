for(let num =1;num<10;num++){
console.log(num);
}
// This script logs numbers from 1 to 9 to the console.


// write a for loop that print numbers from 0 to 20
for(let i=0;i<=20;i++){
  console.log(i);
}
//write a javascript that print even numbers from 0 to 100

for (let num = 1; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  }
}
 // array -data structure
 names=["Alice", "Bob", "Charlie"];
 numbers=[1,2,3,4,5,6,7,8,9,10];
 mix_arr= [1,"Home",true,5,"kenya",null];
// console.log(names[3]);// accessing array element

 for(let num=0;num<names.length;num++){
  console.log(names[num]);
 }


 console.log(names);
 names.push("David");//add element at the end
 names.pop();//remove element from the end
 names.shift();//remove element from the start
 names.unshift("Eve");//add element at the start
 console.log(names);


 // write a javascript program that returns a maximum age in an array bellow
 let ages = [34, 78, 12, 56, 89.98];
let max_ages = ages[0];

for (let num = 0; num < ages.length; num++) {
  if (ages[num] > max_ages) {
    max_ages = ages[num];
  }
}
console.log("Maximum age is:", max_ages);



//object
 randomlist={
  name:"Nafisa",
  occupation:"developer",
  nationality:"Kenyan",
  age:23,

  hobbies:{
    sports:"football",
    music:"guitar",
    travel:"beach"
  }


 }



 // functions
  function addition(number1,number2){
    let result= number1 + number2;
    console.log(result);
  }
  let number =Number(prompt("Enter first number:"));
  let number2 =Number(prompt("Enter second number:"));
  addition(number,number2);
  
  //  write a function that checks whether a number is divisible by 7 or not

  function checkDivisibility(num){
    if(num % 7 ===0){
      console.log(`${num} is divisible by 7`);
    } else{
      console.log(`${num} is not divisible by 7`);
    }   
  }

  let number3 =Number(prompt("Enter a number to check divisibility by 7:"));
  checkDivisibility(number3);
  // return 

  // write afunction that takes in list of students
  // and returns the maximum score
  
  function getMaxScore(students){
    let max_score = students[0].score;
    for(let i=0;i<students.length;i++){
      if(students[i].score >max_score){
        max_score = students[i].score;
      }
    }
    return max_score;
  }
  const scores =[80, 95, 67, 88, 92];
  console.log("Maximum score is:", getMaxScore(scores));
  

// arrow function

const sum = (num1, num2) => {
  return num1 + num2;
};
console.log("sum is:", sum(5, 10));

  //convert function to arrow function
