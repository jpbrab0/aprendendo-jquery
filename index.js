let contador = 0;
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

$('.mostrarP').click(() => {
    $('p').show(100)
})
$('.esconderP').click(() => {
    $('p').hide(100)
})
$(document).ready(function () {
    alert('SEJA BEM VINDO A ESSA PALHAÇADA COM JQUERY')    
});