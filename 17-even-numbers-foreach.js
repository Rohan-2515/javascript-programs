const array = [10,23,44,55,66,43,35,64,56];
array.forEach((Element)=>{
    console.log(Element);
});

console.log("Even numbers using for each loop");


array.forEach((Element)=>{
    if(Element % 2 == 0){
        console.log(Element);
        
    }
})

console.log("transofrming array into spaure using square method ");

const arraynum = [11,23,32,34,45,54,56,65,65];
const araysquare = arraynum.map((element)=>{
    return element * element;
    
});
console.log(araysquare);

