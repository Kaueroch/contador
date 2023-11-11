let contador = 0

document.getElementById("retorna").onclick = function(){
    contador -= 1;
    document.getElementById("label").innerHTML = contador;
}
document.getElementById("reset").onclick = function(){
    contador = 0;
    document.getElementById("label").innerHTML = contador;

}
document.getElementById("incrementa").onclick = function(){
    contador += 1;
    document.getElementById("label").innerHTML = contador;
}