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
    // debugger;
    button.attr("value", buttonText);
    button.addClass("button");
    $("#buttons-view").append(button);
  };
  //This function creates new buttons with the user's input
  $(".submit").on("click", function () {
    console.log("click");
    var newButton = $("#newInput").val();
    buttonCreate(newButton);
  });

  $(document).on("click", ".button", function () {
    var queryInput = $(this).val();
    // debugger;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + queryInput + "&api_key=VYfqZGOrTXoZ7ECrxfyLv3KRkeogYqXu&limit=10&rating=pg";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      var results = response.data;
      for (i = 0; i < results.length; i++) {
        // console.log(results[i].rating);
        var gifDiv = $("<div>");

        var rating = results[i].rating;
        // debugger;
        var gifRating = $("<p>");
        // console.log(results[i].rating);
        gifRating.text("Rating: "+ rating);
        console.log(gifRating);
        var gifImage = $("<img>").attr("src", results[i].images.fixed_height.url);
        gifImage.attr("data-animate", results[i].images.fixed_height.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-state", "animate");
        gifImage.addClass("gif");
        
        gifDiv.append(gifRating);
        // debugger;
        gifDiv.append(gifImage);
        gifDiv.addClass("gif");
        $("#image-container").prepend(gifDiv);
      }
    });


  });

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