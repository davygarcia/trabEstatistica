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
    let facContinua = 0;
    let facContinuaPorcent = 0;
    for (let i = 0; i < Math.ceil(amplitude / intervaloCalculo); i++) {
        let valorInicial;
        let valorFinal;
        let fi;
        let fr;
        let classeContinua = 1;
        if (i == 0) {
            valorInicial = menorValor;
            valorFinal = menorValor + intervaloCalculo;
        } else {
            valorInicial = arrayIndices[i - 1].valorFinal;
            valorFinal = arrayIndices[i - 1].valorFinal + intervaloCalculo;
        }

        fi = dados.filter((value) => {
            return value >= valorInicial && value < valorFinal;
        }).length;

        classeContinua += i
        facContinua += fi;
        fr = calcularFrContinua(fi, dados.length);
        facContinuaPorcent += fr;
        arrayIndices[i] = {
            valorInicial: valorInicial,
            valorFinal: valorFinal,
            indice: valorInicial + " |--- " + valorFinal,
            fi: fi,
            fr: fr,
            fac: facContinua,
            facPorc: facContinuaPorcent,
            classeContinua: classeContinua

        };
    }

    gerarTabela(arrayIndices, pegarVariavel());


    calcularMediaContinua(arrayIndices)
    calcularModaContinua(arrayIndices)
    calcularMedianaContinua(arrayIndices)


    return arrayIndices
}

function calcularFrContinua(valor, quantidadeTotal) {
    return Math.round(valor / quantidadeTotal * 100);
}

function calcularMediaContinua(vet) {

    let somaMedia = 0;
    let totalFi = 0;
    let media = 0;
    for (let i = 0; i < vet.length; i++) {
        somaMedia += ((vet[i].valorFinal + vet[i].valorInicial) / 2) * vet[i].fi;
        totalFi += vet[i].fi
    }

    media = (somaMedia / totalFi).toFixed(2)

    return media
}

function calcularModaContinua(vet) {
    let modaInicial = vet[0].fi
    let valorInicial, valorFinal, moda;

    for (let i = 0; i < vet.length; i++) {
        if (modaInicial < vet[i].fi) {
            modaInicial = vet[i].fi
            valorInicial = vet[i].valorInicial
            valorFinal = vet[i].valorFinal
        }
    }

    moda = ((valorInicial + valorFinal) / 2).toFixed(2)

    return moda
}

function calcularMedianaContinua(vet) {
    let totalFi = vet[vet.length - 1].fac;
    let posicao = totalFi / 2;
    let classe, classeAnterior;
    console.log(vet);
    console.log('Total Fi ' + totalFi);
    console.log('Valor da posição ' + posicao);

    for (let i = 0; i < vet.length; i++) {
        if (posicao <= vet[i].fac && posicao > vet[i + 1].fac) {
            console.log(vet[i]);

        }
    }

}


//  