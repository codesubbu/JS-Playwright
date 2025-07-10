let a = "jsgfjkdfbsdfdsfsfsfsd";
let b = 'Subbu';
console.clear();
console.log("Together messege is " + a,b);


function add(a, b) {

let sum = a + b;
console.log("Sum is " + sum);
}
add(10, 20);


let person = {
    name: "Subbu",
    age: 30,
    city: "Chennai",
    hobbies: ["reading", "coding", "gaming"],
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
    
}
person.greet();

console.log("Person details: ", person.hobbies[1]);

var browser = "chrome";
var browser = "dfhkb";
browser = "subrow"
console.log(browser);

if(browser!=="subrofgw") {

    console.log ("good");

}
else{

    console.log("Not good");
}
let x = 10;
y = 20;

if (x< 5){

    console.log(x);
}

else {

    console.log(y);
}


//////
function drinking(age){


        if(age < 18){

            console.log("you cant drink");
        }
        else if(age==18){
            console.log("you can drink beer");
        }
        else {
            console.log("Party ");
        }
}
drinking(-19);


////nested if else

function reportcard(marks){
        let grade;
        if(marks>=90){
            grade= "A";
        }
        else {
            if(marks>=70){
                grade= "b";
            }
            else {
                if(marks>=50){
                    grade = "c";
                }
                else {
                    grade = "D";
                }
            }
            

            }
                return grade;

        }
console.log(reportcard(10));











