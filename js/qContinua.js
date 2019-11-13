function calculaQuantitativaContinua(dados) {
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

    let amplitude = maiorValor - menorValor;
    let k = Math.round(Math.sqrt(dados.length));
    let intervaloCalculo;

    // Acha o valor correto da amplitudo e do K
    do {
        amplitude += 1
        if (amplitude % k == 0) {
            k = k;

        } else if (amplitude % (k + 1) == 0) {
            k += 1;

        } else if (amplitude % (k - 1) == 0) {
            k = k - 1;
        }

    } while (amplitude % k != 0);

    intervaloCalculo = amplitude / k

    let arrayIndices = [];

    for (let i = 0; i < Math.ceil(amplitude / intervaloCalculo); i++) {
        if (i == 0) {
            arrayIndices[i] = {
                valorInicial: menorValor,
                valorFinal: menorValor + intervaloCalculo
            };
        } else {
            arrayIndices[i] = {
                valorInicial: arrayIndices[i - 1].valorFinal,
                valorFinal: arrayIndices[i - 1].valorFinal + intervaloCalculo
            };
        }
    }

    console.log(arrayIndices);
    

    return arrayIndices
}

// function calcularFicont(dados, vr_intervalo) {
//     console.log(dados);
//     console.log(vr_intervalo);
//     let novoVetor = []; 

//     for (let i = 0; i < vet.length; i++) {
//         let item = vet[i];
//         let novoIndice = arrayIndices.find(x => item.indice >= x.valorInicial
//             && item.indice < x.valorFinal);

//         if (!novoIndice.fi) {
//             novoIndice.fi = 0;
//         }

//         novoIndice.fi += Number(item.fi);
//     }

// }