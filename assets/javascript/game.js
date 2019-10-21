var targetScore = 0;
var wins = 0;
var losses = 0;
var currentScore = 0;

var gem1 = Math.floor(Math.random() * 12) + 1;
var gem2 = Math.floor(Math.random() * 12) + 1;
var gem3 = Math.floor(Math.random() * 12) + 1;
var gem4 = Math.floor(Math.random() * 12) + 1;

var startGame = function() {
  var currentScore = 0;

  targetScore = Math.floor(Math.random() * 120) + 19;
  console.log(targetScore);
  gem1.value = Math.floor(Math.random() * 12) + 1;
  console.log(gem1);
  gem2.value = Math.floor(Math.random() * 12) + 1;
  console.log(gem2);
  gem3.value = Math.floor(Math.random() * 12) + 1;
  console.log(gem3);
  gem4.value = Math.floor(Math.random() * 12) + 1;
  console.log(gem4);
  $("#targetScore").html(targetScore);
  $("#score").html(currentScore);
};

startGame();

//jQuery Functions
$(".gem1").click(function() {
  alert("test");
});
$(".gem2").click(function() {
  alert("test");
});
$(".gem3").click(function() {
  alert("test");
});
$(".gem4").click(function() {
  alert("test");
});
