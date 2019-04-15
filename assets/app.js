$(document).ready(function(){
//This is the array of vacation destinations
var topics = ["Cancun", "Cozumel", "Hawaii", "Aruba", "Bermuda", "Dominican Republic", "Jamaica", "St. Maarten", "Belize", "Tahiti",];
for (i=0; i<topics.length; i++){
    buttonCreate(topics[i]);
};
//This function creates buttons
function buttonCreate(buttonText){
        var button = $("<button>");
        button.text(buttonText);
        debugger;
        button.attr("value", buttonText);
        $("#buttons-view").append(button);
};
//This function creates new buttons with the user's input
$(".submit").on("click", function(){
    console.log("click");
    var newButton = $("#newInput").val();
    buttonCreate(newButton);
});

$("button").on("click", function(){
var queryInput = $(this).val();
debugger;
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + queryInput + "&api_key=VYfqZGOrTXoZ7ECrxfyLv3KRkeogYqXu&limit=10";
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  var results = response.data;
  for (i=0; i<results.length; i++){
      console.log(results);
      var gifDiv = $("<div>");
      var rating = $("<p>" + results[i].images.rating);
      var gifImage = $("<img>").attr("src", results[i].images.fixed_height.url);
        // debugger;
      $("gifDiv").append(gifImage + rating);
      $("#image-container").prepend(gifImage);
  }
});




});

});
