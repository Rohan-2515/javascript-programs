var eligibilityTcs = function(gradScore ,hscScore, sscScore, candidateName){
    if (gradScore > 70 || hscScore >= 80 || sscScore > 90) {
        console.log(`Congrates ${candidateName} You are eligilable for Tcs Interiew.`);
        
    } else {
        console.log(`Unfortunately ${candidateName} You are not eligilable for interview`);
           
    }
}
eligibilityTcs(80, 86, 90, "Rohan");
eligibilityTcs(70, 65, 55, "Pratik");
eligibilityTcs(60, 79, 88, "Atul");