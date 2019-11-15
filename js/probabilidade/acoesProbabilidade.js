$("#quantidade_probabilidade").hide();
$("#ponto_minimo").hide();
$("#ponto_maximo").hide();
$('#id_select').change(function (){
    var id_select = ($(this).val());
    if(id_select == 'maiorQue'){
        $("#quantidade_probabilidade").show();
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();   

    } else if(id_select == 'entre'){
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();
        $("#quantidade_probabilidade").hide(); 

    } else if(id_select == 'menorQue'){
        $("#quantidade_probabilidade").show();
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();
        $("#quantidade_probabilidade").hide(); 

    } else if(id_select == 'variancia'){
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();
        $("#quantidade_probabilidade").hide(); 

    }else if(id_select == 'vrMedio'){
        $("#ponto_minimo").show();
        $("#ponto_maximo").show();
        $("#quantidade_probabilidade").hide(); 
    }

 });