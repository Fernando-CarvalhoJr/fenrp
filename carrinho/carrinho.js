// Obter elementos do Dom pelo ID

const formCadastro = document.getElementById("form-cadastro");
const tabela = document.getElementById("tabela-estoque");
const btnVerEstoque = document.getElementById("btn-ver-estoque");


let estoque = [];

// criar array vazio

formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();
    // Previne o comportamento padrão do formulário HTML ao ser submetido. 

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const dataEntrada = document.getElementById("data-entrada").value;

    // Valor usado para odter dados do ID 

    const item = {nome, preco, quantidade, dataEntrada};
    

    //criar objetos unificanco objetos a um valor 

    estoque.push(item);
    alert("item adicionado");

    //adicionar item 

    formCadastro.reset();





});



btnVerEstoque.addEventListener("click", function () {
    // verifica se o estoque está vazio 
    if (estoque.length === 0) {
        alert("Não há itens no estoque");
        return;
    }

    //.lenght retorna o numero de elementos array 

    tabela.querySelector("tbody").innerHTML = "";
    // seleciona campo de tabela "tbody campo vazio no html"

    estoque.forEach(function (item) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.preco}</td>
    <td>${item.quantidade}</td>
    <td>${item.dataEntrada}</td>
    <td><button>Remover do Estoque</button></td>
    `;
        //criou um elemento novo no html atraves da função creatElemente

        tr.querySelector("button").addEventListener("click", function () {
            //Encontra o botton remover item 
            const index = estoque.indexOf(item);
            //Encontra o item (objeto) dentro do array 
            estoque.splice(index, 1);
            // Remover o item na tabela 
            tabela.removeChild(tr);
            // remove a linha em branco do que foi removido
        });


        tabela.querySelector("tbody").appendChild(tr);
        //Adiciona uma linha a tabela 
    });



        tabela.style.display = "table";

    });