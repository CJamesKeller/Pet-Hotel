$(document).ready(function(){
  console.log('js sourced');
  addEventListeners();
});

function addEventListeners() {
  //Event listeners will go here.

  $("#ownerForm").on("click","button",function(){
    console.log("ownerForm on click button");
  });//end ownerForm On Click button

  console.log("Hahaha, conflict!");

}
