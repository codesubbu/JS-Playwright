let person = ["a","b",'c','d','e']

console.log(person[3]);
//////////////MAp function
let numbers = [2,4,6,8,10];
let newnumber = numbers.map(num => num *2)
console.log(newnumber);

let name = ["usha",'rakshi','pooja','sahana'];
let newname = name.map((n) => n + "Mr");
console.log(newname);

///////// Filter method - finding the even numbers ina an array 
let df = [1,2,3,4,5652,655,551,84632,52,5,41,7,8,69,26,27,45,612,6,24,79,30,633,]
let evennum = df.filter((f) => f % 2 == 0 && f % 3 ===0);
console.log(evennum);
//
let rg = [
    { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
  {name: "subbu", active: false}
]
let act = rg.filter((h) => h.active)
let letter4 = rg.filter((k) => k.name.length >5)
console.log(act);
console.log(letter4);

////Reduce --- its used to slice each element or accumulate and return the total count 

let alpha = [1,2,3,4,5,6];
let mualpha = alpha.reduce((acc,t) => acc+t, alpha[1]);
// initiator == Intitial value 

console.log(mualpha);

let qq = [15,78,85,24,56,78945,5515,455112,1]
let re = qq.reduce((max,no) =>  {
    if(no<max){
            return no;
    }
    else {
        return max;
    }

}, qq[0]);
console.log(re);