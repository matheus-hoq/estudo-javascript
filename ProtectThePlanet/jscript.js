var diryJ, dirxJ, jog, velJ, pjx, pjy;
var tamTelaW, tamTelaH;
var jogo;
var frames;

function teclaDw(){
    var tecla = event.keyCode;

    if(tecla==38){//cima
        diryJ=-1;
    }else if(tecla==40){//baixo
        diryJ=1;
    }
    if(tecla==37){//esquerda
        dirxJ=-1
    }else if(tecla==39){//direita
        dirxJ=1
    }
    if(tecla==32){//espaço / tiro
    }        
}

function teclaUp(){
    if((tecla==38)||(tecla==40)){
        diryJ=0;
    }
    if((tecla==37)||(tecla==39)){//esquerda
        dirxJ=0
    }
}

function controlaJogador(){
    //pjy+=
}

function gameLoop(){
    if(jogo){
        //funções de controle

    }
    frames = requestAnimationFrame(gameLoop)
}

function inicia(){
    jogo = false;

    //Ini tela
    tamTelaH = window.innerHeight;
    tamTelaW = window.innerWidth;

    //ini jogador

    dirxJ = diryJ = 0
    pjx = tamTelaW/2
    pjy = tamTelaH/2
    velJ = 5;
    jog = document.getElementById("naveJog");
    jog.style.top = pjy+"px";
    jog.style.left = pjx+"px";
}

window.addEventListener("load", inicia);
document.addEventListener("keydown", teclaDw);
document.addEventListener("keyup", teclaUp);