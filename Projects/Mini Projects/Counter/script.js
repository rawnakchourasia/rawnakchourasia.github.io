var numberInput = document.getElementById("enter-text");
var startCounter = document.getElementById("button-edit");
var number;
var count=1;
var numfor2=0;
var numfor3=0;
var numfor4=0;
var numfor5=0;

var topDiv1=document.querySelector('.top-1');
var botDiv1=document.querySelector('.bottom-1');
var topDiv2=document.querySelector('.top-2');
var botDiv2=document.querySelector('.bottom-2');
var topDiv3=document.querySelector('.top-3');
var botDiv3=document.querySelector('.bottom-3');
var topDiv4=document.querySelector('.top-4');
var botDiv4=document.querySelector('.bottom-4');
var topDiv5=document.querySelector('.top-5');
var botDiv5=document.querySelector('.bottom-5');

var timer=1000;






startCounter.addEventListener('click',function(){
    number=Math.floor(numberInput.value);
    // console.log(number);
    checkNumber(number);
});

function checkNumber(number){
    if (number<=99999 && number>=0){
        topDiv1.innerHTML="0";
        botDiv1.innerHTML="1";
        topDiv2.innerHTML="0";
        botDiv2.innerHTML="1";
        topDiv3.innerHTML="0";
        botDiv3.innerHTML="1";
        topDiv4.innerHTML="0";
        botDiv4.innerHTML="1";
        topDiv5.innerHTML="0";
        botDiv5.innerHTML="1";
        
        count=1;
        numfor2=0;
        numfor3=0;
        numfor4=0;
        numfor5=0;
        countdown(number);
    }
    
    else{
        window.alert("Incorrect Number");
    }
}

function countdown(number){
    var countTimer1=setInterval(function(){
        // For 1st Number
        botDiv1.classList.add('next-div-1');
        
        // For all the topDivs

        if(count>1){
            topDiv1.innerHTML=botDiv1.innerHTML;
        }    
        if(numfor2>=1){
            topDiv2.innerHTML=botDiv2.innerHTML;
        }
        if(numfor3>=1){
            topDiv3.innerHTML=botDiv3.innerHTML;
        }
        if(numfor4>=1){
            topDiv4.innerHTML=botDiv4.innerHTML;
        }
        if(numfor5>=1){
            topDiv5.innerHTML=botDiv5.innerHTML;
        }


        // For 1st Number

        if(count>=10){
            botDiv1.innerHTML=count%10;
        }
        else if(count>=100){
            botDiv1.innerHTML=count%100;
        }
        else if(count>=1000){
            botDiv1.innerHTML=count%1000;
        }
        else if(count>=10000){
            botDiv1.innerHTML=count%10000;
        }else{
            botDiv1.innerHTML=(count);
        }
        count=count+1;
        
        
        // For 2nd Number
        
        if(topDiv1.innerHTML==9 && count>9 && number!=Math.floor(topDiv5.innerHTML+topDiv4.innerHTML+topDiv3.innerHTML+topDiv2.innerHTML+topDiv1.innerHTML)){
            // console.log(numfor2);
                numfor2=numfor2+1;
            
            
            
            

            if(botDiv2.innerHTML!=numfor2){

                if(numfor2>=10){
                    botDiv2.innerHTML=numfor2%10;
                }
                else if(numfor2>=100){
                    botDiv2.innerHTML=numfor2%100;
                }
                else if(numfor2>=1000){
                    botDiv2.innerHTML=numfor2%1000;
                }
                else{
                    botDiv2.innerHTML=numfor2;
                }

            }
            botDiv2.classList.add('next-div-1');
        }
        else{
            botDiv2.classList.remove('next-div-1');
        }
    


         // For 3rd Number

         if(topDiv2.innerHTML==9 && topDiv1.innerHTML==9 && count>9 && number!=Math.floor(topDiv5.innerHTML+topDiv4.innerHTML+topDiv3.innerHTML+topDiv2.innerHTML+topDiv1.innerHTML)){
            console.log(topDiv1.innerHTML);
            numfor3=numfor3+1;
            if(botDiv3.innerHTML!=numfor3){

                if(numfor3>=10){
                    botDiv3.innerHTML=numfor3%10;
                }
                else if(numfor3>=100){
                    botDiv3.innerHTML=numfor3%100;
                }
                else{
                    botDiv3.innerHTML=numfor3;
                }

            }
            botDiv3.classList.add('next-div-1');
        }
        else{
            botDiv3.classList.remove('next-div-1');
        }



        // For 4th Number

        if(topDiv3.innerHTML==9 && topDiv2.innerHTML==9 && topDiv1.innerHTML==9 && count>9 && number!=Math.floor(topDiv5.innerHTML+topDiv4.innerHTML+topDiv3.innerHTML+topDiv2.innerHTML+topDiv1.innerHTML)){
            // console.log(numfor4);
            numfor4=numfor4+1;
            if(botDiv4.innerHTML!=numfor4){

                if(numfor4>=10){
                    botDiv4.innerHTML=numfor4%10;
                }
                else{
                    botDiv4.innerHTML=numfor4;
                }

            }
            botDiv4.classList.add('next-div-1');
        }
        else{
            botDiv4.classList.remove('next-div-1');
        }





        // For 5th Number

        if(topDiv4.innerHTML==9 && topDiv3.innerHTML==9 && topDiv2.innerHTML==9 && topDiv1.innerHTML==9 && count>9 && number!=Math.floor(topDiv5.innerHTML+topDiv4.innerHTML+topDiv3.innerHTML+topDiv2.innerHTML+topDiv1.innerHTML)){
            // console.log(numfor5);
            numfor5=numfor5+1;
            if(botDiv5.innerHTML!=numfor5){

                if(numfor5>=10){
                    botDiv5.innerHTML=numfor5%10;
                }
                else{
                    botDiv5.innerHTML=numfor5;
                }

            }
            botDiv5.classList.add('next-div-1');
        }
        else{
            botDiv5.classList.remove('next-div-1');
        }




        // For 1st Number(Remaining part)

        if(count==number+2){
            clearInterval(countTimer1);
            // window.alert("Counter Has Stopped");
            botDiv1.classList.remove('next-div-1');
            
        }
    },timer);
    
}

document.addEventListener('keydown',event => {
    if(event.keyCode==13){
        number=Math.floor(numberInput.value);
        checkNumber(number);
    }
});
