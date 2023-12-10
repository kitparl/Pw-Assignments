/* 
Q2. Write a program that grades students based on their marks^
8 If greater than 90 then A Grade
8 If between 70 and 90 then a B grade
8 If between 50 and 70 then a C grade
8 BFlow 50 then an F grade 
*/

let marks = 80
if (marks > 90){
    console.log("A Grade")
}
else if (marks > 70 && marks <= 90){
    console.log("B Grade")
}
else if (marks > 50 && marks <= 70){
    console.log("C Grade")
}
else{
    console.log("F Grade")
}