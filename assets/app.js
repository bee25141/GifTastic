$(document).ready(function () {
  //This is the array of vacation destinations
  var topics = ["Cancun", "Cozumel", "Hawaii", "Aruba", "Bermuda", "Dominican Republic", "Jamaica", "St. Maarten", "Belize", "Tahiti", ];
  for (i = 0; i < topics.length; i++) {
    buttonCreate(topics[i]);
  };
  //This function creates buttons
  function buttonCreate(buttonText) {
    var button = $("<button>");
    button.text(buttonText);
    button.attr("value", buttonText);
    button.addClass("button");
    $("#buttons-view").append(button);
  };
  //This function creates new buttons with the user's input
  $(".submit").on("click", function () {
    var newButton = $("#newInput").val();
    buttonCreate(newButton);
  });
  /*This function triggers the api call when the buttons are clicked, and displays
  the gifs and gif ratings*/
  $(document).on("click", ".button", function () {
    var queryInput = $(this).val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + queryInput + "&api_key=VYfqZGOrTXoZ7ECrxfyLv3KRkeogYqXu&limit=10&rating=pg";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var results = response.data;
      for (i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var rating = results[i].rating;
        var gifRating = $("<p>");
        gifRating.text("Rating: "+ rating);
        var gifImage = $("<img>").attr("src", results[i].images.fixed_height.url);
        gifImage.attr("data-animate", results[i].images.fixed_height.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-state", "animate");
        gifImage.addClass("gif");
        
        gifDiv.append(gifRating);
        gifDiv.append(gifImage);
        gifDiv.addClass("gif");
        $("#image-container").prepend(gifDiv);
      }
    });
  });
  //This function changes the url source and data state to stop and play the gifs
  $(document).on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});