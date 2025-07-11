function geteven(value,delay){

   return new Promise((resolve,reject) => {

        setTimeout(() =>{
            if(value % 2=== 0){
                resolve(value);
            }
            else {
                reject(new Error("Not divisible by 2"));
            }
                
        }, delay);
    })
}
geteven(9,2000)
.then((ans) => {
    console.log("It is a even number", ans);
    return geteven(10, 3000);
})

.then((ans)=> {
    console.log("step 2 it is an even number", ans);
    return geteven(12, 3000);
})
.then((ans)=> {
    console.log("step 3 it is an even number", ans);
    return geteven(11, 3000);
})

.catch((err) => {
    console.log("iTS AN ODD", err);
    
})
