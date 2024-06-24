let myDate = new Date()
console.log(myDate.toString());
console.log(typeof myDate);

//creating arbitrary date
let arbitrary=new Date(2024, 0, 23) //months start with 0 in JS
//we can give more arguements above
console.log(arbitrary.toDateString());
let myTimestamp=Date.now()
console.log(myTimestamp); //we are getting milliseconds



