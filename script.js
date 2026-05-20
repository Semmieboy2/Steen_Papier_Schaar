const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

humanOutput.innerHTML = "Maak je keuze!";
computerOutput.innerHTML = "-";
resultOutput.innerHTML = "-";


// functie voor het spel
function speelSpel(keuze) {

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";

    if (randomNumber === 1) {
        computerChoice = "steen";
    }
    if (randomNumber === 2) {
        computerChoice = "papier";
    }
    if (randomNumber === 3) {
        computerChoice = "schaar";
    }

    humanOutput.innerHTML = keuze;
    computerOutput.innerHTML = computerChoice;

    if (keuze === computerChoice) {
        resultOutput.innerHTML = "gelijkspel!";
    }
    else if (keuze === "steen" && computerChoice === "schaar") {
        resultOutput.innerHTML = "jij wint!";
    }
    else if (keuze === "papier" && computerChoice === "steen") {
        resultOutput.innerHTML = "jij wint!";
    }
    else if (keuze === "schaar" && computerChoice === "papier") {
        resultOutput.innerHTML = "jij wint!";
    }
    else {
        resultOutput.innerHTML = "computer wint!";
    }
}


// 👉 alle knoppen in 1 keer selecteren
const buttons = document.querySelectorAll("button");

// 👉 1 event handler voor alles
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        speelSpel(button.id); // gebruikt id (steen/papier/schaar)
    });
});
``