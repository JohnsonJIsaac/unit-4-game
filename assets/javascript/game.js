//computer generates a number between 19-120
//each crystal generates a hidden value between 1-12
//score counter
//number to get
//wins
//losses
//total score

//Global variables
let wins = 0;
let losses = 0;

const numberToGetDiv = document.getElementById("numberToGet");
const winsUpdateDiv = document.getElementById("wins");
const lossesUpdateDiv = document.getElementById("losses");
const totalScoreUpdate = document.getElementById("totalScore");

let computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
console.log(computerNumber);

//global functions

//Main Functions
document.getElementById(".helmetImage").addEventListener("click", function() {
    alert("you clicked a helmet made from the head of a dead god");
});