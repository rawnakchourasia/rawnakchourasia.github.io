const exp=document.querySelectorAll('#header-links li a');
const body=document.querySelector('body');



var scroll;
var posn;
var i;
var number;
exp.forEach(a => {
    a.addEventListener('click',(event) => {
        event.preventDefault();
        const sectionID=a.innerHTML.trim().toLowerCase();
        const section=document.getElementById(sectionID);
        // console.log(section);
        var cor=section.getBoundingClientRect();
        posn=cor.top;
        i=0;
        scroll=setInterval(scrolling,2,posn);
    })
})

// SCROLLING FUNCTION. DECLARE i, posn, scroll as global. Initialize i
// as 0 inside eventlistener's function, get the variable cor.
function scrolling(posn) {
    // console.log(posn);
    window.scrollBy(0,10);
    i=i+10;
    if(i>=posn){
        clearInterval(scroll);
    }
}

var barsections=document.querySelectorAll('[data-skillset]');
for (let bar of barsections){
    bar.dataset.bool="false";
}
// console.log(skillSection,window.innerHeight);

let ab=document.addEventListener('scroll',function(){
    for(let bar of barsections){
        let sksec=bar.getBoundingClientRect().top;
        // console.log(sksec);
        if (bar.dataset.bool==="false" && sksec<=window.innerHeight){
                bar.dataset.bool="true";
                var currentvalue=0;
                let progress=setInterval(function(){
                    if(currentvalue>=Math.floor(bar.dataset.skillset)){
                        clearInterval(progress);
                    }
                    bar.style.width=currentvalue + '%';
                    currentvalue=currentvalue+1;
                },20)
        }
        else if (sksec>window.innerHeight){
            bar.dataset.bool="false";
            bar.style.width=0 + '%';
        }
    }
});




// function fillbar(bar){
//     // for(let bar of barsections){
//         var currentvalue=0;
//         let progress=setInterval(function(){
//             if(currentvalue>=Math.floor(bar.dataset.skillset)){
//                 clearInterval(progress);
//                 return;
//             }
//             bar.style.width=currentvalue + '%';
//             currentvalue=currentvalue+1;
//         },30)
//     // }
// }

// function initialize(bar){
//     // for(let bar of barsections){
//         bar.style.width=0 + '%';
//     // }
// }
// initialize();

// This function is for when we refresh the page at any particular point
// in page, the reloaded page will take us back to the top of the page.
// I have done this particularly for skill bar transitions errors.
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }


var perview=document.getElementById('viewed');
var pfolio=document.getElementById('portfolio');
var abt=document.getElementById('about');
var perval=0;
var travelledHeight;


document.addEventListener('scroll',function(){
    var totalHeight=pfolio.getBoundingClientRect().height+pfolio.offsetTop-abt.offsetTop;

    if(abt.getBoundingClientRect().top>200){
        perval=0;
    }
    
    
    else if(abt.getBoundingClientRect().top<=200 && (pfolio.getBoundingClientRect().top+pfolio.getBoundingClientRect().height)>0){
        travelledHeight=totalHeight-pfolio.getBoundingClientRect().top-abt.offsetTop;
        perval=travelledHeight/totalHeight*100;
        if(perval>100){
            perval=100;
        }
    }
    
    setPerval(Math.round(perval));

});

function setPerval(perval){
    perview.innerText=perval+'% Viewed';
}