// preference will always be given t the over ridden method or child class

class Species{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    movement(an){

        console.log("Species is" , `${an}`);
        
    }
}
// preference will always be given t the over ridden method or child class
class Animals extends Species{

    // movement(an){

    //     console.log("This animal is ", `${an}`);
    // }
}

const ani1 = new Animals();
ani1.movement("Dog");