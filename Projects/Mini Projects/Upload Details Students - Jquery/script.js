
$(function(){

    $("#button-1").on("click",function(e){
        e.preventDefault();
        const rollNo=$("#rollno").val();
        const nameStudent=$("#name").val();
        const marksObtained=$("#marks").val();


        if((rollNo==='') || (nameStudent==='') || (marksObtained==='')){
            alert("Please fill all the fields");
        }
        else{
            var appendText="<p>Roll no - <b>&nbsp;"+rollNo+"&nbsp;</b> , <b>&nbsp;"+nameStudent+"&nbsp;</b> have got <b>&nbsp;"+marksObtained+"&nbsp;</b> marks</p>";
            $("#output-details").append(appendText);

            $("#rollno").val("");
            $("#name").val("");
            $("#marks").val("");
        }
    })
});
console.log("as");