function consultaCEP(){
    var cep = document.getElementById("CEP").value;
    var url = "https://viacep.com.br/ws/"+ cep + "/json/";
    $.ajax({
        url:url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#titleCEP").html("CEP  " + response.cep);
            $(".cep").show();
          

            /*document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            //Outra forma:
            $("#logradouro").html(response.logradouro);
            */
        }
    })
}

$(function(){
    $(".cep").hide()
})