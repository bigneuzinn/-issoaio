//Função para consumir API
function buscar() {
    //carrega o JSON e processa os dados
    fetch('https://raw.githubusercontent.com/bigneuzinn/json.cpf/refs/heads/main/dados.json').then(resposta => resposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value;
        var encontrado = false;

        corpo.forEach(pessoa => {

        if (identificador == pessoa.cpf) {
            //JQUERY
            var link1 = `<a href="${pessoa.link}">Visite nosso site</a>`
            document.getElementById('nome').innerHTML = pessoa.nome;
            document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
            document.getElementById('cidade').innerHTML = pessoa.cidade;
            document.getElementById('pais').innerHTML = pessoa.pais;
            document.getElementById('imagem').innerHTML = pessoa.imagem;
            document.getElementById('link').innerHTML = link1;
            document.getElementById('erro').innerHTML = "";
            encontrado = true;
        }
            
    })
    if (!encontrado) {
        document.getElementById('erro').innerHTML = "Registro inválido";
    }
    console.log(corpo)

  })
}

// var identificador = document.getElementById('valor').value;
// //Link com JQUERY
// var link1 = `<a href="${dados1.link}">Visite nosso site</a>`;