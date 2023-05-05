//Obter botão de calcular
const botaoCalcular = document.getElementById("calc");

//Atribuir um evento de clique ao botão calcular
botaoCalcular.addEventListener("click", function CalcularIMC() {
    //Obter valores de entrada
    var nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const img = document.getElementById('imc-corporal');
    const resultado = document.getElementById("resultado");
    //Calcular IMC
    const imc = (peso / (altura * altura)).toFixed(1);

    //Classificar com base na idade e IMC
    let classificacao = "";
    

    if (idade >= 60) {
        if (imc < 18.5) {
            classificacao = "Baixo Peso";
            img.src = "./imagens/BaixoPeso.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Adequado ou eutrófico";
            img.src = "./imagens/PesoNormal.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
            img.src = "./imagens/ExcessoPeso.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else {
            resultado.textContent = 'Preencha todos os campos!!';
        }
    } else if (idade >= 18 && idade <= 59) {
        if (imc <= 18.5) {
            classificacao = "Baixo Peso";
            img.src = "./imagens/BaixoPeso.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 18.5 && imc < 24.9 ) {
            classificacao = "Peso Normal";
            img.src = "./imagens/PesoNormal.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Excesso de Peso";
            img.src = "./imagens/ExcessoPeso.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 30 && imc < 34.9) {
            classificacao = "Obesidade Grau I";
            img.src = "./imagens/Obesidade1.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 35 && imc < 40) {
            classificacao = "Obesidade Grau II";
            img.src = "./imagens/Obesidade2.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 41){
            classificacao = "Obesidade Grau III";
            img.src = "./imagens/Obesidade3.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else {
            resultado.textContent = 'Preencha todos os campos!!';
        }
    } 
    else {
        if (imc < 18.5) {
            classificacao = "Baixo Peso";
            img.src = "./imagens/BaixoPeso.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso Normal";
            imagem = "./imagens/PesoNormal.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Excesso de Peso.";
            imagem = "./imagens/ExcessoPeso.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 30 && imc < 34.9) {
            classificacao = "Obesidade Grau I";
            imagem = "./imagens/Obesidade1.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 35 && imc < 39.9) {
            classificacao = "Obesidade Grau II";
            imagem = "./imagens/Obesidade2.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else if (imc >= 40){
            classificacao = "Obesidade Grau III";
            imagem = "./imagens/Obesidade3.jpeg"
            img.style.width = '320px';
            img.style.height = '100%';
        } else {
            resultado.textContent = 'Preencha todos os campos!!';
        }
    }

    if (classificacao) {
        //Obter a div para exibir o resultado
        const resultadoDiv = document.getElementById("resultado");

        //Exibir o resultado do cálculo e classificação na div resultado
        resultadoDiv.innerHTML = nome + ", seu IMC é " + imc + " e com base na sua idade você está classificado como " + classificacao + ".";    
    } else {
        resultado.textContent = 'Preencha todos os campos!!';
    }
    
});
