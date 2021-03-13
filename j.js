function grade(){

    var maths =Number(document.form.maths.value);
    var bio = Number(document.form.bio.value);
    var chem = Number(document.form.chem.value);
    var physics = Number(document.form.physics.value);

    var TotalMarks = 400;

    var Marksob = maths+bio+chem+physics;
    document.write("Total marks obtained"+" " +Marksob+"<br>");

    var percentage = (Marksob/TotalMarks)*100;
    document.write("your percentage is"+ " "+percentage + "%"+"<br>");
//Determinibg the Grade
    var Garde;
    if (percentage>90){
        document.write("your grade is A.congrats!"+"<br>");
         }
        else if(percentage>80 && percentage<90){
        document.write("your grade is B"+"<br>");
        }
        else{
            document.write("your grade is c"+"<br>");
        }

//pass or fail?

if (percentage>45){
    document.write("you have been passed");

}
else{
    document.write("you have been failed.try agian!");
}


}