var targetNumber = 0;
var wins = 0;
var losses = 0;
var totalScoreNumber = 0;

var gem1 = Math.floor(Math.random() * 11) + 1;
var gem2 = Math.floor(Math.random() * 11) + 1;
var gem3 = Math.floor(Math.random() * 11) + 1;
var gem4 = Math.floor(Math.random() * 11) + 1;
var targetNumber = Math.floor(Math.random() * 120) + 19;

$(document).ready(function() {
  var startGame = function() {
    var score = 0;

    targetNumber = Math.floor(Math.random() * 120) + 19;
    console.log(targetNumber);
    gem1.value = Math.floor(Math.random() * 12) + 1;
    console.log(gem1);
    gem2.value = Math.floor(Math.random() * 12) + 1;
    console.log(gem2);
    gem3.value = Math.floor(Math.random() * 12) + 1;
    console.log(gem3);
    gem4.value = Math.floor(Math.random() * 12) + 1;
    console.log(gem4);
    $("#targetNumber").html(targetNumber);
    $("#score").html(score);
  };

  resetGame();

  $(".gem1").click(function() {
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
});
