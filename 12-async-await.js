/* Comunicação assíncrona (AJAX) para carregamento de dados usando fetch e a sintaxe async/await através de função */

const apiUrl = `https://jsonplaceholder.typicode.com/photos`;

async function acessaAPI(){
try {
    const resposta = await fetch(apiUrl);
    
if (!resposta.ok) {
    throw new Error (
        `Erro requisição: ${resposta.status} - ${resposta.statusText}`)
}

const dados = await resposta.json();
console.log(dados);

} catch (error) {
    console.error("Erro: "+error.message);
    
}
}

acessaAPI();