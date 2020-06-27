var roll=document.getElementById('ball');
var movement=25;
var border=4;


roll.style.left=roll.offsetLeft+'px';
roll.style.top=roll.offsetTop+'px';

document.addEventListener('keydown',function(event){
    console.log('Key Down',event.keyCode,event.code);
    
    if(event.keyCode==68 || event.keyCode==39){
        moveRight();
    }
    if(event.keyCode==65 || event.keyCode==37){
        moveLeft();
    }
    if(event.keyCode==83 || event.keyCode==40){
        moveTop();
    }
    if(event.keyCode==87 || event.keyCode==38){
        moveBottom();
    }
});

function moveRight(){
    if(parseInt(roll.style.left)<(window.innerWidth-roll.offsetWidth-border)){
        roll.style.left=parseInt(roll.style.left)+movement+'px';
    } 
}
function moveLeft(){
    if(parseInt(roll.style.left)>border){
        roll.style.left=parseInt(roll.style.left)-movement+'px';
    } 
}
function moveTop(){
    if(parseInt(roll.style.top)<(window.innerHeight-roll.offsetHeight-border)){
        roll.style.top=parseInt(roll.style.top)+movement+'px';
    } 
}
function moveBottom(){
    if(parseInt(roll.style.top)>border){
        roll.style.top=parseInt(roll.style.top)-movement+'px';
    } 
}


// window.onresize = function (e) {
//     ballHeight = ball.offsetHeight;
//     ballWidth = ball.offsetWidth;
// };