let esposa = {nome:'Ivana', 
sexo:'F', 
peso: 50.5,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}

esposa.engordar(5)
console.log(`${esposa.nome} pesa ${esposa.peso}Kg`)