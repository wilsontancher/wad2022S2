var calculator = require("./calculator.js");
var person = require("./person.js");
var courseController = require('./courseController.js');
console.log("Starting my first Node JS application");


console.log("Calculator's Description: "+calculator.description);
console.log("Perform add: "+calculator.add(2,3));
console.log("Perform multiply: "+calculator.multiply(2,3));
console.log("Perform subtract: "+calculator.subtract(2,3));
console.log("Perform divide: "+calculator.divide(2,3));

person.setName("Jason");
console.log(person.getName());
person.setAge(15);
console.log(person.getAge());

courseController.addCourse("Programming","EG1234");
courseController.addCourse("Math","EG1122");
courseController.addCourse("Electronics","EG3310");

console.log("Course:",courseController.getCourse(1));
//Use JSON.stringify to convert the object into a string
console.log(JSON.stringify(courseController.getCourse(1)));

console.log(courseController.getNumberOfCourses());

