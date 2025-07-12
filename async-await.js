// async is function or keyword 
//await - keyword or opertor. for async

const { error } = require("console");

//async function(){
//step 1 - sync no need of await
//step 2 - async idre await use madbeku 
//}

//normal function idre await use madbardu !!!!

// async function wil always return promises



// async function without await - return resolved promise

async function f1(){

    return 50;
}
f1()
.then((x) => {
    console.log("returning the number", x)
})
///
const f2 = async ()=>{
    throw new Error("some erro");
}

f2()
.catch((y) => {
    console.log ("error is", y)
})


//// 
function getinfo() {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const value = Math.random();
            if (value > 0.5){
                resolve(value);
            }
            else {
                reject(new Error("Number is less than 5"))
            }
        }, 5000)
    })
}

async function getvalue(){
try {
 const answer=  await getinfo();
console.log("The answer is ", answer);
}
catch(answer){
    console.log("error because",answer);
}
}
getvalue();