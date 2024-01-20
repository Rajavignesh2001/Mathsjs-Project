var num1=document.getElementById("num1")
var r=document.getElementById("str1")
function fact(){
    var val=Number(num1.value)
    var res=1
    if(val<=0){
        str1.textContent="Invalid Number"
    }
    else{
    for(var i=1;i<=val;i++){ 
        res*=i
    }
    str1.textContent=res
    }
}