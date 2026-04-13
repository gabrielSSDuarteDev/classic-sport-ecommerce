let botaoVoltar = document.getElementById('voltar')
let botaoAvancar = document.getElementById('avançar')
let conteiner = document.querySelector('.conteiner')
let lista = conteiner.querySelector('.list');
let items = lista.querySelectorAll('.item')
let indicadores = document.querySelector('.indicators')
let dots = indicadores.querySelectorAll('ul li')

let botoesSaibaMais = document.querySelectorAll('.information')
let active = 0
let primeiraPosicao = 0
let ultimaPosicao = items.length - 1


function definicaoTotal() {
    let itemPassado = conteiner.querySelector('.list .item.active')
    itemPassado.classList.remove('active');

    let dotsPassadas = indicadores.querySelector('ul li.active')
    dotsPassadas.classList.remove('active')
    dots[active].classList.add('active')
    indicadores.querySelector('.numbers').innerHTML = '0' + (active + 1)

}

botaoAvancar.onclick = () => {
    lista.style.setProperty('--calculando', 1)
    active = active + 1 > ultimaPosicao ? 0 : active + 1
    definicaoTotal()
    items[active].classList.add("active")

}

botaoVoltar.onclick = () => {
    lista.style.setProperty('--calculando', -1)
    active = active - 1 < primeiraPosicao ? ultimaPosicao : active - 1
    definicaoTotal()
    items[active].classList.add("active")








}
function navegar(){
    
    window.location.href ="http://127.0.0.1:5500/ProdutoFinal/index.html"
   botoesSaibaMais.forEach(botao => {
    botao.addEventListener('click', navegar);
});
}