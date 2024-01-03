function agregarNumero(numero) {
    document.getElementById('display').value += numero;
}

function calcularResultado() {
    var expresion = document.getElementById('display').value;
    var resultado;

    try {
        resultado = eval(expresion);
        mostrarResultado(resultado);
    } catch (error) {
        mostrarResultado("Error al evaluar la expresión");
    }
}

function dividir() {
    document.getElementById('display').value += '/';
}

function limpiarCalculadora() {
    document.getElementById('display').value = '';  // Limpiar el cuadro de texto
    mostrarResultado('');  // Limpiar el resultado
}

function mostrarResultado(valor) {
    document.getElementById('display').value = valor;
}

function borrarCaracter() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);  // Elimina el último carácter
}
