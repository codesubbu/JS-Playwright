// 3states : pending, fulfiled and rejected.
// fulfiles using .then() method
// error handling is .catch() method




const promise1 = new Promise((resolve,reject) => {

    setTimeout(() => {
        const randomval = Math.random();
        if(randomval > 0.5){
            
            resolve(randomval);
            
        }
        else{
            reject(new Error("Not greater than 0.5"));
            console.log(randomval);
        }

    }, 2000)
});
promise1 
    .then((result) => {
        console.log("the promise is fulfiled with value", result);
    })
    .catch((err) => {
        console.log('promise is rejected', err);
    });