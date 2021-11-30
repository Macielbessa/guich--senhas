function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

jQuery(document).ready(function($) {

	$("body").on('keydown', function(e) {
		var senhaAtual   = $("#senhaAtualNumero");
		var senhaNormal  = $("#senhaNormal");
		var senhaPrior   = $("#senhaPrioridade");
		var ultimaSenha  = $("#ultimaSenha");
		var audioChamada = $("#audioChamada");

        if(e.keyCode == 39){
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaNormal.val()) + 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
            audioChamada.trigger("play");
        }
        if(e.keyCode == 65){
            senha = parseInt(senhaNormal.val()) - 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
        }
        if(e.keyCode == 38){
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaPrior.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaPrior.val("" + pad(senha, 3));
            audioChamada.trigger("play");
        }
        if(e.keyCode == 83){
            senha = parseInt(senhaPrior.val().replace("S","")) - 1;
            senhaAtual.html("S" + pad(senha, 3));
            senhaPrior.val("S" + pad(senha, 3));
        }
    });
});
var tela = document.documentElement;
function openFullscreen() {  
  if(tela.requestFullscreen){ 
      tela.requestFullscreen() 
  }  
}

function closeFullscreen() { 
    if(document.exitFullscreen){
        document.exitFullscreen()
    }
}