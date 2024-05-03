let KoSzegely = document.getElementById("ko")
let PapSzegely = document.getElementById("papir")
let OlloSzegely = document.getElementById("ollo")
let gepKep = document.getElementById("gepKep");

let valasztasok = ["/kopapirollo/kov.jpg","/kopapirollo/papir.jpg.jpg","/kopapirollo/ollo.jpg"]


function KoKiValaszt(id) {

    KoSzegely.style.border.match("0px") ? KoSzegely.style.border = "3px solid red" : KoSzegely.style.border = "0px"
    PapSzegely.style.border = "0px";
    OlloSzegely.style.border = "0px";
    Terminator()

}

function PapKiValaszt(id) {

    PapSzegely.style.border.match("0px") ? PapSzegely.style.border = "3px solid red" : PapSzegely.style.border = "0px";
    OlloSzegely.style.border = "0px";
    KoSzegely.style.border = "0px";
    Terminator()


}

function OlloKiValaszt(id) {
    OlloSzegely.style.border.match("0px") ? OlloSzegely.style.border = "3px solid red" : OlloSzegely.style.border = "0px";
    PapSzegely.style.border = "0px";
    KoSzegely.style.border = "0px";
    Terminator()

}

function Terminator() {
    
    let gepDiv = document.getElementById("gepValasztasa")
    let gepKep = document.getElementById("gepKep");
    const szam = RandomSzam(0,2)
    gepKep.src = valasztasok[szam]


}


function RandomSzam(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min)
}

function Eredmeny() {
    let felhValaszt;
    if(KoSzegely.style.border == "3px solid red"){
        felhValaszt =KoKiValaszt.src;
    }
    else if(PapKiValaszt.style.border == "3px solid red"){
        felhValaszt =PapKiValaszt.src;
    }
    else{
        felhValaszt = OlloKiValaszt.src;
    }

    if(gepKep.src = felhValaszt){
        alert("Döntetlen");
    }

    if(gepKep.src = KoKiValaszt.src){}

}