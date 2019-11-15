$("#quantidade_probabilidade").hide();
$("#ponto_minimo").hide();
$("#ponto_maximo").hide();
$("#entreX").hide();
$("#entreY").hide();

$('#id_selectUniforme').change(function () {
    var id_select = ($(this).val());
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

