//PROMISE CREATION
const promiseOne=new Promise(function(resolve, reject){
    //do an async task
    //db calls, cryptogaphy, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
});
//now we have to consume the promise
promiseOne.then(function(){
    console.log("promise consumed")
}) //then ka seedha connection h resolve k sath

//the above code can also be written as:
new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
        console.log("async 2 resolved")
})

//data passing 
const promise3=new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: 'chai', email:'chai@example.com'})
    },1000)
})

promise3.then(function(user){
console.log(user);
})

const promise4=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: 'chai', email:'chai@example.com'})
        } else {
            reject('error: something went wrong')
        }
        
    },1000)
})

//chaining of then
promise4.then(function(user){
     console.log(user);
     return user.username // ye value kahan return hogi?
     //for this we will have to use chaining taki dusre
     // then me vo return ho vrna agr bahar conslog krege to
     //error ayega 
    }).then(function(username){
        console.log(username);
    }).catch(function(error){ //catch hum reject k liye use krhe h
        console.log('error')
    }).finally(function(){
        console.log("the promise is either resolved or rejected")
    })

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: 'javascript', email:'chai@example.com'})
        } else {
            reject('error: js went wrong')
        }
        
    },1000)
})
//we can handle promises by using then,catch,finally
//we can also do this by using async await syntax
//ye thoda wait krta h kam k hone ka, agr vo hojata h tbhi
// aage bdhta h vrna vhi error dedeta h
//isme hum gracefully catch handle nhi krte h
async function consumePromise5(){
    try{
       const response=await promise5
       console.log(response)
    } catch(error){
        console.log(error)
    }
}
consumePromise5(); 