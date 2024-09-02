console.log(`====== Array destructuring ========`);
const array = [10, 20, 30, 40, 50];
const [a0,a1, a2, a3, a4, a5=0] = array;
// let n1 = array[0];
// let n2 = array[1];
// let n3 = array[2];
// let n4 = array[3];
// let n5 = array[4];
console.log(a0,a1, a2, a3, a4, a5);
