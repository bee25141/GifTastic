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
        $("#image-container").append(button);
};
//This function creates new buttons with the user's input
$(".submit").on("click", function(){
    console.log("click");
    var newButton = $("#newInput").val();
    buttonCreate(newButton);
});

$("button").on("click", function(){
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=VYfqZGOrTXoZ7ECrxfyLv3KRkeogYqXu&limit=10"
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  console.log(response);
});




});

});
