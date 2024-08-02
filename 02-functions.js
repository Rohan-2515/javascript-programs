console.log("=============Function with no arguments and no return value======================");

function show(){
    console.log("inside show function");
}
show();

console.log("==============Functions with arguments and no return value====================");

function multiply(n1, n2){
  console.log("given numbers is:",n1, n2);
  var result = n1 * n2;
  console.log("multiplication is:", result);
}
multiply(8, 9);
multiply(200, 400);
multiply(40);


console.log("==============function with no arguments and with return value===================");

function addition(){
    console.log("inside addition funcrtion");
    return  "Rohan Gaikwad";
}
var result = addition();
console.log("result is",result);

function square(num){
    console.log("given number is:",num);
    var result = num * num;
    return result;
}
var resulvalue = square(5);
console.log("square is",resulvalue);
