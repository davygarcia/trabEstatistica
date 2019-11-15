$('#btn_entrar').on('click', function () { window.location.href = "main.html"; }) // Abri tela inicial
/***********              Pegando o nome da variavel do HTML                      *************** */
function pegarVariavel() { return variavel = $('#variavel').val(); }

/***********              Ordernar o vetor em ordem crescente                      *************** */
function selecaoDireta(dados) {
    let menor, aux, posi;
    for (let i = 0; i < dados.length; i++) {
        menor = dados[i];
        posi = i;
        for (let j = i + 1; j < dados.length; j++) {
            if (dados[j] < menor) {
                menor = dados[j];
                posi = j;
            }
        }
        aux = dados[i];
        dados[i] = dados[posi];
        dados[posi] = aux;
    }
    return dados
}

/***********              Calculando Frequência Simples                       *************** */
function calcularFi(dados) {
    let objDados = {};
    let vet = [];

    /***********              Começa a calcular o Fi                      *************** */
    while (dados.length > 0) {

        objDados.indice = dados[0];
        objDados.fi = 0;
        objDados.fr = 0;
        objDados.fac = 0;
        objDados.facPorc = 0;

        for (var j = 0; j < dados.length; j++) {
            if (dados[0] == dados[j]) {
                objDados.fi++;
            }
        }

        // Filtra o indice e remove duplicidade Arrow Function
        dados = dados.filter(element => {
            return element != dados[0];
        });

        vet.push({ ...objDados }); // Adiciona tudo dentro de um novo objeto usando Spread
    }
    return vet
}

/***********              Calcular o Fr%                      *************** */
function calcularFr(vet) {
    // Soma todos os valores do Fi
    let soma = 0;
    for (var i = 0; i < vet.length; i++) {
        soma += vet[i].fi;
    }

    // Calculando  o Fr%
    for (var i = 0; i < vet.length; i++) {
        vet[i].fr = Math.round((vet[i].fi / soma) * 100);
    }
}

/***********              Calcular Fac                      *************** */
function calcularFac(vet) {
    let somaFac = 0;
    for (let i = 0; i < vet.length; i++) {
        somaFac += vet[i].fi
        vet[i].fac = somaFac;
    }

}

/***********              Calcular Fac%                      *************** */

function calcularFacPorc(vet) {
    let somaFacPorc = 0;
    for (let i = 0; i < vet.length; i++) {
        somaFacPorc += vet[i].fr
        vet[i].facPorc = somaFacPorc;
    }
}

/***********              Calcular Media                      *************** */
function calcularMedia(vet) {
    let denominador = 0;
    let numerador = 0;
    let media = 0;
    // Calculando o denominador
    for (let i = 0; i < vet.length; i++) {
        denominador += vet[i].fi;
    }

    // Calculando o numerador
    for (let i = 0; i < vet.length; i++) {
        numerador += vet[i].indice * vet[i].fi
    }

    //  Calcular a Média ponderada
    media = (numerador / denominador).toFixed(2);
    return media
}

/***********              Calculo a moda                      *************** */
function calcularModa(vet) {
    let pmoda = vet[0].fi
    let moda = [];

    // Pego a maior frequencia do FI 
    for (let i = 0; i < vet.length; i++) {
        if (pmoda < vet[i].fi) {
            pmoda = vet[i].fi
        }

    }
    // Comparar a maior moda com as outras se tiver duas ou mais retorna ela
    for (let i = 0; i < vet.length; i++) {
        if (pmoda == vet[i].fi) {
            moda.push(vet[i].indice);
        }
    }
    return moda;
}

/***********              Calcular Mediana                      *************** */
function calcularMediana(vet) {
    let mediana = [];

    // Pego o valor final do FAC para depois saber se é impar ou par.
    let somaFac = 0;
    for (let i = 0; i < vet.length; i++) {
        somaFac += vet[i].fi
    }

    // Verifico se é par ou impar da quantidade do FAC para pode calcular a mediana
    if (somaFac % 2 !== 0) {
        mediana.push((somaFac + 1) / 2);
    } else {
        mediana.push(somaFac / 2);
        mediana.push(Math.round(((somaFac + 1) / 2)));

    }

    return mediana;
}

