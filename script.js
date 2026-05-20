// const bovenaan (maar 1x!) zodat we ze kunnen gebruiken in alle functies, en niet alleen in de click events
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

// begin tekst zodat er iets staat als je de pagina opent, voordat je een keuze hebt gemaakt
humanOutput.innerHTML = "Maak je keuze!";
computerOutput.innerHTML = "-";
resultOutput.innerHTML = "-";

// variabele die verandert zodat we kunnen zien wat de gebruiker heeft gekozen (steen, papier of schaar)
let humanChoice = "";

// click events zodat er iets gebeurt als je klikt op een van de knoppen
steenBtn.addEventListener("click", function(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerOutput.innerHTML = "steen";
        resultOutput.innerHTML = "gelijkspel!";
        if (randomNumber === 2) {
            computerOutput.innerHTML = "papier";
            resultOutput.innerHTML = "computer wint!";
        }
        if (randomNumber === 3) {
            computerOutput.innerHTML = "schaar";
            resultOutput.innerHTML = "jij wint!";
        }
    }
});

papierBtn.addEventListener("click", function(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerOutput.innerHTML = "papier";
        resultOutput.innerHTML = "gelijkspel!";
    }
    if (randomNumber === 2) {
        computerOutput.innerHTML = "steen";
        resultOutput.innerHTML = "jij wint!";
    }
    if (randomNumber === 3) {
        computerOutput.innerHTML = "schaar";
        resultOutput.innerHTML = "computer wint!";
    }
});

schaarBtn.addEventListener("click", function(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerOutput.innerHTML = "schaar";
        resultOutput.innerHTML = "gelijkspel!";
    }
    if (randomNumber === 2) {
        computerOutput.innerHTML = "papier";
        resultOutput.innerHTML = "jij wint!";
    }
    if (randomNumber === 3) {
        computerOutput.innerHTML = "steen";
        resultOutput.innerHTML = "computer wint!";
    }
});