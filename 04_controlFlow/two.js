//loops
//iterations

//for 
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element==5){
//         console.log('5 is the best number');
//     }
//     console.log(element);
// }
//nested loops
for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        
    }
}

//break and continue keyword
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log("detected 5");
        break;
    }
    console.log("value of " + i);
    
} //control flow break krne k liye (usse bahar aane k liye) we use break keyword

//continue:- ek bar maaf krdo aur next iteration pr jump kro


//while loops 
let i=0;
while (i<10) {
    console.log("value of i is " +i);
    i=i+2;
}

//do while loop 
//ek bar execute hota hi h
let score=1;
 do {
    console.log("score is "+ score);
    score++;
 } while (score<=10);

//array specific loops

 //for of 

 const arr=[1,2,3,4,5]
 for (const num of arr) {
    console.log(num);
 }

 //maps //holds unique key value pairs and remember the order in which it was inserted 
 const map=new Map()
 map.set('IN', "INDIA");
 map.set('USA', "AMERICA");
 map.set('EUR', "EUROPE");

 for (const [key,value] of map) {
    console.log(key, ":-", value);
 }

//normal ojects are not iterable in for of loop
//this can be done in for in loop
//for in loop
for (const key in object) {
     //key ko console log me access krskte h
     //for accessing values we can write "Object[key]"
     console.log(`${key} and its value is ${object[key]}`)
} //isme direct keys aati h, arrays me bhi index return hoga as a key
//here map is not iterable

//for each loop
const coding=["js", "ruby", "java", "cpp"]
coding.forEach(function (val){
    console.log(val);
}) //callback function is being used and these functions doesnt have a name

// array consits of multiple objects 
//example arr=[{}, {}, {}]
// so we can iterate these type of array via for each loop
// arr.forEach( (item)=> {
// console.log(item.property_name aka key)}) --> we will get respective values for those indexes

//for each loop doesnt return values
//but filter returns values
const myNum=[1,2,3,4,5,6]
const newNum = myNum.filter((num)=>num>4) //here also we use call back function //here we have to provide condition , jo satisfy kregi vhi return hogi
//log(newNum);

//map function bhi call back function h, ye automatically return krta h value
//no need for function

//chaining = ek hi sentence me multiple times function lgana 
// const newNum=myNum
                 .map(()=>{})
                 .map(()=>{})
                 .filter(()=>{}) //true aur false check hota h yahan 

//reduce function
const nums=[1,2,3]
const myTotal=nums.reduce(function(acc, curval){
    console.log(`acc: ${acc} and currval : ${curval}`)
    return acc+curval
}, 0) //0 initital value h accumulator ki, uske baad increment hoti jati h 
//used to add values 
// acc + current val =sum of values 
// 0   +1=1
// 1   +2=3
// 3   +3=6
console.log(myTotal)


