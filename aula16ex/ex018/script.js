let array = []
let select = document.getElementById('selnum')
let campoNumero = document.getElementById('numero')
let res = document.getElementById('res')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, array) {
    if (array.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adiciona() {
    if(!isNumero(campoNumero.value) || inLista(campoNumero.value, array)) {
        alert("Digite um número entre 1 e 100, sem repetições")
    } else {
        let elemento = Number(campoNumero.value)
        array.push(elemento)
        let item = document.createElement('option')
        item.text = `Numero ${elemento} adicionado`
        select.appendChild(item)
        res.innerHTML = ""
    }
    campoNumero.value = ""
    campoNumero.focus()
}

function finaliza() {
    if (array.length == 0) {
        alert("Adicione um número na lista")
    } else {
        res.innerHTML = ""
        let tamanho = array.length
        let maior = array[0]
        let menor = array[0]
        for (let pos in array) {
            if(array[pos] > maior) 
                maior = array[pos]
            if(array[pos] < menor)
                menor = array[pos]
        }
        let soma = somar(array)
        let media = soma/tamanho

        res.innerHTML += `Ao todo, temos ${tamanho} números cadastrados<br>`
        res.innerHTML += `O maior número informado foi ${maior}<br>`
        res.innerHTML += `O menor número informado foi ${menor}<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        res.innerHTML += `A média dos valores digitados é ${media}`
    }

}

function somar(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total
}