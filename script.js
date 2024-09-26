const produtos = [
    {
        nome: "Haltere Ajustável",
        img: "https://m.media-amazon.com/images/I/51Jf7cNr7xL._AC_SX679_.jpg",
        desc: "Haltere ajustável, ideal para treinos em casa.",
        preco: "R$ 299,90"
    },
    {
        nome: "Colchonete de Yoga",
        img: "https://images.tcdn.com.br/img/img_prod/754222/tapete_yoga_pilates_exercicios_com_bolsa_183x61x1_0cm_201_1_5923296fc98130249fee7a444524b07b.jpg",
        desc: "Colchonete confortável para práticas de yoga e pilates.",
        preco: "R$ 35,99"
    },
    {
        nome: "Bola de Estabilidade",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaLx4kqjL_X2cQAx0zzYtEr7iUa5vks1o5Q&s",
        desc: "Ideal para exercícios de força e equilíbrio.",
        preco: "R$ 79,90"
    },
    {
        nome: "Faixa Elástica de Resistência",
        img: "https://images.tcdn.com.br/img/img_prod/920975/faixa_elastica_extensor_exercicio_em_casa_academia_resistencia_fitness_pilates_1463_1_e69ce7b4612c40058c6d0dc5a5e2231c.jpg",
        desc: "Perfeita para treinos de força e alongamento.",
        preco: "R$ 19,90"
    },
    {
        nome: "Roupas de Treino",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFagPvzQXF0xQeByfrRSzHpEao5IVi32FwQ&s",
        desc: "Conjunto confortável para atividades físicas.",
        preco: "R$ 149,90"
    },
    {
        nome: "Suplemento Protein",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6w87zj2SLgZMUYZMANCQj5NUSVojE3TjwJQ&s",
        desc: "Suplemento de proteína para recuperação muscular.",
        preco: "R$ 110,90"
    },
    {
        nome: "Garrafa de Água",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSP3SEK4GJvGm5lcM7bnhEh8FVB0gV_kiWg&s",
        desc: "Garrafa de água reutilizável, ideal para treinos.",
        preco: "R$ 29,90"
    },
    {
        nome: "Kit de Acessórios para Treino",
        img: "https://images.tcdn.com.br/img/img_prod/1042861/kit_academia_treino_funcional_com_42_pecas_1687_1_68ce2a10d1868d5e87a56b17daf4c79f.jpg",
        desc: "Inclui faixas, corda e outros acessórios.",
        preco: "R$ 99,90"
    }
];

function carregarProdutos() {
    const container = document.getElementById('produtos-container');
    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <h3>${produto.nome}</h3>
            <img src="${produto.img}" alt="${produto.nome}" class="produto-img">
            <p class="desc">Descrição: ${produto.desc}</p>
            <p class="desc">Preço: ${produto.preco}</p>
            <input type="button" onclick="adicionarAoCarrinho('${produto.nome}')" class="botao" value="Adicionar ao carrinho">
        `;
        container.appendChild(divProduto);
    });
}

function adicionarAoCarrinho(produto) {
    Swal.fire({
        title: 'Produto adicionado!',
        text: `${produto} foi adicionado ao seu carrinho.`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

function enviarMensagem(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    Swal.fire({
        title: 'Mensagem Enviada!',
        text: `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

document.addEventListener('DOMContentLoaded', carregarProdutos);




function apertar(){
    Swal.fire({
title: "Concluído!",
text: "Item Adicionado ao carrinho!",
icon: "success"
});
}