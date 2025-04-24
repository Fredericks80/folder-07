// console.log("Hello, NodeJS!");

let a = 1;
let b = 5;
let c = 6;

let D = (Math.pow(b,2)) - (4*a*c);
if (D < 0){
    console.log("Tidak memiliki akar-akar rasional");
} else if (D === 0){
    console.log("Memiliki akar kembar");
    x = (-b + Math.sqrt(D))/(2*a);
    console.log("Akar-akarnya adalah " + x);
} else if (D > 0){
    x1 = (-b + Math.sqrt(D))/(2*a);
    x2 = (-b - Math.sqrt(D))/(2*a);
    console.log("Akar-akarnya adalah " + x1 + " dan " + x2);
}
