
//get the textarea element for displaying output
const output = document.querySelector("textarea");

//get all the calculator keys
const keys=c=document.querySelectorAll(".key");

//function for evaluation
function calculate(expression)
{
    try{
        
        return eval (expression);
    }catch(error){
        return " error";
    }
}

//function for updating the output
function displayOutput(value){
    output.value =value;
}

//event lister for each keys
keys.forEach((key)=>{
 ///click event lister
 key.addEventListener("click" , ()=>{

    const keyContent=key.textContent;
    const currentExpression =output.value;
    if (keyContent=== "="){
        const result = calculate(currentExpression);
        displayOutput(result);

    }else if(keyContent === "C"){
        displayOutput("");
        
    } else{
        displayOutput(currentExpression + keyContent)
    }


 } )   
})