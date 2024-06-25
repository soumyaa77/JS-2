if(2=='2'){
    console.log("executed");
} //true
//type checking - ===
//< > >= <= != === !==
//  if(){

//  } else {
//   }
//nesting in if block (else if) (else) or direct if
// && and - or  || // there can be multiple checks for them

//switch case 

const month=3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("default case");
        break;
}

//TRUTHY VALUES AND FALSY VALUES
//falsy values {
//false, 0,-0, BigInt 0n, "", null, undefined, Nan}
//inke alaawa sb truthy values hoti h 
//{[], "0", "false", " ", {}, function(){}-- empthy function }

//NULLISH COALESCING OPERATOR (??) : NULL UNDEFINED
//let val1=5 ?? 10
console.log(val1); // 5
val1= null ?? 10 
val2=undefined ?? 15 
console.log(val1); //10,  val2=15
// val=null ?? 10?? 20 //output will be 10 (the first value gets assigned)

//Terniary Operator
condition ? true :false
//const price=100;
price <=80 ? console.log("less") : console.log("more")


