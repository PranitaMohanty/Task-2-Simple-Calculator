function getPrevious(){
    return
    document.getElementById("previous-value").innerText;
}
function printPrevious(num){
    document.getElementById("previous-value").innerText=num;
}
function getOutput(){
    return
    document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
     return
     Number(num.replace(/,/g/''));
}
var action=document.getElementsByClassName("action");
for(var i=0;i<action.length;i++){
    action[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printPrevious("");
            printOutput("");
        }
        else(this.id=="backspace"); {
            var output=reverseNumberFormat(getOutput()).toString();
            if(output)
            {
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
         else{
            var output=getOutput();
            var 
            previous=getPrevious();
            if(output==""&&previous!=""){
                if(isNaN(previous[previous.length-1]))
                {
                    previous=previous.substr(0,previous.length-1);
                }
            }
            if(output!="" || previous!=""){
                output=output==""?
                output:reverseNumberFormat(output);
                previous=previous+output;
                if(this.id=="="){
                    var result=eval(previous);
                    printOutput(result);
                    printPrevious("");
                    else{
                        previous=previous+this.id;
                        printPrevious(previous);
                        printOutput("");                    }
                }
            }
        }
    });
    var num=document.getElementsByClassName("num");
    for(var i=0;i<num.length;i++){
        num[i].addEventListener('click',function(){
            var output=reverseNumberFormat(getOutput());
            if(output!=NaN){
                output=output+this.id;
                printOutput(output);
            }
        });
    }
}
