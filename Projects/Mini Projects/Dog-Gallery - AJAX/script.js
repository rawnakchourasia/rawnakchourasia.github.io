
var dogTemporary;

function getImages(){

  console.log($('#which-dog').val());
  console.log($('#which-dog-breed').val());
  
  function displayImage(data){
    $('.imagesInside').empty();
        for(let i=0;i<data.message.length;i++){
          $('#image-container').append('<div><img src="'+data.message[i]+'"></div>')
        }
  }

  if($('#which-dog-breed').val()===null){
    $.ajax({
      url:'https://dog.ceo/api/breed/'+$('#which-dog').val()+'/images',
      method:'GET',
      success:displayImage,
    });
  }
  else if($('#which-dog-breed').val()!==null){
    $.ajax({
      url:'https://dog.ceo/api/breed/'+$('#which-dog').val()+'/'+$('#which-dog-breed').val()+'/images',
      method:'GET',
      success:displayImage,
    });
  }
}


$('#button').on('click',getImages);

function breedCheck(){
  $("#which-dog-breed").empty();
  var dogNameForBreed=$('#which-dog').val();
  $.get('https://dog.ceo/api/breed/'+dogNameForBreed+'/list',function(listdatabreed){
    var dogBreedList=listdatabreed.message;
    if(dogBreedList.length!==0){

      $("#form-2").removeClass('hide');
      for(let i=0;i<dogBreedList.length;i++){
        $("#which-dog-breed").append('<option>'+dogBreedList[i]+'</option>');
      }
    }else if(dogBreedList.length===0){
      $("#which-dog-breed").empty();
      $("#form-2").addClass('hide');
    }
  })
}


$(function(){
  $.get('https://dog.ceo/api/breeds/list/all',function(listdata){
    var dogList=listdata.message;
    $.each(dogList, function(key, value) {
      $("#which-dog").append('<option>'+key+'</option>');
    });
    breedCheck();
  })
  
})

$('#which-dog').on("change",breedCheck);



// https://dog.ceo/api/breed/australian/shepherd/images
// https://dog.ceo/api/breed/hound/list
//   https://api.jqueryui.com/datepicker/
// https://developers.google.com/speed/libraries#jquery