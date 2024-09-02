const array = [11,23,43,55,65,[67,53,59]];
const newarray = array.flat(1);
console.log(newarray);


const array1 = [ 111,22,33,44,[33,44,5,66,[23,77,88,[65,34,245,64]]]];
const array2 = array1.flat(3);
console.log(array2);


// array sorting to dscending order
const array3 = [22,66,43,5,3,7,856,45,35,74];
console.log(array3);
const array4 = array3.sort((n1,n2) =>{
    return n1<n2 ? 1 : -1;
});
console.log(array4);





