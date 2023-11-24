import cursos from "./modulos/cursos.js"
/* filter (filtrar) 
Passa por elementos de um array (usando uma função callback) e 
retornar valores de acordo com uma ou mais condições  gerando um novo array
*/

// exemplo 1

const vendas = [1500, 3000, 1000, 500, 750, 5000, 2000];
const meta = 1000;
console.log(vendas);

// Gerando um array com os valores que bateram a meta

const vendasAcimaDaMeta = vendas.filter((venda) => {
return venda > meta
});
console.log(vendasAcimaDaMeta);

//exemplo 2

const alunos = [
    "Nicolas", "Eliel", "André", "Kaue", "Barbosa", "Aline", "Melissa", "Marina", "Mônica", "Marcelo"
];
console.log(alunos);

// Filtrando alunos que começam com "M" e terminam com "o"
// Obs.: faz diferença usar maiúsculas ou minúsculas.
const resultados = alunos.filter(aluno => aluno.startsWith("M") && aluno.endsWith("o"))

console.log(resultados);

console.log("---------------------------");

// Filtrando cursos

// Filtrando por cursos da categoria Design

const cursoDesign = cursos.filter(curso => curso.categoria == "Design")
console.log(cursoDesign);

// Filtrando por cursos que NÃO SÃO sa categoria Design
const cursosMenosDesign = cursos.filter(
    curso => curso.categoria != "Design");

    console.log(cursosMenosDesign);

    const cursosFront = cursos.filter(curso => (curso.categoria === "Front-End" || curso.categoria === "Mobile")  && curso.preco > 600);
    console.log(cursosFront);

    const mobile = cursos.filter(curso => curso.categoria === "Mobile").map(curso => curso.titulo) 
    console.log(mobile);

    // Sem encadeamento
const desafio2 = cursos.filter(curso => curso.categoria == "Mobile");
console.log(desafio2);

const desafio2Titulos = desafio2.map(curso => curso.titulo);
console.log(desafio2Titulos);


/* Desafio Vitor 
Cursos/Titulos com preço já com desconto */
const cursosBlackFriday = cursos
                            .map( 
                                curso => {
                                        return { 
                                            ...curso, 
                                            preco: curso.preco - curso.preco * 0.10 
                                        }
                                })
                            .filter(curso => curso.categoria == "Mobile")
                            .map(curso => ({
                                titulo: curso.titulo, 
                                preco: curso.preco
                            }));

console.log(cursosBlackFriday);