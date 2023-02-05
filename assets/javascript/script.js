const fechar = document.querySelector('.fechar').addEventListener('click',fecharMenu);
const menu = document.querySelector('.menu')
const abrir = document.querySelector('.abrir').addEventListener('click', abrirMenu)
const html = document.querySelector('.html').addEventListener('click', abrirContent)
const css = document.querySelector('.css').addEventListener('click', abrirCss)
const js = document.querySelector('.js').addEventListener('click', abrirJs)
const git = document.querySelector('.gitHub').addEventListener('click', abrirGit)
const conteudo = document.querySelector('.conteudo')
const conteudoc = document.querySelector('.conteudoCss')
const conteudoJs = document.querySelector('.conteudoJs')
const conteudoGit = document.querySelector('.conteudoGit')

function abrirGit(){
    if(conteudoGit.classList.contains('active')){
        conteudoGit.classList.remove('active')
    } else{
        conteudoGit.classList.add('active')
    }
}

function abrirJs(){
    if(conteudoJs.classList.contains('active')){
        conteudoJs.classList.remove('active')
    } else{
        conteudoJs.classList.add('active')
    }
}

function abrirCss(){
    if(conteudoc.classList.contains('active')){
        conteudoc.classList.remove('active')
    } else{
        conteudoc.classList.add('active')
    }
}


function abrirContent() {
    if(conteudo.classList.contains('active')){
        conteudo.classList.remove('active')
    } else{
        conteudo.classList.add('active')
    }
} 

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