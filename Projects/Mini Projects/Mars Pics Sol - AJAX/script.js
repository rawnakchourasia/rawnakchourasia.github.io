
var tempSol=0;
var pageNo=1;



function getImages(pageNo){
  var solentered=$( "#solpicker" ).val();
  if(solentered===''){
    alert('Please fill the field');
    return;
  }
      
  function prevImageButtonActive(dataPev){
    if(pageNo<=1){
      $('#prev').attr('disabled',true);
    }
    else{
      $('#prev').attr('disabled',false);
    }
  }

  function nextImageButtonActive(dataNext){
    if(dataNext.photos[0]===undefined){
      $('#next').attr('disabled',true);
    }
    else{
      $('#next').attr('disabled',false);
    }
  }

  function prevNext(pageno){
    var nextPageCheck=pageno+1;
    var prevPageCheck=pageno-1;
    
    $.ajax({
      url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
      method:'GET',
      success:nextImageButtonActive,
      data:{
        sol:solentered,
        page:nextPageCheck,
        api_key:'xm0KSBRqL8Am4aiTfgu5jDi6CrULfC3XxBuFrEnA',
      }
    }).fail(function(){
      console.log("next-fail");
    });

    $.ajax({
      url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
      method:'GET',
      success:prevImageButtonActive,
      data:{
        sol:solentered,
        page:prevPageCheck,
        api_key:'xm0KSBRqL8Am4aiTfgu5jDi6CrULfC3XxBuFrEnA',
      }
    }).fail(function(){
      console.log("back-fail");
    });
  }

  function displayImage(data){
    if(data.photos[0]===undefined){
      alert('No photos available for this page and sol');
      return;
    }
    else{
      prevNext(pageNo);
      $('.imagesInside').empty();
      for(let i=0;i<data.photos.length;i++){
        $('#image-container').append('<div><img src="'+data.photos[i].img_src+'"></div>')
      }
    }
  }

  function runAjax(pageNumber){
    console.log(pageNumber);
      $.ajax({
      url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
      method:'GET',
      success:displayImage,
      data:{
        sol:solentered,
        page:pageNumber,
        api_key:'xm0KSBRqL8Am4aiTfgu5jDi6CrULfC3XxBuFrEnA',
      }
    });
  };

  if((tempSol!==solentered)){
    runAjax(pageNo);
  }

  

  // tempSol=solentered+1;
};


$('#button').on('click',function(){
  getImages(pageNo);
});



$('#next').on('click',function(){
  var nextPage=pageNo+1;
  getImages(nextPage);
  pageNo=nextPage;
});
  


$('#prev').on('click',function(){
  var prevPage=pageNo-1;
  getImages(prevPage);
  pageNo=prevPage;
});
  



//   https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-5-1&api_key=DEMO_KEY
//   https://api.jqueryui.com/datepicker/
//   https://developers.google.com/speed/libraries#jquery