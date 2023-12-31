import cursos from "./modulos/cursos.js";

/* map (mapear, mapeia - transformar em outra coisa) 
Passa por elementos de um array e realiza operações em cada um deles através de uma função(callback), gerando um novo array
*/

// exemplo 1
const numeros = [10, 20, 5, 12, 66, 50];
console.log(numeros);
const numerosDobrados = numeros.map( numero => numero * 2);

console.log(numerosDobrados);

console.log(cursos);

// exemplo 2: gerar um novo array apenas com os nomes dos cursos

const titulos = cursos.map( (curso) => curso.titulo);

console.log(titulos);


//exercício

const preco = cursos.map(preco => preco.preco * 0.9);
console.log(preco);

const cursosAtualizados = cursos.map((curso) => {
    return{
        ...curso,
        preco:curso.preco * 0.9
    }
});

/* Simplificar a arrow function: é necessário
envolver o código de return implícito com parênteses. */
const cursosBlackFriday = cursos.map( curso => ({ ...curso, preco: curso.preco - curso.preco * 0.10 }) );

console.log(cursosBlackFriday);

