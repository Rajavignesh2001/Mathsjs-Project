
function operation(){
    var number1=document.getElementById("avalue")
    var number2=document.getElementById("bvalue")
    var selectedOperation=document.getElementById("perform").value
    finalAns=document.getElementById("ans4")
    var number11=Number(number1.value)
    var number22=Number(number2.value)
    if(selectedOperation=="default"){
        finalAns.textContent="Choose"
    }
    else if(selectedOperation=="addition"){
        finalAns.textContent=number11+number22
    }
    else if(selectedOperation=="subraction"){
        finalAns.textContent=number11-number22
    }
    else if(selectedOperation=="multiplication"){
        finalAns.textContent=number11*number22
    }
    else if(selectedOperation=="divison"){
        finalAns.textContent=number11/number22
    }
    else if(selectedOperation=="modulo"){
        finalAns.textContent=number11%number22       
    }
    else{
        finalAns.textContent="Invalid Number"
    }
}