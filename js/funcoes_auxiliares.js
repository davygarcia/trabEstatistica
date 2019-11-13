// Funções auxiliares
function atualizarRange(e) {
    $("#valorRange").val(e);
}

function atualizarValorMaximoRange(e) {
    if ($("#range").val > e) {
        $("#range").val(e);
        $("#valorRange").val(e);
    }

    $("#range").attr('max', e);
}

function atualizarValorRange(e) {
    $("#range").val(e);
    let valorMaximo = $("#range").attr('max');
    if (e > valorMaximo) {
        $("#selectMatrizSeparativa").val(1000);
        $("#range").attr('max', 1000);
    }
}

/* function calculaIntervaloQuantitativaContinua(dados) {
    let menorValor = dados[0],
        maiorValor = dados[0];

    //Faz um loop nos dados para definir qual o menor e maior valor
    for (let i = 0; i < dados.length; i++) {
        if (dados[i] < menorValor) {
            menorValor = dados[i];
        }

        if (dados[i] > maiorValor) {
            maiorValor = dados[i];
        }
    }   

    dados.sort();

    console.log(dados);
    

    console.log(menorValor);
    console.log(maiorValor);

    let amplitude = maiorValor - menorValor;
    let k = Math.sqrt(dados.length);
    let intervaloClasse, intervalo;


    do {        
        amplitude += 1
        if(amplitude / k == 0 ){
            intervalo = amplitude / k;
            console.log(intervalor);
            return intervalo
        } else if (amplitude / (k+1) == 0){
            intervalo = amplitude / (k+1);
            console.log(intervalor);
            return intervalo
        } else if(amplitude / (k-1) == 0){
            intervalo = amplitude / (k-1);
            console.log(intervalor);
        }
    } while (amplitude / k==0);

    



    console.log(amplitude + " " + " " + k );
    

    

    return arrayIndices;
} */

// End Funções auxiliares
/* 
let at = maiorValor - menorValor;
    //Calcula a raiz quadrada do menor valor
    let sqrt = Math.sqrt(menorValor);
    //Arredonda a raiz calculada para o proximo numero inteiro
    let sqrtRounded = Math.round(sqrt);
    //Joga o valor da divisao para o proximo numero inteiro
    let intervaloCalculo = Math.ceil(at / sqrtRounded);

    console.log(intervaloCalculo);
    

    let arrayIndices = [];

    for (let i = 0; i < Math.ceil(at / intervaloCalculo); i++) {
        if (i == 0) {
            arrayIndices[i] = {
                valorInicial: menorValor,
                valorFinal: menorValor + intervaloCalculo
            };
        } else {
            arrayIndices[i] = {
                valorInicial: arrayIndices[i - 1].valorFinal,
                valorFinal: arrayIndices[i - 1].valorFinal + intervaloCalculo,
                fi: 0
            };
        }
    } */