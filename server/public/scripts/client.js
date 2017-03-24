var petInfo;
var editing = false;
var whichPet;

$(document).ready(function(){
  console.log('js sourced');
  addEventListeners();
  appendDom();
});

function addEventListeners() {
  $('.addPet').on('submit', addPetPostRequest);


  //Event listeners will go here.

  $('h1').on('click', function(){
    $('h1').text('Cat Hotel');
  });
  $("#ownerForm").on("click","button",function(){
    console.log("ownerForm on click button");
  });//end ownerForm On Click button

  $(".checkToggle").on("click", function()
  {
    if(petInfo.checkedStatus === false)
    {
      petInfo.checkedStatus = true;
    }
    else if (petInfo.checkedStatus)
    {
      petInfo.checkedStatus = false;
    }
    refreshDom();
  });

  $(".delete").on("click", function()
  {
    whichPet = $(this).data("id");
    deletePet();
  });

  $(".edit").on("click", function()
  {
    whichPet = $(this).data("name");
    editing = true;
    $("#ifEditing").text("Make your edits to:" + whichPet);
    someEditingFunction();
  });

} //End event listener function

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
    petInfo = res[i];
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
    $el.append("<td><button class='checkToggle' data-petInfo='" +
                petInfo.id +
              "'>" + petInfo.checkedStatus + "</button></td>");

  }
}

function refreshDom()
{
  // I think we will need this, but maybe I am wrong.
}

function deletePet()
{
  $.ajax(
    {
      type: "DELETE",
      url: "pets/delete/" + whichPet,
      data: whichPet,
      success: function(res)
      {
        appendDom();
      }
    });
}

function someEditingFunction()
{
  // I will add to this
}
