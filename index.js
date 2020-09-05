let contador = 0;
// Quando a pagina termina de carregar
$(document).ready(function () {
  alert('Seja bem-vindo ao meu site de estudo sobre o Jquery!')    
});
// Contador
$(".adicionar").click(() => {
  contador++;
  $("p").html(contador);
  if (contador >= 0) {
    $("p").css("color", "green");
  }
});
if (contador == 0) {
  $("p").css("color", "blue");
}
$(".remover").click(() => {
  contador--;
  $("p").html(contador);
  if (contador <= 0) {
    $("p").css("color", "red");
  }
});
// Mostrar e esconder o paragrafo
$('.mostrarP').click(() => {
    $('p').show(100)
})
$('.esconderP').click(() => {
    $('p').hide(100)
})
