const fechar = document.querySelector('.fechar').addEventListener('click',fecharMenu);
const menu = document.querySelector('.menu')
const abrir = document.querySelector('.abrir').addEventListener('click', abrirMenu)

function abrirMenu() {
    menu.classList.add('active')
}

function fecharMenu(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
    } else{
        menu.classList.add('active')
    }
}