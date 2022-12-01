// let obj1 = {};
// let obj2 = {};
// console.log(obj1.__proto__ === obj2.__proto__); 

// let str = "Kyky";
// let int =  15;
// console.log(str.__proto__ === int.__proto__);

// function f1() {}
// class c1 {}
// console.log(f1.__proto__ === c1.__proto__);

///////////////////////////////////////////////////////

// let obj = {}
// console.log(obj.__proto__ === Object.prototype)

// class Person {}
// console.log(Person.__proto__ === Function.prototype)

// let vasya = new Person();
// console.log(vasya.__proto__ === Person.prototype)

///////////////////////////////////////////////////////

// let worker = { name: "vasya" }
// console.log(worker.prototype);

//////////////////////////////////////////////////////////

// let Person = (name) => {return name}
// console.log(Person.prototype); //false, протоипа нету у стрелочных фкункция
// console.log(Person.__proto__); // есть ли прото и чем он равен? (Есть и прото равно function.prototype)
