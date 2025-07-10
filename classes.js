class Car {

    constructor(name,model,colour,price){

        this.name = name;
        this.model = model;
        this.colour = colour;
        this.price= price;
    }
/// This will give error no constructor overloading in js
/*
    constructor(Engine){

        this.Engine = Engine;
        
    }
*/
    whichengine(fuel){
            if(fuel == "Petrol"){
                console.log("This is petrol engine");
            }
            else if (fuel == "Diesel"){
                console.log("This is diesel engine")

            }
            else {
                console.log("Invalid engine type")
            }
    }

}
 let C1 = new Car("BMw","500d","grey",2000);
//c1 is object reference variable

console.log(C1.name);
C1.whichengine("fdsesel");



// creating a new object under car class
let C2 = new Car('Audi','q7','blue',5000);
console.log(C2.model);
//// this will gve error - no cnstructor overloading 
let C3 = new Car("Hyundai");
console.log(C3.name);
