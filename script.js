function verificarNumero() {
    const numero = document.getElementById('numero').value;
    
    if (numero === "") {
        alert("Por favor, insira um número.");
    } else if (numero > 0) {
        alert("O número é positivo.");
    } else if (numero < 0) {
        alert("O número é negativo.");
    } else {
        alert("O número é zero.");
    }
}
