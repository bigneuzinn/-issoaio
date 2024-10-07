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
                <button class="adicionar-carrinho">Adicionar ao Carrinho</button>
            `;

            // Insere no container de produtos
            produtosContainer.appendChild(produtoDiv);

            // Adiciona evento de clique no botão "Adicionar ao Carrinho"
            const botaoAdicionar = produtoDiv.querySelector('.adicionar-carrinho');
            botaoAdicionar.addEventListener('click', () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Item adicionado ao carrinho!',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os produtos:', error);
        produtosContainer.innerHTML = '<p>Erro ao carregar os produtos. Tente novamente mais tarde.</p>';
    });
