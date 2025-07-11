
//Call back funct - passing as an argument to other function, pass maduthe bere function na call nmadakke use madbeku

function greet(messege, callback) {
    console.log(messege);
    callback();
}
// Callback function
function sayHello() {
    console.log("Hello, this is a callback function!");
}   
greet("Welcome", sayHello);

// //
// function getInfo(name, callback){
//     //async
//     setTimeout(() =>{

//         console.log(name);
//         callback("The great");
//     }, 10000);

// }

// function display(msg){
//     console.log(msg);
// }

// getInfo("Subbu",display);

// //
function getUserId(userid,callback){

    setTimeout(() => {
        console.log ("user id is ", userid);
        callback();
    }, 2000)

}
function confirmation(){

    console.log("I got the user id");
}
getUserId("CXSFS",confirmation);