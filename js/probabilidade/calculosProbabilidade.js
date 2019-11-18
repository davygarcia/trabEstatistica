//  Uniforme
$("#calcularProbabilidade_Uniforme").click(function () {

    let pontoMax = parseFloat($('#ponto_maximo').val());
    let pontoMin = parseFloat($('#ponto_minimo').val());
    let quantidade_normal = parseFloat($('#quantidade_probabilidade').val());

    $('#id_selectUniforme').change(function () {
        let id_select = ($(this).val());
        if (id_select == 'maiorQue') {
            let resultado = ((1 / (pontoMax - pontoMin)) * (pontoMax - quantidade_normal)) * 100;
            console.log(resultado + '%');
        }
    });
    

});



