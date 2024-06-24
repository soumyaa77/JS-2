const myArr=[0,1,2,3,4,5]
//0 based indexing
//copy operation= array make shallow copies
//shallow copy= jo bhi me change krung vo original array me bhi change hoga -- reference 
//deep copy=properties do not share the same reference
const heroes=["",""]
const myArr2= new Array(1,2,3,4)
//METHODS 
//push- adds value to array
//pop-last value remove hojati
//slice-returns a section of array
//splice - 

console.log("A ", myArr);
const myn1=myArr.slice(1,3) //3rd index include nhi horha h---- ye original array ko manipulate nhi krta
console.log(myn1);
console.log("B ", myArr);
const myn2=myArr.splice(1,3) //3rd index include horha h---- ye original array ko manipulate krta h 
console.log("C ", myArr);
console.log(myn2);
 //spread= merge two arrays [...arr1, ...arr2]\
 //from- converts string into array of characters
 //of- makes array of set of individual defined items
 




