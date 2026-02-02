import leia = require("readline-sync");

// tipagem das chaves e do valor na criação da coleção map
const participantes: Map<number, string> = new Map<number, string>();
// exemplo de desestruturação com variaveis para ana
// const teste = [1, 2, 3]

// let [primeiro, segundo, terceiro] = teste;

// console.log(primeiro)
// console.log(segundo)
// console.log(terceiro)

// ela trabalha com a forma de objeto, metodo construtor sempre vai ter o nome das chaves
participantes.set(1, "Ana");
participantes.set(2, "Samuel");
participantes.set(3, "Leonardo");
participantes.set(4, "Camila");

let matricula = leia.questionInt("Digite o numero da matricula: ")
let nome = leia.question("Digite o nome od participante: ")

participantes.set(matricula, nome);

// para visualizarmos, precisamos do forOf; so qie ele sera um pouco diferente porque precisaremos passar uma chave e um valor

for(let [matricula, nome] of participantes){
    console.log(`Matricula: ${matricula} - Nome: ${nome}`)
    // isso se chama desestruturação   
}


// procurar um elemento pela chave
console.log("Existe a matricula 2? ", participantes.has(2));

// procurar um elemento pelo valor
// depois obrigatoriamente converter em array e depois procurar por values
// por values pegamos todos os valores
// includes é pra incluir, independente de ter Ana Paula, Ana qualquer coisa, Ana Etc.
console.log("Existe a participante Ana? ", Array.from(participantes.values()).includes("Ana"));

// podemos fazer um Loop pra mostrar apenas as chaves ou apenas os valores 

for(let matricula of participantes.keys()){
    console.log(matricula);
}


// por metodo get , segundo a dúvida de Joao P
// procura um valor com base na chave
console.log("Qual é o nome do aluno com a matrícula 3? ", participantes.get(3));

// para apagar um valor
participantes.delete(3);

console.table(participantes);