function getGrade(score) {
    let grade;
    // Write your code here
    if (25 <= score <= 30)
    {grade = 'A';}
    else if (20 < score <= 25)
    {grade = 'B';}
    else if (15 < score <= 20)
    {grade = 'C';}
    else if (10 < score <= 15)
    {grade = 'D';}
    else if (5 < score <= 10)
    {grade = 'E';}
    else    (0 <= score <= 5)
    {grade = 'F';}    
    return grade;
}
console.log(getGrade(11));

