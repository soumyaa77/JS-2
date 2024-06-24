//there are 2 ways to create objects-- literal and constructor
//singleton--  constructor k through bnate h object toh singleton bnta h--single object
//literal k through bnate h toh singleton nhi bnta h

//object declaration
Object.create //constructor method k thru
const mySym=Symbol("key1");
const JsUser={
 //literal method
 //key:values
  name: "SOUMYA",
  "full name" : "soumya saxena",
  age: 18,
  mySym: "myKey", // agr print krwayenge toh string k jese ayega, symbol k jese nhi 
  //therefore we shall write mySym as [mySym].
  email :"soumya@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}
//To print values :
console.log(JsUser.email);
console.log(JsUser["email"]); //square bracket me string jese treat krna pdta h 
console.log(JsUser["full name"]); //isme . method se print nhi kr skte bcz do words h
console.log(JsUser[mySym]);

//methods :
//freeze- makes values constant

JsUser.greeting=function(){
    console.log(`Hello JS user , ${this.name}`);
} //jb bhi same object ko refernce krna hota h toh we use this
console.log(JsUser.greeting); //function (anonymous)
console.log(JsUser.greeting()); 

//object created by constructor
//const tinderUser=new Object() //singleton object
const tinderUser={} // non-singleton object // they both are empty objects without much difference
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname: { //object k andr object define kr skte h, there can be multiple objects
        userfullname:{
            firstname: "sammy",
            lastname: "saxena",
        }
    }
}
//method "assign" -- merge 2 objects and returns a new object
// we can use spread operator also

//destructuring objects and arrays 
const course ={
    name: "js in hindi",
    courseTeacher:"hitesh",
    price: "999"
}
//course.courseTeacher

const {courseTeacher : Teacher}=course //we are changing the key name
console.log(Teacher); //value will be same no matter what name used

