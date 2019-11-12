function calculaIntervaloQuantitativaContinua(dados) {
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

    console.log(dados);


    console.log(menorValor);
    console.log(maiorValor);

    let amplitude = maiorValor - menorValor;
    let k = Math.sqrt(dados.length);
    let intervalo = 0
    

    do {
        amplitude += 1
        intervalo = amplitude / k;
        if (intervalo % k )

    } while (intervalo == 0);

    console.log(amplitude + " " + " " + k);
}