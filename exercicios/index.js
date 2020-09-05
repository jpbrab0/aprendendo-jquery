let contador = 0
$('.mode').click(() => {
    if(contador % 2 == 0){
        $('body').addClass('dark')
        $("h1").css("color", 'white')
        $("p").css("color", 'white')
        $('.noticia').css("background", '#000026')
        
        $('.mode').text('Light mode')
        contador++
    } else {
        $('body').removeClass('dark')
        $("h1").css("color", 'black')
        $("p").css("color", 'black')
        $('.noticia').css("background", '#f0f0f5')
        $('.mode').text('Dark mode')
        contador++
    }
})

$('.hide').click(() => {
    if(contador % 2 == 0){
        $('.hide').text("Mostrar noticia")
        $('.titleNoticia').hide()
        $('.descriptionNoticia').hide()
        contador++
    } else {
        $('.hide').text("Esconder noticia")
        $('.titleNoticia').show()
        $('.descriptionNoticia').show()
        contador++
    }
})