// variaveis
const buttonMenos = document.querySelector('#buttonMenos')
const buttonMais = document.querySelector('#buttonMais')
let valor = document.querySelector('#valor')
const buttonDoCarrinho = document.querySelector('#carrinhoDeCompras')
const carrinho = document.querySelector('#carrinhoAberto')
const carrinhoSemProdutos = document.querySelector('#carrinhoSemProdutos')
const carrinhoComProdutos = document.querySelector('#carrinhoComProdutos')
const addsAoCarrinho = document.querySelector('#addsAoCarrinho')
const numDeCompras = document.querySelector('#numDeCompras')
let cont = 0

buttonMais.addEventListener('click', buttonPlus)
buttonMenos.addEventListener('click', buttonLess)

buttonDoCarrinho.addEventListener('click', function(){
    carrinho.classList.toggle('hide')
})

addsAoCarrinho.addEventListener('click', buttonAddsAoCarrinho)

    function buttonPlus(){
        cont++
        valor.innerHTML = cont
    }

    function buttonLess(){
        if(cont > 0){
        cont--
        valor.innerHTML = cont
        }
    }

    function buttonAddsAoCarrinho(){
        if(cont == 0){
            carrinhoSemProdutos.classList.remove('hide')
            carrinhoComProdutos.classList.add('hide')
            numDeCompras.classList.add('hide')
        } else{
            carrinhoComProdutos.classList.remove('hide')
            carrinhoSemProdutos.classList.add('hide')
            numDeCompras.classList.remove('hide')

            numDeCompras.innerHTML = cont
        }

        calculator()

    }

    // funcionamento da conta

    let multipilicador = document.querySelector('#multipilicador')
    let precoFinal = document.querySelector('#precoFinal')

    function calculator(){
         multipilicador.innerHTML = cont
         precoFinal.innerHTML = `$${cont * 125}`
    }

    // carrossel

    const imagensPequenas = document.querySelector('#imagensPequenas')
    const carroselSpace = document.querySelector('#carroselSpace')
    const closeButton = document.querySelector('#closeButton')

    imagensPequenas.addEventListener('click', carroselDeFotos)
    closeButton.addEventListener('click', closeCarrosel)

    function carroselDeFotos(){
        carroselSpace.classList.remove('hide')
    }

    function closeCarrosel(){
        carroselSpace.classList.add('hide')
    }


    // funcionamento das setas
    const img = document.querySelector("#imgPrincipal");
    const btnProximo = document.querySelector("#buttonDaDireita");
    const btnAnterior = document.querySelector("#buttonDaEsquerda");

    const imagens = ["ecommerce-product-page-main/images/image-product-1.jpg", "ecommerce-product-page-main/images/image-product-2.jpg", "ecommerce-product-page-main/images/image-product-3.jpg", "ecommerce-product-page-main/images/image-product-4.jpg"];
    let indice = 0;

    btnProximo.addEventListener("click", () => {
        indice = (indice + 1) % imagens.length; // 3 % 3 = 0 (Para voltar para a primeira imagem)
        img.src = imagens[indice];
    });

    btnAnterior.addEventListener("click", () => {
        indice = (indice - 1 + imagens.length) % imagens.length;
        img.src = imagens[indice];
    });

    

