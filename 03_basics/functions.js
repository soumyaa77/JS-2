//function_name -- Reference
//function_name()-- execution
//definition of function me parameters use hote h
//call of function me arguements use hote h
//if function call k time ko arguememt pass nhi krate h toh output me undefined aata h
//we can give default values in parameters taki undefined aye hi na output

//when we dont know ki kitte parameters pass krane h then ---
//we use rest operator  "..." (also known as spread operator)
//situations aur cases k hisab se spread operator bola jata h ya fr rest operator

function calculatePrice(...num1){
    return num1
}
console.log(calculatePrice(100,200,300)); //run krne pr array milega

//SCOPES
 //let a=10 
 //const b=20
 var c=300
 // {}--> scope

 if(true){
   let a=10
   const b=20
   var c=30 // or c=30
 } //if k andr sbkuch block scope hota h aur 
 // if k bahar =global scope
 //global scope ki value available hoti h block k andr but vice-versa is not true
 console.log(a); //a is undefined kyuki block k andr h
 console.log(b); //similarly for b
 console.log(c); // it will print, ye bahar aajata h


 //ARROW FUNCTIONS
 //this-current context ko refer krna h toh use hota h ye keyword
  const chai=()=>{
    let username="soumya"
    console.log(this) //undefined ouput ayega kyuki object k sath use hota h this keyword
    //here object is not defined
    //chahe function kaise bhi define ho , this keyword use nhi hoskta h 
  }

  const addtwo= (num1, num2)=> {
   return num1+num2
  }
  console.log(addtwo(2,7));

 // implicit return 
 const addthree=(num1, num2, num3)=> (num1+num2+num3);
 //{ } k andr return likhna pdhta h
 // () k andr return statement nhi likhna pdta 



