class person{
  constructor (name, age){
  this.name =name
  this.age = age
}
greet(){
  return `Hi I am ${this.nane}`;

}

}

class student extends person{
  constructor(name,age, admissionNumber,stream){
    super(name,age);
    this.admissionNumber = admissionNumber;
    this.stream = stream;

  }
  study(){
    return  `${this.name} from ${this.stream} stream is study`

  }
}
const s3 = new student("shas", 20, "admool","yellow");

console.log(s3.study());
// console.log(s3.greet());
