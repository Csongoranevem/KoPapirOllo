let KoSzegely = document.getElementById("ko")
let PapSzegely = document.getElementById("papir")
let OlloSzegely = document.getElementById("ollo")
let gepKep = document.getElementById("gepKep");
let valasztas;
let gepValaszt;

let valasztasok = ["/kopapirollo/kov.jpg","/kopapirollo/papir.jpg.jpg","/kopapirollo/ollo.jpg"]


function KoKiValaszt(id) {

    KoSzegely.style.border = "3px solid red";
    PapSzegely.style.border = "0px";
    OlloSzegely.style.border = "0px";
    valasztas = 0;
    Terminator()

}

function PapKiValaszt(id) {

    PapSzegely.style.border = "3px solid red"
    OlloSzegely.style.border = "0px";
    KoSzegely.style.border = "0px";
    valasztas = 1;
    Terminator()


}

function OlloKiValaszt(id) {
    OlloSzegely.style.border = "3px solid red"
    PapSzegely.style.border = "0px";
    KoSzegely.style.border = "0px";
    valasztas = 2;
    Terminator()

}

function Terminator() {
    
    let gepDiv = document.getElementById("gepValasztasa")
    let gepKep = document.getElementById("gepKep");
    const szam = RandomSzam(0,2)
    gepValaszt = szam;
    gepKep.src = valasztasok[szam];

    Eredmeny();


}

let sajat = document.getElementById("sajatPont");
let sajatP = 0;
let gep = document.getElementById("gepPont");
let gepP = 0;
let nyert = document.getElementById("nyertel")



function RandomSzam(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min)
}

function Eredmeny() {
    console.log(gepValaszt, valasztas)
    if(gepValaszt == valasztas){
        nyert.textContent = "Döntetlen"
    }
    else if((gepValaszt == 2 && valasztas == 0) || (gepValaszt == 1 && valasztas == 2) || gepValaszt == 0 && valasztas == 1){
        sajatP+=1;
        sajat.textContent = "Pontjaid: " + sajatP;
        nyert.textContent = "Nyertél"
    }

    else{
        gepP+=1;
        gep.textContent = "Gép pontjai: " + gepP;
        nyert.textContent = "Vesztettél"
    }




    }

