// INSTRUCTIONS
// --------------------------------------
// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

// We chose animals for our theme, but you can make a list to your own liking.
// Your app should take the topics in this array and create buttons in your HTML.

// Try using a loop that appends a button for each string in the array.
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// Rejoice! You just made something really cool.


/*create an array of keywords that will be the categories used to search for images 
q - search query term or phrase
limit - (optional) number of results to return, maximum 100. Default 25.  ASSIGNMENT LIMIT IS 10
rating - (optional) limit results to those rated (y,g, pg, pg-13 or r).


Parameters


Below are code samples in JavaScript and the command line on connecting to the API to make a search query for "ryan gosling".

#javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=10");
xhr.done(function(data) { console.log("success got data", data); });

// host = api.giphy.com/v1/stickers/search?q=&*/

var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&limit=10");
 $.ajax({
          url: queryURL,
          method: "GET"
        })

//VARIABLES
//-----------------------------------------
//initial theme of topics to search for: tea party
var topics =["tea cups", "tea party", "scones", "quiche", "chandelier", "tea", "tea sandwich", "champagne"];





//DECLARE FUNCTIONS
// -----------------------------------------
function renderButtons() {

        // Deleting the topic buttons prior to adding new topic buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#topics-view").empty();

        // Looping through the array of topics
        for (var i = 0; i < topics.length; i++) {

          // Then dynamically generating buttons for each topic in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("teatopic");
          // Adding a data-attribute with a value of the topic at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the topic at index i
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#buttonArea").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#submitBtn").on("click", function(event) {
       // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var topic = $("#topic-input").val().trim();
        // The topic from the textbox is then added to our array
        topics.push(topic);

        // calling renderButtons which handles the processing of our topic array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of topics
      renderButtons();    



// MAIN PROCESSES
// ------------------------------------------
for (var i=0; i < topics.length; i++){
	$("#buttons").append("<button data-tearoom ='" + topics[i] + "'>" + topics[i] + "</button>");
};