function elementoMediana(mediana, dados) {
    let medianas = mediana.toString().split(",");
    let elementosMediana = [];

    for (let i = 0; i < medianas.length; i++) {
        elementosMediana.push(dados[medianas[i]]);
    }

    if (elementosMediana.length % 2 == 0) {
        elementosMediana = (elementosMediana[0] + elementosMediana[1]) / 2;

    }

    return elementosMediana
}

function calcularDesvioPadrao(media) {
    console.log('Media' + media);

}

/***********              Inicando função                      *************** */
function calcular() {
    // Declaração das variaveis
    let variavel, dados, moda, media, vet, mediana, desvioPadrao;

    // Pegando os valores do HTML e gerando um valor 
    let valores = $('#valores').val();
    dados = valores.split(';');

    // Descobrir se a Variavel é Quantitativa ou Qualitativa
    if (isNaN(dados[0]) != true) {         // Quantitativa == Números
        for (let i = 0; i < dados.length; i++) {
            dados[i] = parseFloat(dados[i]);
        }
        selecaoDireta(dados);
        vet = calcularFi(dados); //Calcula a Frequência simples e retorna os valores em vetor de objetos      

        // Validando se é Quantitativa Discreta ou continua
        if (vet.length < 8) {
            console.log("Quantitativa Discreta");
            //Quantitativa Discreta (ordem de crescente): moda, media, mediana, tabela, graficos, desvio padrão e coeficiente de variação

            // Chama as funções             
            variavel = pegarVariavel();     //Pega do HTML o nome da variavel                                         
            calcularFr(vet);                // Calcula a Fr%                                                         

            calcularFac(vet);               // Calcula o Fac                                                         
            calcularFacPorc(vet);           // Calcula o Fac                                                         
            moda = calcularModa(vet);       // Calcular Moda                                                         
            mediana = calcularMediana(vet); // Calcular Mediana                                                      
            media = calcularMedia(vet)      // Calcular Media                                                        

            desvioPadrao = calcularDesvioPadrao(vet)

            // Mostrar resultados
            console.log(vet);
            console.log("Variavel pesquisada " + variavel);
            console.log("Média: " + media);
            console.log("Moda: " + moda);
            console.log("Mediana: " + elementoMediana(mediana, dados));

            gerarTabela(vet,variavel);


        } else {
            console.log("****Quantitativa Continua");
            calculaQuantitativaContinua(dados)

            //     //Daqui pra baixo tem que revisar
            //     moda = 0;       // Calcular Moda                                                         
            //     let maiorFi = 0;
            //     let fiTotal = 0;
            //     let totalMedia = 0;

            //     //Calculo da moda da continua
            //     for (let i = 0; i < vet.length; i++) {
            //         if (vet[i].fi > maiorFi) {
            //             maiorFi = vet[i].fi;
            //             moda = (vet[i].valorFinal + vet[i].valorInicial) / 2;
            //         }
            //         vet[i].mediaItem = (vet[i].valorFinal + vet[i].valorInicial) / 2;
            //         totalMedia += vet[i].mediaItem * vet[i].fi;
            //         fiTotal += vet[i].fi;
            //     }

            //     media = (totalMedia / fiTotal).toFixed(2);      // Calcular Media                                                        

            //     mediana = calcularMediana(vet); // Calcular Mediana                                                      

            //     // Mostrar resultados
            //     console.log(vet);
            //     console.log("Variavel pesquisada " + variavel);
            //     console.log("Média: " + media);
            //     console.log("Moda: " + moda);
            //     console.log("Posição da mediana esta na posição " + mediana);
            //     console.log("Mediana: " + elementoMediana(mediana, dados));

            // }
        }

    }
    else {                             // Qualitativa == Palavras 
        console.log('Qualitativa Ordinal');

        // Chama as funções 
        selecaoDireta(dados);
        variavel = pegarVariavel(); //Pega do HTML o nome da variavel                                          
        vet = calcularFi(dados); //Calcula a Frequência simples e retorna os valores em vetor de objetos         
        calcularFr(vet);         // Calcula a Fr%                                                               
        calcularFac(vet);        // Calcula o Fac                                                               
        calcularFacPorc(vet);    // Calcula o Fac%                                                              
        moda = calcularModa(vet); // Calcular Moda                                                              
        mediana = calcularMediana(vet); // Calcular Mediana                                                     

        //Mostrar os resultador
        console.log(vet);
        console.log("Variavel pesquisada " + variavel);
        console.log("Moda índices: " + moda);
        console.log("Média: Qualitativa não tem media");
        console.log("Posição da mediana esta na posição " + mediana);
        console.log("Mediana: " + elementoMediana(mediana, dados));
        gerarTabela(vet,variavel);
    }

}

