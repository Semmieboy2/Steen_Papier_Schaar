const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

humanOutput.innerHTML = "Maak je keuze!";
computerOutput.innerHTML = "-";
resultOutput.innerHTML = "-";


function speelSpel(keuze) {

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";

    //  switch in plaats van if
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
        default:
            computerChoice = "steen"; // fallback (voor de zekerheid)
    }

    humanOutput.innerHTML = keuze;
    computerOutput.innerHTML = computerChoice;

    // win/verlies logica 
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


// 1 event handler voor alle knoppen
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        speelSpel(button.id);
    });
});