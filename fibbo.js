var v1=document.getElementById("num2")
var r2=document.getElementById("str2")
function fibo(){
    var val2=Number(v1.value)
    var val3=0,val4=1
    if(val2<=1){
        str2.textContent=0
    }
    else if(val2==2){
        str2.textContent=val2-1
    }
    else{
        for(var j=3;j<=val2;j++){
            var val5=val3+val4
            val3=val4
            val4=val5
        }
    str2.textContent=val5
    }
}