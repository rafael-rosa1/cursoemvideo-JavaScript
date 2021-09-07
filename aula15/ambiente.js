let num = [5, 8, 2, 9, 3]
num.push(7)
let tamanho = num.length
console.log(`o vetor tem ${tamanho} elementos`)
console.log(`Nosso vetor é o ${num}`)

num.sort()
console.log(`Nosso vetor ordenado é o ${num}`)

console.log(`o menor valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)
if (pos == -1) {
    console.log("Valor não pertence a Array")
} else {
    console.log(`O numero está na posição ${pos}`)
}
