// const jsonstring = `{
//     "FullName": "Elon Musk",
//     "isMarried": true,
//     "City": null
// }`
// const employee = JSON.parse(jsonstring);
// console.log(employee);
// console.log(employee.isMarried);

console.log(`======= Object to JSON Conversion===========`);

const address = {

    flatNumber: "B2",

    society: "Horizon",

    street : "Wakad",

    state: "MH"

}

const addressJson = JSON.stringify(address);

console.log(typeof addressJson);

 

console.log(addressJson);