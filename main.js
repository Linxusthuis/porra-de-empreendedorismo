function criaCart (Produto, Valor) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `   
<div class="cont-Cartao">
    <h3>${Produto}</h3>
    <div class="pergunta-cartao">
        <p>${Valor}</p>
    </div>
</div>
    `
    container.appendChild(cartao);
}