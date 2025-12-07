class StudentClass {

  constructor(firstName, location){
    this.firstName = firstName;
    this.location = location;
    this.region = "Oceania";
  }

  hasShortName(){
    return this.firstName.length <= 3 ? true: false;
  }

  printFirstName() {
    console.log(this.firstName);
  }

}


let student1 = new StudentClass("John", "Ruthford");
let student2 = new StudentClass("Hillary", "Washington");

console.log(student1.printFirstName)