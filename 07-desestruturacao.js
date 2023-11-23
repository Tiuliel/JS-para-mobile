/* Destructuring ou Desestruturação 
Extrair os dados de arrays e objetos para variáveis/constantes individuais
*/

// Destructuring em arrays
const alunas = ["Tanaka", "Zimbo", "Melissa"];
const [tanaka, zimbo, melissa] = alunas;

console.log(tanaka);
console.log(zimbo);
console.log(melissa);

const unidades = ["Penha", "Tatuapé", "Itaquera", "São Miguel"];
const [penha, tatuape, , smp] = unidades;

console.log("-----------------------");

console.log(penha); 
console.log(tatuape); 
console.log(smp); 

console.log("-------------------");

const [tesla, einstein, newton] = ["Tesla", "Einstein", "Newton"];

console.log(tesla);
console.log(einstein);
console.log(newton);

console.log("--------------------------");

const recursos = [
    ["Notebook", "TV Led", "Computar Desktop"], texto => texto.toUpperCase()
    
];

console.log(recursos);

const [produtos, converter] = recursos;
console.log(produtos[1]);
for(const produto of produtos) {
    console.log("Produto: "+produto);
}

console.log(converter("tiago"));
console.log(converter("gelADEira"));
console.log(converter(produtos[0]));