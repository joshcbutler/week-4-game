var game = {
    wins: 0,
    losses: 0,
    targetNumber: 0,
    counter: 0,
    crystals: {
        blueCrystalNumber: 0,
        greenCrystalNumber: 0,
        redCrystalNumber: 0,
        yellowCrystalNumber: 0
    }
};
$(document).ready(function() {
    console.log("ready!");
    resetGame();
    // push targetNumber to clickNumber div 
    $("#clickNumber").text(game.targetNumber);
    // push crystalNumber crystal images
    // on click of each crystal, make the number show up in "userScore" div
    $("#blue").on("click", function() {
        game.counter += game.crystals.blueCrystalNumber;
        $("#userScore").text(game.counter);
        resolveGameConditions();
    });
    $("#green").on("click", function() {
        game.counter += game.crystals.greenCrystalNumber;
        $("#userScore").text(game.counter);
        resolveGameConditions();
    });
    $("#red").on("click", function() {
        game.counter += game.crystals.redCrystalNumber;
        $("#userScore").text(game.counter);
        resolveGameConditions();
    });
    $("#yellow").on("click", function() {
        game.counter += game.crystals.yellowCrystalNumber;
        $("#userScore").text(game.counter);
        resolveGameConditions();
    });
});

// once userScore variable equals computer total score, then "You Win!!" and +1 point to wins appends to "winLoss" div
function resolveGameConditions() {
    if (game.counter === game.targetNumber) {
        $("#wins").text("Wins: " + ++game.wins);
        resetGame();
    }
    // if totalScore variable is greater than computer total score, then "You Lose!!"" and +1 point to Loss appends to "winLoss" div
    else if (game.counter >= game.targetNumber) {
        $("#losses").text("Losses: " + ++game.losses);
        resetGame();
    }
}

function resetGame() {
    resetTargetNumber();
    resetCrystals();
    game.counter = 0; // counter variable for userScore div
}

function resetTargetNumber() {
    // Make target number a random number between 19-120
    game.targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#clickNumber").text(game.targetNumber);
}

function resetCrystals() {
    // Anything with img tag gets a random number between 1-12 
    game.crystals.blueCrystalNumber = Math.floor(Math.random() * 12) + 1;
    game.crystals.greenCrystalNumber = Math.floor(Math.random() * 12) + 1;
    game.crystals.redCrystalNumber = Math.floor(Math.random() * 12) + 1;
    game.crystals.yellowCrystalNumber = Math.floor(Math.random() * 12) + 1;

}
