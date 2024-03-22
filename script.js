document.addEventListener("DOMContentLoaded", function() {
        var botoesAdicionar = document.querySelectorAll(".botaoadicionar");
        var listaItensCarrinho = document.getElementById("listaItensCarrinho");
        var carrinho = document.querySelector(".itensnocarinho");

        botoesAdicionar.forEach(function(botao) {
            botao.addEventListener("click", function() {
                var produto = botao.parentElement;
                var nomeProduto = produto.querySelector(".nomeProdutos").innerText;
                var precoProduto = produto.querySelector(".precoProdutps").innerText;

                // Criar um novo item de lista para o carrinho
              var novoItemCarrinho = document.createElement("li");
              novoItemCarrinho.innerText = nomeProduto + " - " + precoProduto;
              novoItemCarrinho.classList.add("itemCarrinho"); // Adiciona a classe para o estilo do item

              // Adicionar o novo item à lista de itens no carrinho
              listaItensCarrinho.appendChild(novoItemCarrinho);
        // Método para mudar as propriedades dos itens colocados dentro da lista do carrinho
        listaItensCarrinho.querySelectorAll('li').forEach(function(item) {
            item.style.backgroundColor = '#e55757';
            item.style.padding = '5px';
            item.style.borderRadius = '5px';
            item.style.marginTop = '5px';
        });

                
                

                //contador de itens no carrinho
                atualizarContadorItens();
            });
        });

        // exibiro carrinho
        var imagemCarinho = document.querySelector(".imagemcarinho");
        imagemCarinho.addEventListener("click", function() {
            carrinho.style.display = carrinho.style.display === "none" ? "block"  : "none";
        });

        // Função para atualizar o contador de itens no carrinho
function atualizarContadorItens() {
            var contadorItens = document.querySelector(".contadordeitens");
            var itensNoCarrinho = document.querySelectorAll("#listaItensCarrinho li");

            contadorItens.innerText = itensNoCarrinho.length;
        }


        var campoBusca = document.querySelector(".campoBusca");
        var botaoBusca = document.querySelector(".busca img");

        botaoBusca.addEventListener("click", function() {
            var termoBusca = campoBusca.value.trim();
            var produtos = document.querySelectorAll(".produtos");

            produtos.forEach(function(produto) {
                var nomeProduto = produto.querySelector(".nomeProdutos").innerText;
                if (nomeProduto.toLowerCase().includes(termoBusca.toLowerCase())) {
                    produto.style.display = "block";
                } else {
                    produto.style.display = "none";
                }

                // Definir um tamanho padrão para os itens da busca
                produto.style.height = "300";
              
            });
        });
        
  
    });
