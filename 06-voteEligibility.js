var voteEligibility = function(age){
    if (age == 0 || age >130 || age < 0 || age == null) {
        console.log(`Invalid data ${age}`);
        
    } else {
        console.log(`Valid data ${age}`);
        if (age>=18) {
            console.log(`Your age is ${age}, You can vote`);
            
        } else {
            console.log(`you age is ${age}, You cannot vote`);
            
        }
        
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);