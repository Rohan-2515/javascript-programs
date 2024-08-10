// var age=15;
// if (age>=18) {
//     console.log(`You can Vote, Your Age is:- ${age}`);
    
// } else {
//     console.log(`You cannot vote, Your age is:-${age}`);
    
// }

var votingChecker = function(age,person){
    if (age>=18) {
        console.log(`Hey ${person} Your age is ${age}, and you can vote`);
        
    } else {
        console.log(`Unfortunately ${person}, Your age is ${age}, and you cannot vote`);
        
    }
}
votingChecker(20,"Rohan");
votingChecker(12, "Pratik");
votingChecker(17, "Atul");
votingChecker(25, "Abhijeet");