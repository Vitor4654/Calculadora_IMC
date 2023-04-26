//Obter botão de calcular
const botaoCalcular = document.getElementById("calc");

//Atribuir um evento de clique ao botão calcular
botaoCalcular.addEventListener("click", function CalcularIMC() {
    //Obter valores de entrada
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    //Calcular IMC
    const imc = (peso / (altura * altura)).toFixed(1);

    //Classificar com base na idade e IMC
    let classificacao = "";
    let imagem ="";

    if (idade >= 60) {
        if (imc < 18.5) {
            classificacao = "Baixo Peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Adequado ou eutrófico";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
        } else {
            resultadoDiv.innerHTML = 'Preencha todos os campos!!'
        }
    } else if (idade >= 18 && idade <= 59) {
        if (imc <= 18.5) {
            classificacao = "Baixo Peso";
        } else if (imc >= 18.5 && imc < 24.9 ) {
            classificacao = "Peso Normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Excesso de Peso";
        } else if (imc >= 30 && imc < 34.9) {
            classificacao = "Obesidade Grau I";
        } else if (imc >= 35 && imc < 40) {
            classificacao = "Obesidade Grau II";
        } else if (imc >= 41){
            classificacao = "Obesidade Grau III";
        } else {
            resultadoDiv.innerHTML = 'Preencha todos os campos!!'
        }
    } 
    else {
        if (imc < 18.5) {
            classificacao = "Baixo Peso";
            imagem = "https://i.imgur.com/k2W2QLk.jpeg";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso Normal";
            imagem = "https://i.imgur.com/LQKhnvr.jpeg";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Excesso de Peso.";
            imagem = "https://i.imgur.com/fQvqRjS.jpeg";
        } else if (imc >= 30 && imc < 34.9) {
            classificacao = "Obesidade Grau I";
            imagem = "https://i.imgur.com/Z1qwRwj.jpeg";
        } else if (imc >= 35 && imc < 39.9) {
            classificacao = "Obesidade Grau II";
            imagem = "https://i.imgur.com/KrXvHuI.jpeg";
        } else if (imc >= 40){
            classificacao = "Obesidade Grau III";
            imagem = "https://i.imgur.com/KrXvHuI.jpeg";
        } else {
            resultadoDiv.innerHTML = 'Preencha todos os campos!!'
        }
    }

    if (classificacao) {
        //Obter a div para exibir o resultado
        const resultadoDiv = document.getElementById("resultado");

        //Exibir o resultado do cálculo e classificação na div resultado
        resultadoDiv.innerHTML = nome + ", seu IMC é " + imc + " e com base na sua idade você está classificado como " + classificacao + ".";    
    } else {
        resultadoDiv.innerHTML = 'Preencha todos os campos!!'
    }
    
});
