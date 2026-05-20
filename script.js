// knoppen
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

// output
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

// begintekst
humanOutput.innerHTML = "Maak je keuze!";
computerOutput.innerHTML = "-";
resultOutput.innerHTML = "-";

// computer keuze bepalen
function getComputerChoice() {
    const keuzes = ["steen", "papier", "schaar"];
    const randomIndex = Math.floor(Math.random() * 3);
    return keuzes[randomIndex];
}

// spel logica
function playGame(humanChoice) {
    const computerChoice = getComputerChoice();

    // output keuzes
    humanOutput.innerHTML = humanChoice;
    computerOutput.innerHTML = computerChoice;

    // bepalen winnaar
    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "gelijkspel!";
    } 
    else if (
        (humanChoice === "steen" && computerChoice === "schaar") ||
        (humanChoice === "papier" && computerChoice === "steen") ||
        (humanChoice === "schaar" && computerChoice === "papier")
    ) {
        resultOutput.innerHTML = "jij wint!";
    } 
    else {
        resultOutput.innerHTML = "computer wint!";
    }
}

// event listeners (allemaal dezelfde functie!)
steenBtn.addEventListener("click", () => playGame("steen"));
papierBtn.addEventListener("click", () => playGame("papier"));
schaarBtn.addEventListener("click", () => playGame("schaar"));
