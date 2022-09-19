// Problem -1 check whether a number is prime or not

let number = 11;
let count = 0
for (let i = 1; i <= number; i++) { 
    if (number % i == 0) { count++ }
    
}
if (count == 2) { 
    console.log("Number is Prime")
    
}else { console.log("Not a Prime")}