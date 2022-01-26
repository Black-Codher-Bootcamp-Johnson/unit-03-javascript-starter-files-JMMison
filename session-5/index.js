// function getGrade (Total){
    
//     if(Total >90) {
//         return 'A+'

//     }
//     else if (Total>80 && Total<=90){
//             return 'A'
//         }

// else if (Total>70 && Total <=80) {

//     return 'B'

// }

// else if (Total>60 && Total <=70) {

//     return 'C'
// }

//     else if (Total>50 && Total <=60) {
//         return 'D'

//     }

//     else if (Total>40 && Total <=50) {
//         return 'E'
//     }

//     else if (Total> 30 && Total <=40) {
//         return 'F'
//     }
//     else{ return 'Fail'}
// };


//console.log(getGrade(35));




function getGrade (Total){
    let grade;


switch (true) { 
    
    case (Total>90):
    grade = 'A+';
    break;

case (Total>80):
    grade = 'A';
    break;


    case (Total>70):
    grade = 'B';
    break;


case (Total>60):
    grade = 'C';
    break;


    case (Total>50):
    grade = 'D+';
    break;


case (Total>40):
    grade = 'E';
    break;


    case (Total>30):
    grade = 'F';
    break;


}
return grade
}
console.log(getGrade(60))