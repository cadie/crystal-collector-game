$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var currentScore = 0;
  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var randomNumber = getRandomNumber(19, 120);
  $("#number-to-match").html(randomNumber);
  $("#current-score").html(currentScore);
  var crystal1 = getRandomNumber(1, 12);
  var crystal2 = getRandomNumber(1, 12);
  var crystal3 = getRandomNumber(1, 12);
  var crystal4 = getRandomNumber(1, 12);

  var newValues = function() {
    crystal1 = getRandomNumber(1, 12);
    crystal2 = getRandomNumber(1, 12);
    crystal3 = getRandomNumber(1, 12);
    crystal4 = getRandomNumber(1, 12);
    $("#current-score").html(currentScore);
  };

  $("#crystal-1").on("click", function() {
    currentScore += crystal1;
    $("#current-score").html(currentScore);
    updateScore();
  });
  $("#crystal-2").on("click", function() {
    currentScore += crystal2;
    $("#current-score").html(currentScore);
    updateScore();
  });
  $("#crystal-3").on("click", function() {
    currentScore += crystal3;
    $("#current-score").html(currentScore);
    updateScore();
  });
  $("#crystal-4").on("click", function() {
    currentScore += crystal4;
    $("#current-score").html(currentScore);
    updateScore();
  });

  var updateScore = function() {
    if (randomNumber === currentScore) {
      wins++;
      $("#wins").html(wins);
      $("#number-to-match").empty();
      randomNumber = getRandomNumber(19,120);
      $("#number-to-match").html(randomNumber);
      currentScore = 0;
      $("#current-score").html(currentScore)
      newValues();
    }
    if (randomNumber < currentScore) {
      losses++;
      $("#losses").html(losses);
      $("#number-to-match").empty();
      randomNumber = getRandomNumber(19,120);
      $("#number-to-match").html(randomNumber);
      currentScore = 0;
      $("#current-score").html(currentScore)
      newValues();
    }

  }

});
