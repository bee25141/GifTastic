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
        // debugger;
        button.attr("value", buttonText);
        button.addClass("button");
        $("#buttons-view").append(button);
};
//This function creates new buttons with the user's input
$(".submit").on("click", function(){
    console.log("click");
    var newButton = $("#newInput").val();
    buttonCreate(newButton);
});

$(document).on("click", ".button", function(){
var queryInput = $(this).val();
// debugger;
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + queryInput + "&api_key=VYfqZGOrTXoZ7ECrxfyLv3KRkeogYqXu&limit=10";
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  var results = response.data;
  for (i=0; i<results.length; i++){
      // console.log(results[i].rating);
      var gifDiv = $("<div>");
      // debugger;
      var rating = $("<p>" + results[i].rating);
      var gifImage = $("<img>").attr("src", results[i].images.fixed_height.url);
      console.log(results[i].images.fixed_height);
        // debugger;
      $("gifDiv").append(gifImage + rating);
      $("gifDiv").addClass("gif");
      $("#image-container").prepend(gifImage);

  }
});

});
$(".gif").on("click", function() {
  var state = $(this).attr("data-state");
 
  if (state === "still") {
    $(this).attr("src", $(this).attr(results[i].images.fixed_height.url));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr(results[i].images.fixed_height_still.url));
    $(this).attr("data-state", "still");
  }
});

});
