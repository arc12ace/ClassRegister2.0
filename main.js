var student_array=[];
var display_array=[];
var display_array_without_commas=[];
var sorted_array=[];
var sorted_array_without_commas=[];

function submit(){
    for (x=1; x <=5; x++){
        var student = document.getElementById("input"+x).value;
        student_array.push(student);
    }
    console.log(student_array)
    
    for (y=0; y< student_array.length; y++) {
        display_array.push("<h4> Name- " + student_array[y] + "</h4>")
    }
    document.getElementById("output_with_commas").innerHTML=display_array

    display_array_without_commas=display_array.join(" ")
    document.getElementById("output_no_commas").innerHTML=display_array_without_commas

    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}

function sort(){
    student_array.sort()
    for (z=0; z<student_array.length; z++){
        sorted_array.push("<h4> Name- " + student_array[z]+ "</h4>")
    }
    document.getElementById("output_with_commas").innerHTML=sorted_array;

    sorted_array_without_commas.join(" ")
    document.getElementById("output_no_commas").innerHTML=sorted_array_without_commas
}
