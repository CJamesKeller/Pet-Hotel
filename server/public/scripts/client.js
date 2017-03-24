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
    $.ajax({
      type: 'POST',
      url: '/owners/add',
      data: {
        firstName: $(('#firstNameInput')).val(),
        lastName: $('#lastNameInput').val(),
      },
      success: function(response){
        console.log(response);
      }
    });
  });
  // End of Logan's add




  $("#ownerForm").on("click","button",function(){
    console.log("ownerForm on click button");
  });//end ownerForm On Click button

  console.log("Hahaha, conflict!");


function addPetPostRequest (event) {
  event.preventDefault();
  var petObject = {};
  //petObject.name = $('#petFormNameInput').val();
  petObject.breed = $('#petFormBreedInput').val();
  petObject.color = $('#petFormColorInput').val();
  console.log(petObject);
  $.ajax({
    url: '/pets/add',
    type: 'POST',
    data: petObject,
    success: function (res) {
      console.log(res);
    }
  });
}


}
