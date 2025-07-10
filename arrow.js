let subbu = (num) => num*3 ;
let result = subbu(10);
console.log(result)

//Blanck - no parameter
let usha = (jhdsf) => jhdsf;
let a = usha("jihadi");
let b = usha("wfwf");
let c = usha("dfdf");
let d = usha("df");
console.log (a,b,c,d);

// multiple paramenters
let sum = (a,b) =>  a+b;
console.log(sum(4,5));


const nums = [4, 11, 9, 23, 8, 15];

const gret10 = nums.reduce((acc,num) => {

    if(num>acc){
        return num;
    }
    else {
        return acc;
    }
}, nums[0]);

console.log(gret10);

const greater = nums.filter((e) => e>10);
console.log(greater.length);


const animals = ['cat', 'dog', 'elephant'];
let uprcase = animals.map((p) => p.toUpperCase());
console.log(uprcase);