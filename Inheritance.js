
// grand parent 
class Automobile{
    constructor(chassis){
        this.chassis=chassis;
    }

    getChassis(ch){
        if(Number.isInteger(ch)){
            console.log("Chassi is correct");
        }
        else {
            console.log("Invalid chassi");
        }
    }
}

// parent
class Vehicle extends Automobile{

        constructor(chassis,make,model,year){
            super(chassis);
            this.make = make;
            this.model = model;
            this.year = year;

        }


        startEngine(){

                console.log("Starting engine...");
        }
        stopEngine(){

                console.log("Stopping Engine");
        }
        getInfo(){
            return `${this.make},${this.model},${this.year}`;
        }
}

// for linking parent class we need to use " extend keyword"]
// grnadchild
class Car extends Vehicle{

        constructor(make,model,year,fueltype){
            // for calling parent class we have to use super keyword
            super(make,model,year);
            this.fueltype=fueltype

        }

        driveCar(){

            console.log("Driving",this.make, "-", this.model, "car");
        }
}

class Bike extends Vehicle{

        constructor(make,model,year,color){
            // for calling parent class we have to use super keyword
            super(make,model,year);
            this.color=color;

        }

        driveBike(){

            console.log("Driving", this.model, this.color, "Bike");
        }
}

const car1 = new Car("honda","City",2000,"petrol");
const Bike1 = new Bike("Duke",390,2015,"Pink");
car1.startEngine();
car1.getChassis("sjfdv");
car1.driveCar();
console.log(car1.getInfo(), "**********");


Bike1.startEngine(), Bike1.driveBike(), console.log(Bike1.getInfo());


// but you cant call bike reference variable from car
//Bike1.driveCar(); // this will give runtime error
//becoz both bike n car are child class --- > siblings cannot inherit anythig
// No multiple parentclass in js 
// but you can create grandparent..


