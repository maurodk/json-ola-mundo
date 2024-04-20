const url = "https://maurodk.github.io/json-ola-mundo/irineu.json";

async function buscarDados() {

    const resposta = await fetch(url);
    
    if(!resposta.ok) 
    { 
        console.log("ERRO 404");
    }

    const dados = await resposta.json;
    console.log(dados);
}

buscarDados();