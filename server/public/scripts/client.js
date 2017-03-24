$(document).ready(function(){
  console.log('js sourced');
  addEventListeners();
  appendDom();
});

function addEventListeners() {
  $('.addPet').on('submit', addPetPostRequest);
}

  //Event listeners will go here.

  $('h1').on('click', function(){
    $('h1').text('Cat Hotel');
  });
  $("#ownerForm").on("click","button",function(){
    console.log("ownerForm on click button");
  });//end ownerForm On Click button

  console.log("Hahaha, conflict!");

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

//This will be called using a response from server!!
function appendDom()
{
  for(var i = 0; i < res.length; i++)
  {
    var petInfo = res[i];
    $("#petBody").append("<tr>");
    var $el = $("#petBody").children().last();
    $el.append("<td>" + petInfo.owner + "</td>");
    $el.append("<td>" + petInfo.name + "</td>");
    $el.append("<td>" + petInfo.breed + "</td>");
    $el.append("<td>" + petInfo.color + "</td>");
    $el.append("<td><button class='delete' data-petInfo='" +
                petInfo.id +
              "'>Delete</button></td>");
    $el.append("<td><button class='edit' data-petInfo='" +
                petInfo.id +
                "' data-owner='" + petInfo.owner +
                "' data-name='" + petInfo.name +
                "' data-breed='" + petInfo.breed +
                "' data-color='" + petInfo.color +
              "'>Edit</button></td>");
    $el.append("<td><button class='delete' data-petInfo='" +
                petInfo.id +
              "'>Delete</button></td>");

  }
}
