$(document).ready(function(){
  console.log('js sourced');
  getData();
  addEventListeners();
});

function addEventListeners() {

  $(".ownerForm").on("mouseover", function()
{
  console.log("you moused over!");
});
  //Event listeners will go here.

  $('h1').on('click', function(){
    $('h1').text('Cat Hotel');
  });
  $("#ownerForm").on("click","button",function(){
    console.log("ownerForm on click button");
  });//end ownerForm On Click button

  console.log("Hahaha, conflict!");


}


function getData(){
  $.ajax({
    type: 'GET',
    url: '/pets',
    success: function(response){
        console.log("I've returned from /pets with this:", response);
        var dataArray = response;
        displayData(dataArray);
    }
  });//ends ajax get
}//ends getData
