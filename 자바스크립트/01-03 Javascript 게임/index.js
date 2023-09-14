let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 5;

// Window 시작시 호출되는 함수
window.onload = function(){
    document.getElementById("result").innerHTML=randomNumber;
}



function btnOnclick(){
    if(count!=0){
        const request = document.querySelector("#guessfield").value;
        document.querySelector("#guessfield").value="";
        document.getElementById("guesses").innerHTML += request+"&nbsp";

        if(request == randomNumber){
            document.getElementById("lastResult").innerHTML = "Success";
            document.getElementById("lastResult").style="background-color:green; color:white";

            document.getElementById("lowOrHi").style="display:none;";
        }
        else{
            if(request > randomNumber){
                document.getElementById("lowOrHi").innerHTML = "ToHigh";
            }
            else{
                document.getElementById("lowOrHi").innerHTML = "ToLow";
            }

            document.getElementById("lastResult").innerHTML = "Wrong";
            document.getElementById("lastResult").style="background-color:red; color:white";
        }
        
        
        count--;
    }
    else{
        document.getElementById("lastResult").innerHTML = "GAME OVER";
    }
    //alert(request);
}