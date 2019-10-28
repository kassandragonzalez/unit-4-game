// Global variables for game state

console.log("HEY!");

var targetNumber = 0;
var wins = 0;
var losses = 0;
var totalScoreNumber = 0;
var gem1Value;
var gem2Value;
var gem3Value;
var gem4Value;




// Gem elements
var gemOne = $(".gem1");

// Set values function
var setValues = function() {
  // Random values for gems
  gem1Value = Math.floor(Math.random() * 11) + 1;
  gem2Value = Math.floor(Math.random() * 11) + 1;
  gem3Value = Math.floor(Math.random() * 11) + 1;
  gem4Value = Math.floor(Math.random() * 11) + 1;
  targetNumber = Math.floor(Math.random() * 120) + 19;

}



// Function runs once document is loaded
$(document).ready(function() {
  //
  var startGame = function() {
    setValues()
    var score = 0;
    gemOne.attr("value", gem1Value);
    console.log(gemOne);

    // targetNumber = Math.floor(Math.random() * 120) + 19;
    // console.log(targetNumber);
    // gem1.value = Math.floor(Math.random() * 12) + 1;
    // console.log(gem1);
    // gem2.value = Math.floor(Math.random() * 12) + 1;
    // console.log(gem2);
    // gem3.value = Math.floor(Math.random() * 12) + 1;
    // console.log(gem3);
    // gem4.value = Math.floor(Math.random() * 12) + 1;
    // console.log(gem4);
    // $("#targetNumber").html(targetNumber);
    // $("#score").html(score);
  };

  // Set game values

  // Listen for click on element

  // Get value for clicked element

  // resetGame();

  gemOne.click(function() {
    console.log(".score");
  });
  $(".gem2").click(function() {
    console.log(".score");
  });
  $(".gem3").click(function() {
    console.log(".score");
  });
  $(".gem4").click(function() {
    console.log(".score");
  });

  function winGame() {
    alert("You Won!");
    wins++;
    $(".win").text("Wins: " + wins);
  }

  function loseGame() {
    alert("You lose!");
    losses++;
    $(".loss").text("Losses: " + losses);
  }

  startGame();
});
