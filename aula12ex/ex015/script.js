function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        alert("[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE")
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 13) {
                //criança
                img.setAttribute('src', 'crianca-homem.png')
            } else if(idade < 23) {
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if(idade < 55) {
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if(sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13) {
                img.setAttribute('src', 'crianca-mulher.png')
            } else if(idade < 23) {
                img.setAttribute('src', 'jovem-mulher.png')
            } else if(idade < 55) {
                img.setAttribute('src', 'adulta-mulher.png')
            } else {
                img.setAttribute('src', 'idosa-mulher.png')
            }
        }
        res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}