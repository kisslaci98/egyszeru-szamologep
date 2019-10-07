"use strict"

function osszead() {
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = +elso.value + +masodik.value;
    document.getElementById("eredmeny").value = kiir;
}
function kivonas() {
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = +elso.value - +masodik.value;
    document.getElementById("eredmeny").value = kiir;
}
function szorzas() {
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");
    let kiir = +elso.value * +masodik.value;
    document.getElementById("eredmeny").value = kiir;
}
function osztas() {
    let elso = document.getElementById("elso");
    let masodik = document.getElementById("masodik");

    if (masodik == 0) {
        let kiir = 0;
    }
    else {
        let kiir = +elso.value / +masodik.value;
    }
    let kiir = +elso.value / +masodik.value;
    document.getElementById("eredmeny").value = kiir;
}