// ******************************************function Decimal_to_Binary**************************************************
function Decimal_to_Binary(){
    var t=document.getElementById("input").value;
    if(t=="")
    document.getElementById("demo").innerHTML="Please enter value.....";
    else{
        var n=t;
        var sum="";
        while(n>0){
            if(n&1)
            sum="1"+sum;
            else
            sum="0"+sum;

            n=n>>1;
        }
        if(sum==""){
            document.getElementById("demo").innerHTML="your number was "+t+" which binary is = 0";
        }
        else{
            document.getElementById("demo").innerHTML="your number was "+t+" which binary is = "+sum;
        }      
    } 
    document.getElementById('input').value="";
}
// ******************************************function Decimal_to_Hex()**************************************************
function Decimal_to_Hex(){
    var t=document.getElementById("input").value;
    if(t=="")
    document.getElementById("demo").innerHTML="Please enter value.....";
    else{
        var sum=parseInt(t).toString(16).toUpperCase();
        document.getElementById("demo").innerHTML="your number was "+t+" which Hexadecimal is = "+sum;     
    } 
    document.getElementById('input').value="";
}
// ******************************************function Decimal_to_Oct()**************************************************
function Decimal_to_Oct(){
    var t=document.getElementById("input").value;
    if(t=="")
    document.getElementById("demo").innerHTML="Please enter value.....";
    else{
        var sum=parseInt(t).toString(8);
        document.getElementById("demo").innerHTML="your number was "+t+" which Octal is = "+sum;     
    } 
    document.getElementById('input').value="";
}
// *********************************************function Binary_to_Decimal()*****************************************************
function Binary_to_Decimal(){
    var t=document.getElementById("input").value;
    if(t=="")
    document.getElementById("demo").innerHTML="Please enter value.....";
    else{
        var sum=parseInt(t,2);
        document.getElementById("demo").innerHTML="your number was "+t+" which Decimal is ="+sum;     
    } 
    document.getElementById('input').value="";
}
// *********************************************function Hex_to_Decimal()*****************************************************
function Hex_to_Decimal(){
    var t=document.getElementById("input").value;
    if(t=="")
    document.getElementById("demo").innerHTML="Please enter value.....";
    else{
        var sum=parseInt(t,16);
        document.getElementById("demo").innerHTML="your number was "+t+" which Decimal is ="+sum;     
    } 
    document.getElementById('input').value="";
}
// *********************************************function Oct_to_Decimal()*****************************************************
function Oct_to_Decimal(){
    var t=document.getElementById("input").value;
    if(t=="")
    document.getElementById("demo").innerHTML="Please enter value.....";
    else{
        var sum=parseInt(t,8);
        document.getElementById("demo").innerHTML="your number was "+t+" which Hexadecimal is ="+sum;     
    } 
    document.getElementById('input').value="";
}










// *************************************Anchor Tag Functions and Enter functions************************************************************

// function D2B()
function D2B(){
    document.getElementById('input').style.display="block";
    document.getElementById("input").placeholder="Decimal to Binary";
    enter();
    document.getElementById('D2B').style.display="block";
}
// function B2D()
function B2D(){
    document.getElementById('input').style.display="block";
    document.getElementById('input').placeholder="Binary to Decimal";
    enter();
    document.getElementById('B2D').style.display="block";
}
// function D2H()
function D2H(){
    document.getElementById('input').style.display="block";
    document.getElementById('input').placeholder="Decimal to Hexa";
    enter();
    document.getElementById('D2H').style.display="block";
}
// function H2D()
function H2D(){
    document.getElementById('input').style.display="block";
    document.getElementById('input').placeholder="Hexa to Decimal";
    enter();
    document.getElementById('H2D').style.display="block";
}
// function D2O()
function D2O(){
    document.getElementById('input').style.display="block";
    document.getElementById('input').placeholder="Decimal to Octa";
    enter();
    document.getElementById('D2O').style.display="block";
}
// function O2D()
function O2D(){
    document.getElementById('input').style.display="block";
    document.getElementById('input').placeholder="Octa to Decimal";
    enter();
    document.getElementById('O2D').style.display="block";
}

// function enter()
function enter(){
    document.getElementById('D2B').style.display='none';
    document.getElementById('B2D').style.display='none';
    document.getElementById('D2H').style.display='none';
    document.getElementById('H2D').style.display='none';
    document.getElementById('D2O').style.display='none';
    document.getElementById('O2D').style.display='none';
}