var sqr=document.getElementById('square');

sqr.style.left=sqr.offsetLeft+'px';
sqr.style.top=sqr.offsetTop+'px';

var border=5;

var horext=window.innerWidth-sqr.offsetWidth-border;
var verext=window.innerHeight-sqr.offsetHeight-border;


function randomPlace(){
    sqr.style.left=Math.floor((Math.random()*horext)+border)+'px';
    sqr.style.top=Math.floor((Math.random()*verext)+border)+'px';
}

console.log(horext);
console.log(verext);

sqr.addEventListener("mouseover",randomPlace);