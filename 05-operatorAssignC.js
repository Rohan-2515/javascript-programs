function interviewCheck(gradScore, hscScore,sscScore,candidateName){
     var result = gradScore>=70 || hscScore>=80 || sscScore>=90 
     ? `congrats ${candidateName} You are eligiable for TCS interview.`
     : `Unfortunately ${candidateName} you are not eligiable for TCS Interview.`
     console.log(result);
}
interviewCheck(80,86,90,"Jenny");
interviewCheck(70,66,55,"Rohan");
interviewCheck(60,79,88,"Pratik");
