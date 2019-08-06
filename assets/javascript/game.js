//computer generates a number between 19-120
//random computer number is printed on page
//each crystal generates a hidden value between 1-12
//score counter
//number to get
//restarts after a win or loss
//wins
//goes up by one when random number is reached
//losses
//goes up by one when random number is exceeded
//total score
//random values of crystals are summed up and printed
//the sum of the random values of crystals is reset after a win or a loss

//Global variables
let wins = 0;
let losses = 0;

const number1 = Math.floor(Math.random() * 11 + 1);
const number2 = Math.floor(Math.random() * 11 + 1);
const number3 = Math.floor(Math.random() * 11 + 1);
const number4 = Math.floor(Math.random() * 11 + 1);


const numberToGetDiv = document.getElementById("numberToGet");
const winsUpdateDiv = document.getElementById("wins");
const lossesUpdateDiv = document.getElementById("losses");
const totalScoreUpdateDiv = document.getElementById("totalScore");

let computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
console.log(computerNumber);

//global functions
function reset() {
    number1 = Math.floor(Math.random() * 11 + 1);
    number2 = Math.floor(Math.random() * 11 + 1);
    number3 = Math.floor(Math.random() * 11 + 1);
    number4 = Math.floor(Math.random() * 11 + 1);
    computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    totalScoreUpdateDiv.textContent();
}

function initialize() {
    number1 = Math.floor(Math.random() * 11 + 1);
    number2 = Math.floor(Math.random() * 11 + 1);
    number3 = Math.floor(Math.random() * 11 + 1);
    number4 = Math.floor(Math.random() * 11 + 1);
    computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    totalScoreUpdateDiv.textContent("totalScore");
    winsUpdateDiv.textContent("wins");
    lossesUpdateDiv.textContent("losses");
    computerNumber.textContent("numberToGet");
}

function logic() {
    if (totalScoreUpdateDiv === computerNumber) {
        alert("You have successfully recovered Morpheus' tools. You are ready to confront Lucifer.");
        reset();
        wins++;
        winsUpdateDiv.textContent = "wins" + wins;
    } else if (totalScoreUpdateDiv > computerNumber) {
        alert("You have failed in recovering Morpheus' tools.");
        reset();
        losses++;
        lossesUpdateDiv.textContent = "losses" + losses;
    }
}

initialize() {

    document.getElementById("helmetId").addEventListener("click", function() {
        number1;
        //totalScoreUpdateDiv = totalScoreUpdateDiv + number1;
        totalScoreUpdateDiv.textContent = "totalScore" + number1;
        logic();
        console.log(number1);
    });

    document.getElementById("amuletId").addEventListener("click", function() {
        number2;
        //totalScoreUpdateDiv = totalScoreUpdateDiv + number1;
        totalScoreUpdateDiv.textContent = "totalScore" + number2;
        logic();
        console.log(number2);
    });

    document.getElementById("pouchId").addEventListener("click", function() {
        number3;
        //totalScoreUpdateDiv = totalScoreUpdateDiv + number1;
        totalScoreUpdateDiv.textContent = "totalScore" + number3;
        logic();
        console.log(number3);
    });

    document.getElementById("keyId").addEventListener("click", function() {
        number4;
        //totalScoreUpdateDiv = totalScoreUpdateDiv + number1;
        totalScoreUpdateDiv.textContent = "totalScore" + number4;
        logic();
        console.log(number4);
    });
}