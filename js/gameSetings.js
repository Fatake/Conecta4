//
var cuadroEscrituraJ1 = "J1name";
var cuadroEscrituraJ2 = "J2name";

var labelJ1 = "labelJ1";
var labelJ2 = "labelJ2";


function estableceNombreJ1() {
    var j1 = document.getElementById(cuadroEscrituraJ1);
    var j1Name = document.getElementById(labelJ1);
    j1Name.insertAdjacentText(j1.textContent);
}