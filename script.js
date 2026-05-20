// dit zorgt ervoor dat de elementen in de HTML worden opgehaald en in JavaScript kunnen worden gebruikt
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

// elementen voor de score 
const humanScoreOutput = document.querySelector("#humanScore");
const computerScoreOutput = document.querySelector("#computerScore");

humanOutput.innerHTML = "Maak je keuze!";
computerOutput.innerHTML = "-";
resultOutput.innerHTML = "-";

// score bijhouden
let humanScore = 0;
let computerScore = 0;

// speel functie die wordt aangeroepen wanneer een knop wordt geklikt
function speelSpel(keuze) {

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";

    switch (randomNumber) {
        case 1:
            computerChoice = "steen";
            break;
        case 2:
            computerChoice = "papier";
            break;
        case 3:
            computerChoice = "schaar";
            break;
    }

    humanOutput.innerHTML = keuze;
    computerOutput.innerHTML = computerChoice;

    if (keuze === computerChoice) {
        resultOutput.innerHTML = "gelijkspel!";
    }
    else if (keuze === "steen" && computerChoice === "schaar") {
        resultOutput.innerHTML = "jij wint!";
        humanScore++; // score omhoog
    }
    else if (keuze === "papier" && computerChoice === "steen") {
        resultOutput.innerHTML = "jij wint!";
        humanScore++;
    }
    else if (keuze === "schaar" && computerChoice === "papier") {
        resultOutput.innerHTML = "jij wint!";
        humanScore++;
    }
    else {
        resultOutput.innerHTML = "computer wint!";
        computerScore++; // score computer omhoog
    }

    // score laten zien op scherm
    humanScoreOutput.innerHTML = humanScore;
    computerScoreOutput.innerHTML = computerScore;
}


// 1 event handler voor alle knoppen 
const buttons = document.querySelectorAll("#steen, #papier, #schaar");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        speelSpel(button.id);
    });
});
