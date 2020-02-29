$(document).ready(function(){

const situation = $("#situation");
const optionA = $("#a");
const optionB = $("#b");
const optionC = $("#c");
const optionD = $("#d");

const handleSubmit = (e)=>{
    event.preventDefault()
    const choice = e.target.value
if(choice==="a")
    $.get("/api/scenarios/"+choice, (data)=>{
        console.log(data)
    })
   
}

$(optionA).on("click", handleSubmit)
$(optionB).on("click", handleSubmit)
$(optionC).on("click", handleSubmit)
$(optionD).on("click", handleSubmit)



})

