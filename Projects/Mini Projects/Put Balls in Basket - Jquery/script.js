

$(function(){
    var count=0;
    $("button").on("click",function(){
        $("#container").append('<span class="ball-in"></span>');

        var arr=[ 'red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson']
        const colNum=Math.floor((Math.random() * arr.length) + 0);
        const ballColor=arr[colNum];
        console.log(ballColor);
        var spans=$("span");
        const sp=spans.eq(count);
        count=count+1;
        sp.css({
            "background-color":ballColor
        });
    })
})
