function getGrade (Total){
    
    if(Total >90) {
        return 'A+'

    }
    else if (Total>80 && Total<=90){
            return 'A'
        }

else if (Total>70 && Total <=80) {

    return 'B'

}

else if (Total>60 && Total <=70) {

    return 'C'
}

    else if (Total>50 && Total <=60) {
        return 'D'

    }

    else if (Total>40 && Total <=50) {
        return 'E'
    }

    else if (Total> 30 && Total <=40) {
        return 'F'
    }
}


console.log(getGrade(35))