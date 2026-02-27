// person has name .age and greet()
  // student - administration,stream

  //inheritance - a machanism where one object (child aquires properties and methods)
  // from another (parent) through the PROTOTYPE CHAIN


// function person(name,age){
//   this.name = name;
//   this.age = age;
// }
// person.prototype.greet = function (){
//   return "Hi Iam " + this.name;
// };
// const p1=  newperson("fatuma", 20);


//  function person(name,age){
//   this.name = name;
//    this.age = age;
//    }
//    person.prototype.greet = function(){
//     return `Hi, I am ${this.name}  and I am ${this.name}.`

//    };
//    function student(name,age,admissionNumber, stream){
//     person.call(this, name, age);
//     this.admissionNumber = admissionNumber;
//     this.stream = stream;
//    }

//    student. prototype=Object.create(person.prototype)
//    student.prototype.constructor=student;

//    student.prototype.study = function(){
//     return`${this.name} from ${this.stream} study is stream .`

//    }
//    const s2=new student(`Noami`, 23, `admoll`,`blue`);
    
//    console.log(s2.study());
//   //  console.log(s2.age());




   //example practices
function animal (name){
  this.name=name;

}
animal.prototype.speak=function(){
  return`${this.name} makes loud a sound.`
}
function Dog(name, bread){
  animal.call(this, name) 
  this.bread=bread;
}
Dog.prototype=Object.create(animal.prototype)
Dog.prototype.constructor=Dog

const p1=new Dog (`nafisa`, `loud`)

console.log(p1. speak());
