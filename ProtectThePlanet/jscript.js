var diryJ, dirxJ;

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
