function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} hora`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'imgmanha.png'
        document.body.style.background = '#fee6ba'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'imgtarde.png'
        document.body.style.background = '#fa9d25'
    } else {
        // BOA NOITE!
        img.src = 'imgnoite.png'
        document.body.style.background = '#05354f'
    }
}