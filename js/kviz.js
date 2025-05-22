const pitanja = [
    {
        tekst: "Koji je glavni grad Francuske?",
        odgovori: [ "Pariz", "Berlin", "Madrid", "Rim" ],
        tacan: "Pariz"
    },
    {
        tekst: "Koji je najveći okean na svetu?",
        odgovori: [ "Atlantski okean", "Indijski okean", "Tihi okean", "Severni okean" ],
        tacan: "Tihi okean"
    },
    {
        tekst: "Koja je najviša planina na svetu?",
        odgovori: [ "K2", "Kilimandžaro", "Mont Everest", "Alpi" ],
        tacan: "Mont Everest"
    },
    {
        tekst: "Koja je najduža reka na svetu?",
        odgovori: [ "Amazon", "Nil", "Misisipi", "Jangce" ],
        tacan: "Nil"
    }
]

let indeksPitanja = 0;
let poeni = 0;

const pitanjeElement = document.getElementById("pitanje");
const odgovoriElement = document.getElementById("odgovori");
const dugmeDaljeElement = document.getElementById("dalje");
const rezultatElement = document.getElementById("rezultat");
function prikaziPitanje() {
dugmeDaljeElement.style.display = "none";

pitanjeElement.innerHTML = pitanja[indeksPitanja].tekst;
odgovoriElement.innerHTML = "";
pitanja[indeksPitanja].odgovori.forEach((odgovor, index) => {
    const dugme = document.createElement("button");
    dugme.innerHTML = odgovor;
    dugme.addEventListener("click", () => {
        if(odgovor == pitanja[indeksPitanja].tacan) {
            poeni++;
            dugme.style.backgroundColor = "green";
            dugmeDaljeElement.style.display = "block";
            alert("Tačan odgovor!");
        }
        else{
            dugme.style.backgroundColor = "red";
            dugmeDaljeElement.style.display = "block";
            alert("Netačan odgovor! Tačan odgovor je: " + pitanja[indeksPitanja].tacan);
        }
    });
    odgovoriElement.appendChild(dugme);
});
}
dugmeDaljeElement.addEventListener("click", () => {
    indeksPitanja++;
    if(indeksPitanja == pitanja.length) {
        pitanjeElement.style.display = "none";
        odgovoriElement.style.display = "none";
        dugmeDaljeElement.style.display = "none";
            rezultatElement.style.display = "block";
            rezultatElement.innerHTML = `Kraj kviza! Osvojili ste ${poeni} poena.`;

    }
    else{
 prikaziPitanje();
    }
   
});
prikaziPitanje();