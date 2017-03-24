$(document).ready(function(){
  console.log('js sourced');
  addEventListeners();
});

function addEventListeners() {
  //Event listeners will go here.
  //Start of Logan's add
  $('#firstNameInput').on('click', function(){
      console.log('firstNameInput');
  });

  $('#lastNameInput').on('click', function(){
    console.log('lastNameInput');
  });

  $('#addOwnerButton').on('click', function(){
    console.log('addOwnerButton');
  });

  $("#ownerForm").on("click","button",function(){
    console.log("ownerForm on click button");
  });//end ownerForm On Click button

  console.log("Hahaha, conflict!");


}
