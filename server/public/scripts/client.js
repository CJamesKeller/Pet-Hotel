$(document).ready(function(){
  console.log('js sourced');
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

function addPetPostRequest (event) {
  event.preventDefault();
}
