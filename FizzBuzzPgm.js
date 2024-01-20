var v=document.getElementById("num3")
function findfb(){
    var value=Number(v.value)
    if(isNaN(value)){
        ans3.textContent="Enter a valid Number"
    }
    else if(value<0){
        ans3.textContent="Negative Number";
    }
    else if(value%3==0 && value%5==0){
        ans3.textContent="FizzBuzz";
    }
    else if(value%3==0){
        ans3.textContent="Fizz" ;                  
    }
    else if(value%5==0){
        ans3.textContent="Buzz";
    }
    else{
        ans3.textContent="not a FizzBuzz";
    }
}