$(document).ready(function(){
  console.log('js sourced');
  addEventListeners();
});

function addEventListeners() {
  $('.addPet').on('submit', addPetPostRequest);
}

function addPetPostRequest (event) {
  event.preventDefault();
  var petObject = {};
  petObject.name = $(this).children('#petFormNameInput').val();
  petObject.breed = $(this).children('#petFormBreedInput').val();
  petObject.color = $(this).children('#petFormColorInput').val();
  console.log(petObject);
  // $.ajax({
  //   url: '/pets/add',
  //   type: 'POST',
  //   data: {param1: 'value1'}
  // });

}
