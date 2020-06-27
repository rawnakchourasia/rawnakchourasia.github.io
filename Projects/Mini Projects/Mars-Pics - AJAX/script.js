$( function() {
    $( "#datepicker" ).datepicker();
  } );
var tempDate=0;

function getImages(){
  var dateEntered=$( "#datepicker" ).val();
  if(dateEntered===''){
    alert('Please fill the field');
    return;
  }
  
  
  if(tempDate!==dateEntered){
    const rawDate = $( "#datepicker" ).val().split("/");
    const currentDate=rawDate[2]+"-"+rawDate[0]+"-"+rawDate[1];
    console.log(currentDate);
    
    function displayImage(data){
      console.log(data.photos[0]);
      if(data.photos[0]===undefined){
        alert('No photos available for this date');
        return;
      }
      else{
        $('.imagesInside').empty();
        for(let i=0;i<data.photos.length;i++){
          $('#image-container').append('<div><img src="'+data.photos[i].img_src+'"></div>')
          console.log(i);
        }
      }
      
    }

    $.ajax({
      url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
      method:'GET',
      success:displayImage,
      data:{
        earth_date:currentDate,
        api_key:'xm0KSBRqL8Am4aiTfgu5jDi6CrULfC3XxBuFrEnA',
      }
    });
  }
    
  tempDate=dateEntered;
  console.log(tempDate);
}


$('#button').on('click',getImages);

//   https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-5-1&api_key=DEMO_KEY
//   https://api.jqueryui.com/datepicker/
//   https://developers.google.com/speed/libraries#jquery