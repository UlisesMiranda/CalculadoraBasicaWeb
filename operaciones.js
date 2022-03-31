
console.log("operaciones basicas");

let textoOperacion = document.getElementById('textoOperacion');

let no1 = document.getElementById('no1');
let no2 = document.getElementById('no2');
let no3 = document.getElementById('no3');
let no4 = document.getElementById('no4');
let no5 = document.getElementById('no5');
let no6 = document.getElementById('no6');
let no7 = document.getElementById('no7');
let no8 = document.getElementById('no8');
let no9 = document.getElementById('no9');
let no0 = document.getElementById('no0');

let noPunto = document.getElementById('noPunto');
let noPI = document.getElementById('noPI');

let noDEL = document.getElementById('noDEL');
let noAC = document.getElementById('noAC');

let noMulti = document.getElementById('noMulti');
let noDivi = document.getElementById('noDivi');
let noSuma = document.getElementById('noSuma');
let noResta = document.getElementById('noResta');

let noAns = document.getElementById('noAns');

let noIgual = document.getElementById('noIgual');

let numero = 0;
let ans = 0;
let operador;
let operadorAnterior = "igual";



no1.addEventListener('click', function() {
    textoOperacion.value += "1";
});
no2.addEventListener('click', function() {
    textoOperacion.value += "2";
});
no3.addEventListener('click', function() {
    textoOperacion.value += "3";
});
no4.addEventListener('click', function() {
    textoOperacion.value += "4";
});
no5.addEventListener('click', function() {
    textoOperacion.value += "5";
});
no6.addEventListener('click', function() {
    textoOperacion.value += "6";
});
no7.addEventListener('click', function() {
    textoOperacion.value += "7";
});
no8.addEventListener('click', function() {
    textoOperacion.value += "8";
});
no9.addEventListener('click', function() {
    textoOperacion.value += "9";
});
no0.addEventListener('click', function() {
    textoOperacion.value += "0";
});

noPunto.addEventListener('click', function() {
    textoOperacion.value += ".";
});

noPI.addEventListener('click', function() {
    textoOperacion.value += ("3.1416");
})


noDEL.addEventListener('click', function() {
    let textDel = textoOperacion.value.slice(0, -1);
    textoOperacion.value = textDel;
});
noAC.addEventListener('click', function() {
    textoOperacion.value = '';
});


noMulti.addEventListener('click', function() {

    numero = parseFloat(textoOperacion.value);;
    operador = "multi";
    realizarOperacion();

    textoOperacion.value = '';
});
noDivi.addEventListener('click', function() {

    numero = parseFloat(textoOperacion.value);;
    operador = "divi";
    realizarOperacion();

    textoOperacion.value = '';
});
noSuma.addEventListener('click', function() {
    numero = parseFloat(textoOperacion.value);
    operador = "suma";
    realizarOperacion();
    
    textoOperacion.value = '';
});
noResta.addEventListener('click', function() {

    numero = parseFloat(textoOperacion.value);
    operador = "menos";
    realizarOperacion();

    textoOperacion.value = '';
});

noAns.addEventListener('click', function() {
    textoOperacion.value += ans;
});

noIgual.addEventListener('click', function() {  

    numero = parseFloat(textoOperacion.value);
    operador = "igual";
    realizarOperacion();

    textoOperacion.value = ans;
});


function realizarOperacion () {

    if(operadorAnterior == "igual") {
        ans = numero;
    }
    else {
        switch (operadorAnterior) {
            case "suma" : ans += numero; break;
            case "resta" : ans -= numero; break;
            case "multi" : ans *= numero; break;
            case "divi" : ans /= numero; break;
        
            default:
                break;
        }
    }
    operadorAnterior = operador;
}



