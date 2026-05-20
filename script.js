// We selecteren de knoppen en de output elementen
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");


const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

// We zetten de output elementen klaar voor het begin van het spel
humanOutput.innerHTML = "Maak je keuze!";
computerOutput.innerHTML = "-";
resultOutput.innerHTML = "-";


// Deze functie krijgt de keuze van de speler mee als parameter
function speelSpel(keuze) {

    
    const randomNumber = Math.floor(Math.random() * 3) + 1;

   //de keuze vn de computer bepalen op basis van een random getal
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

 // dit checkt of het gelijkspel is, 
    if (keuze === computerChoice) {
        resultOutput.innerHTML = "gelijkspel!";
    }

    // Daarna checken we alle situaties waarin de speler wint
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



// listener toevoegen aan de knoppen zodat ze kunnen reageren op clicks
steenBtn.addEventListener("click", function() {
    speelSpel("steen");
});

papierBtn.addEventListener("click", function() {
    speelSpel("papier");
});

schaarBtn.addEventListener("click", function() {
    speelSpel("schaar");
});