function gerarTabela(linhas,nomeVariavel) {
    let nomeColuna = nomeVariavel || "#";
    $("#nomeVariavelTh").html(nomeColuna);

    let tableContent = "";

    for (let i = 0; i < linhas.length; i++) {
        let item = linhas[i];

        let indice = item.indice;

        tableContent += "<tr>"
            + "<td>" + indice + "</td>"
            + "<td>" + item.fi + "</td>"
            + "<td>" + item.fr + "%</td>"
            + "<td>" + item.fac + "</td>"
            + "<td>" + item.facPorc + "%</td>"
            + "</tr>";
    }

    $("#tabelaResultado").html(tableContent);


}

/*
MOSTRAR PARA TODOS (moda), (media), (mediana), desvio padrão e coeficiente de variação, tabela, graficos

(palavras ordem crescente)Qualitativa Nominal paralvras ordem alfabetica: tabela, moda, mediana, grafico

(palavras usuario determina a ordem, (Entregar na segunda parte do software))Qualitativa Ordinal palavras em ordem hierarquica (usuario define a ordem): tabela, moda, mediana, grafico

Quantitativa Discreta (menos de 6 variaveis diferentes) (ordem de crescente): moda, media, mediana, tabela, graficos, desvio padrão e coeficiente de variação

Quantitativa Continua (mais de 6 variaves diferentes) (intervalo de classes): moda, media, mediana, tabela, graficos, desvio padrão e coeficiente de variação

Primeira parte somente as contas, não precisa de tabela nem de interface
*/

// Mediana é a metade e mais um

// Testar 2;2;2;2;2;2;2;4;4;4;4;4;1;1;1;1;1;1;1;1;1;5;5;5;5;5;5;3;3;3
// 2;4;4;4;6;6;6;6;6;8;8;8;8;10;10;10;10;10;10;10;10;
// preto;preto;preto;preto;preto;preto;preto;preto;preto;preto;branco;branco;branco;branco;azul;azul;azul;azul;verde;verde;verde;verde;amarelo;amarelo
// roxo;roxo;roxo;roxo;roxo;roxo;roxo;roxo;roxo;preto;preto;preto;preto;preto;preto;preto;amarelo;amarelo;amarelo;verde;verde;verde;verde;verde;azul;azul;azul;azul;azul;azul

//40;41;42;45;54;55;59;60;61;62;64;65;65;66;67;68;69;70;71;71;80;81;83;84;85;86;87;87;88;89;90;91;93;97;98;98;99;100;101;105

// Mediana da discreta mostrar o indice que é a soma das duas posiçãoes dividido por 2
// Mediana quali ordinal mostrar o indice

// Desvio padrão e coeficiente de variação quanti discreta e continua
// Todos metida separatrizes 
// 4;4;4;4;4;5;5;6;7;7;7;7;7;7;8;9;9;9;9;9
//500;505;498;501;501;502;496;500;510;496;506;503;504;509;499;498;497;496;501;501;502;507;510;501;502;550;498;495;497;500;501;494;560;503;508;