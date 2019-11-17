$("#quantidade_probabilidade").hide();
$("#ponto_minimo").hide();
$("#ponto_maximo").hide();
$("#entreX").hide();
$("#entreY").hide();

$('#id_selectUniforme').change(function () {
    let id_select = ($(this).val());
    if (id_select == 'maiorQue') {
        $("#quantidade_probabilidade").show();
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();
        $("#entreX").hide();
        $("#entreY").hide();


    } else if (id_select == 'entre') {
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();
        $("#entreX").show();
        $("#entreY").show();
        $("#quantidade_probabilidade").hide();

    } else if (id_select == 'menorQue') {
        $("#quantidade_probabilidade").show();
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();
        $("#quantidade_probabilidade").show();
        $("#entreX").hide();
        $("#entreY").hide();

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

$('#amostrBinomial').hide();
$('#sucessoBinomial').hide();
$('#fracassoBinomial').hide();
$('#eventoBinomial').hide();

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

$('#quantidade_normal').hide();
$('#media_normal').hide();
$('#desvioPadrao_normal').hide();
$('#deX_normal').hide();
$('#deY_normal').hide();

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