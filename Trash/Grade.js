function grade(mark,fullMark){
    var percentage = (mark / fullMark) * 100;
    let grade ='';
    if(80 <= mark){
        grade = 'O';
    }
    else if (70 <= mark){
        grade = 'E';
    }
    else if (60 <= mark){
        grade = 'A';
    }
    else{    
        grade = 'F';
    }
    console.log(`The percentage is ${mark} %`);
    console.log(`The Grade is ${grade}`);
}

grade(60,100);