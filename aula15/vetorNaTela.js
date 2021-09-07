let valores = [18, 10, 25, 24, 7, 4, 9]
valores.sort()
// for(let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

//somente parra arrays e objects
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}