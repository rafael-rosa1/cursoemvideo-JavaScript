function calcular() {
    let numero = document.querySelector('input#numero')
    let tabuada = document.getElementById('seltab')
    
    if (numero.value.length == 0) {
        alert("Digite um número para descobrir sua tabuada")
    } else {
        let n = Number(numero.value)
        let i = 1
        tabuada.innerHTML = ""
        while(i <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${i*n}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
            i++
        }
    }
}