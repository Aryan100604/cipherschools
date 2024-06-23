// let person = {
//   firstname: "Narendra",
//   lastname: "Modi",

//   getfullname() {
//     return `The name of the person is ${person.firstname} ${person.lastname}`;
//   },

//   phoneNumber: {
//     mobile: "123456",
//     landline: "7890",
//   },
// };

// console.log(person.getfullname());
// console.log(person.phoneNumber.landline);

// function person(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }
// let person1 = new person("Rohit", "Sharma");
// let person2 = new person("Virat", "Kohli");
// console.log(person1.firstname);
// console.log(`${person2.firstname} ${person2.lastname}`);

// const coder = {
//   isStudying: false,
//   printintro: function () {
//     console.log(
//       `The name of the codee is ${this.name} and Am I studying? ${this.isStudying}`
//     );
//   },
// };

// const me = Object.create(coder);
// me.name = "Barun Sharma";
// me.isStudying = true;
// me.printintro();

// class Vehicle {
//   constructor(name, maker, engine) {
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
//   }

//   getDetails() {
//     console.log(`The name of the vehicle is ${this.name}`);
//   }
// }

// let v1 = new Vehicle("Mustang", "Ford", "4000cc");
// let v2 = new Vehicle("Thar", "Mahindra", "2500cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());

// function Vehicle(name, maker, engine) {
//   this.name = name;
//   this.maker = maker;
//   this.engine - engine;
// }

// Vehicle.prototype.getdetails = function () {
//   return `The name of the vehicle is ${this.name}`;
// };

// let v1 = new Vehicle("Mustang", "Ford", "4000cc");
// let v2 = new Vehicle("Thar", "Mahindra", "2500cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getdetails());

// class Person {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }

//   addAddress(newAddress) {
//     this.address = newAddress;
//   }

//   getDetails() {
//     console.log(
//       `The Name is: ${this.name} and the address is: ${this.address}`
//     );
//   }
// }

// let person1 = new Person("Shantanu", 15);
// person1.addAddress("Kolkata");
// person1.getDetails();

// class Person {
//   constructor(firstname, secondname) {
//     this.firstname = firstname;
//     this.secondname = secondname;

//     let getdeatails_NoAccess = function () {
//       return `The firstname is ${this.firstname} The second name is ${this.secondname}`;
//     };

//     this.getdeatils_Access = function () {
//       return `The firstname is ${this.firstname} The second name is ${this.secondname}`;
//     };
//   }
// }

// let person = new Person("Shantanu", "Shubham");
// console.log(person.firstname);
// console.log(person.getdeatails_NoAccess());
// console.log(person.getdeatils_Access());

class Person {
  constructor(firstname, secondname) {
    this.firstname = firstname;
    this.secondname = secondname;
  }

  getdetails() {
    return `The firstname is ${this.firstname} The second name is ${this.secondname}`;
  }
}

class Student extends Person {
  constructor(firstname, secondname, rollnumber) {
    super(firstname, secondname);
    this.rollnumber = rollnumber;
  }

  getdetails() {
    return `The firstname is ${this.firstname} The second name is ${this.secondname} and the roll number is ${this.rollnumber}`;
  }
}

let student1 = new Student("Anurag", "Mishra", 45);
console.log(student1.getdetails());
