function carregar () {
    var mom = document.getElementById('momento')
    var msg = document.getElementById('msg');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        mom.innerHTML = "Bom dia"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        mom.innerHTML = "Boa tarde"
        document.body.style.background = '#b9846f';
    } else {
        mom.innerHTML = "Boa noite";
        document.body.style.background = '#515154';
    }
}

