// URL da API externa
const apiUrl = 'https://raw.githubusercontent.com/bigneuzinn/json.ecommerce/refs/heads/main/produtos.json';

// Seleciona o container onde os produtos serão inseridos
const produtosContainer = document.getElementById('produtos-container');

// Função para buscar produtos da API e carregar na página
fetch(apiUrl)
    .then(resposta => resposta.json()) // Converte a resposta em JSON
    .then(produtos => {
        // Limpa o container antes de adicionar novos produtos
        produtosContainer.innerHTML = '';

        // Adiciona cada produto na página
        produtos.forEach(produto => {
            // Cria o elemento div do produto
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');

            // Adiciona o conteúdo HTML para cada produto
            produtoDiv.innerHTML = `
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${produto.desc}</p>
                <span>${produto.preco}</span>
            `;

            // Insere no container de produtos
            produtosContainer.appendChild(produtoDiv);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os produtos:', error);
        produtosContainer.innerHTML = '<p>Erro ao carregar os produtos. Tente novamente mais tarde.</p>';
    });
