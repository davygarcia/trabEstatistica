//  Uniforme
$("#calcularProbabilidade_Uniforme").click(function () {

    // let pontoMax = parseFloat($('#ponto_maximo').val());
    // let pontoMin = parseFloat($('#ponto_minimo').val());
    // let quantidade_normal = parseFloat($('#quantidade_probabilidade').val());

    // $('#id_selectUniforme').change(function () {
    //     let id_select = ($(this).val());
    //     if (id_select == 'maiorQue') {
    //         let resultado = ((1 / (pontoMax - pontoMin)) * (pontoMax - quantidade_normal)) * 100;
    //         console.log(resultado + '%');
    //     }
    // });

    let id_select = $('#id_selectUniforme').find(":selected").text()    
 
    if (id_select == 'Maior que') {
        console.log('Maior que ');
        

    } else if (id_select == 'entre') {
        console.log('entre');

    } else if (id_select == 'menorQue') {
        console.log('menorQue');
        

    } else if (id_select == 'variancia') {
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();
        $("#quantidade_probabilidade").hide();
        $("#entreX").hide();
        $("#entreY").hide();

    } else if (id_select == 'vrMedio') {
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();
        $("#quantidade_probabilidade").hide();
        $("#entreX").hide();
        $("#entreY").hide();
    }

});

$('#id_selectBinomial').change(function () {
    let id_select = ($(this).val());
    if (id_select == 'probabilidadeBinomial') {
        $('#amostrBinomial').show();
        $('#sucessoBinomial').show();
        $('#fracassoBinomial').show();
        $('#eventoBinomial').show();
    }
    else if (id_select == 'mediaBinomial') {
        $('#amostrBinomial').show();
        $('#sucessoBinomial').show();
        $('#fracassoBinomial').hide();
        $('#eventoBinomial').hide();

    } else if (id_select == 'devioBinomial') {
        $('#amostrBinomial').show();
        $('#sucessoBinomial').show();
        $('#fracassoBinomial').show();
        $('#eventoBinomial').hide();
    }
})

$('#id_selectNomal').change(function () {
    let id_select = ($(this).val());

    if (id_select == 'maiorQue_normal') {
        $('#quantidade_normal').show();
        $('#media_normal').show();
        $('#desvioPadrao_normal').show();
        $('#deX_normal').hide();
        $('#deY_normal').hide();
    }
    else if (id_select == 'entre_normal') {
        $('#quantidade_normal').hide();
        $('#media_normal').show();
        $('#desvioPadrao_normal').show();
        $('#deX_normal').show();
        $('#deY_normal').show();

    }
    else if (id_select == 'menorQue_normal') {
        $('#quantidade_normal').show();
        $('#media_normal').show();
        $('#desvioPadrao_normal').show();
        $('#deX_normal').hide();
        $('#deY_normal').hide();
    }

})
