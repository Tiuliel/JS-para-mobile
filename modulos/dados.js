const pessoa = {
    nome: 'Eliel',
    idade: 32,
    cidade: 'São Paulo'
};

const livro = {
    titulo: "O Senhor do Anéis ",
    volume: "As Duas Torres",
    ano: 1954
};

const alunos = ["Tanaka", "Victor", "Eliel", "Aline"];



/*  Se for exportação de somente UM recurso usamos export default nomeDoRecurso
//export default pessoa;
*/

/* Se for exportação de VÁRIOS recursos, use somente export {entre chaves os recursos} */
export { pessoa, livro, alunos};