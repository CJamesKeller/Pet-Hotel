var petInfo;
var editing = false;
var whichPet;

$(document).ready(function(){
  console.log('js sourced');
  getData();
  addEventListeners();
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

  console.log("Hahaha, conflict!");

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

}//ends addEventListeners

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

//This will be called using a response from server!!
function displayData(dataArray)
{
  for(var i = 0; i < dataArray.length; i++)
  {
    var petInfo = dataArray[i];
    $("#petBody").append("<tr>");
    var $el = $("#petBody").children().last();
    $el.append("<td>" + petInfo.first_name + "</td>");
    $el.append("<td>" + petInfo.last_name + "</td>");
    $el.append("<td>" + petInfo.breed + "</td>");
    $el.append("<td>" + petInfo.color + "</td>");
    $el.append("<td><button class='delete' data-petInfo='" +
    petInfo.id +
    "'>Delete</button></td>");
    $el.append("<td><button class='edit' data-petInfo='" +

                petInfo.id +
                "' data-firstName='" + petInfo.first_name +
                "' data-lastName='" + petInfo.last_name +
                "' data-breed='" + petInfo.breed +
                "' data-color='" + petInfo.color +
              "'>Edit</button></td>");

    $el.append("<td><button class='delete' data-petInfo='" +
    petInfo.id +
    "'>Delete</button></td>");

  }
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
