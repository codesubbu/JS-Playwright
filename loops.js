for(i=50; i<101; i++){

    console.log(i);
}
console.log("***************");
/////for of loop
let numb = [1,2,3,4,5,6];
for(let s of numb){
    console.log(s);
}

console.log("*********");

for(j=2; j<numb.length; j++){

    console.log(numb[j]);
    
}

console.log("*********");
let name = ['subbu','kamani','harsha','mayuri','vj']
for (const z of name){

    console.log(z);
}

console.log("*********");


for (let f=2; f<3;f++){

    console.log(name[f]);
}
//////// while loop
console.log("*********");
let p =1;
while(p<=5){
    console.log(p);
    p++;
}
console.log("*********");
//// do while
let h=100;
do{
    console.log(h);
    h--;
}
while(h>0);
///break
console.log("*********");

let xxx=15;
while(xxx<=100){
    console.log(xxx);
    if(xxx%5==0){
        console.log("subbu");
        break;
    }
    xxx=xxx+1;
}

let q = "*";
for(q=0; q<=100; q++){
    console.log(q);
}

