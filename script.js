const e = document.getElementById("e");
const B = document.getElementById("B");
const G = document.getElementById("G");
const D = document.getElementById("D");
const A = document.getElementById("A");
const E = document.getElementById("E");

const cordae = new Audio('../audio/e.wav');
const cordaB = new Audio('../audio/B.wav');
const cordaG = new Audio('../audio/G.wav');
const cordaD = new Audio('../audio/D.wav');
const cordaA = new Audio('../audio/A.wav');
const cordaE = new Audio('../audio/E.wav');

let cont = [];


e.addEventListener('click', ()=>{
    cont.push('1');
    cordae.play();
    if(cont.length == 2){
        cordae.pause();
        cont = [];
    }
});

B.addEventListener('click', ()=>{
    cont.push('1');
    cordaB.play();
    if(cont.length == 2){
        cordaB.pause();
        cont = [];
    }
});

G.addEventListener('click', ()=>{
    cont.push('1');
    cordaG.play();
    if(cont.length == 2){
        cordaG.pause();
        cont = [];
    }
});

D.addEventListener('click', ()=>{
    cont.push('1');
    cordaD.play();
    if(cont.length == 2){
        cordaD.pause();
        cont = [];
    }
});

A.addEventListener('click', ()=>{
    cont.push('1');
    cordaA.play();
    if(cont.length == 2){
        cordaA.pause();
        cont = [];
    }
});

E.addEventListener('click', ()=>{
    cont.push('1');
    cordaE.play();
    if(cont.length == 2){
        cordaE.pause();
        cont = [];
    }
});
