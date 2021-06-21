var diryJ, dirxJ, jog, velJ, pjx, pjy;
var velT;
var tamTelaW, tamTelaH;
var jogo;
var frames;
var contBombas, painelContBombas, velB, tmpCriaBomba;
var bombasTotal;
var vidaPlaneta;

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
        //tiro
        atira(pjx+17,pjy);
    }        
}

function teclaUp(){
    var tecla = event.keyCode;
    if((tecla==38)||(tecla==40)){
        diryJ=0;
    }
    if((tecla==37)||(tecla==39)){//esquerda
        dirxJ=0
    }
}

function criaBomba(){
    if(jogo){
        var y=0;
        var x=Math.random()*tamTelaW;
        var bomba = document.createElement("div");
        var att1 = document.createAttribute("class")
        var att2 = document.createAttribute("style")
        att1.value = "bomba";
        att2.value = "top:"+y+"px;left:"+x+"px;";
        bomba.setAttributeNode(att1);
        bomba.setAttributeNode(att2);
        document.body.appendChild(bomba);
        contBombas--;
    }
}

function controlaBomba(){
    bombasTotal = document.getElementsByClassName("bomba");
    var tam = bombasTotal.length;
    for(var i=0;i<tam;i++){
        if(bombasTotal[i]){
            var pi = bombasTotal[i].offsetTop;
            pi+=velB;
            bombasTotal[i].style.top = pi+"px";
            if(pi>tamTelaH){
                vidaPlaneta-=10;
                bombasTotal[i].remove();
            }
        }
    }
}

function atira(x,y){
    var t=document.createElement("div");
    var att1 = document.createAttribute("class")
    var att2 = document.createAttribute("style")
    att1.value="tiroJog";
    att2.value="top:"+y+"px;left:"+x+"px"
    t.setAttributeNode(att1);
    t.setAttributeNode(att2);
    document.body.appendChild(t);
}

function controleTiros(){
    var tiros = document.getElementsByClassName("tiroJog");
    var tam = tiros.length;
    for(var i=0; i<tam;i++){
        if(tiros[i]){
            var pt=tiros[i].offsetTop;
            pt-=velT;
            tiros[i].style.top = pt+"px";
            colisaoTiroBomba(tiros[i]);
            if(pt<0){
                tiros[i].remove();
            }
        }
    }
}

function colisaoTiroBomba(tiro){
    var tam = bombasTotal.length;
    for(var i=0; i<tam;i++){
        if(bombasTotal[i]){
            if(
                (
                    (tiro.offsetTop<=(bombasTotal[i].offsetTop+40))&& //cima tiro com baixo bomba
                    ((tiro.offsetTop+6)>=(bombasTotal[i].offsetTop)) //baixo tiro com cima bomba
                )
                &&
                (
                    (tiro.offsetLeft<=(bombasTotal[i].offsetLeft+24))&& // esquerda tiro com direita bomba
                    ((tiro.offsetLeft+6)>=(bombasTotal[i].offsetLeft)) //direita tiro com esquerda bomba
                )
            ){
                bombasTotal[i].remove();
                tiro.remove();
            }
        }
    }
}

function controlaJogador(){
    pjy+=diryJ*velJ;
    pjx+=dirxJ*velJ;
    jog.style.top = pjy+"px";
    jog.style.left = pjx+"px";
}

function gameLoop(){
    if(jogo){
        //funções de controle
        controlaJogador();
        controleTiros();
        controlaBomba();

    }
    frames = requestAnimationFrame(gameLoop)
}

function inicia(){
    jogo = true;

    //Ini tela
    tamTelaH = window.innerHeight;
    tamTelaW = window.innerWidth;

    //ini jogador

    dirxJ = diryJ = 0
    pjx = tamTelaW/2
    pjy = tamTelaH/2
    velJ = velT = 5;
    jog = document.getElementById("naveJog");
    jog.style.top = pjy+"px";
    jog.style.left = pjx+"px";

    //controle das bombas

    clearInterval(tmpCriaBomba);
    contBombas = 150;
    velB = 3;
    tmpCriaBomba = setInterval(criaBomba, 1700);

    //controles planeta

    vidaPlaneta = 300;

    gameLoop()

}

window.addEventListener("load", inicia);
document.addEventListener("keydown", teclaDw);
document.addEventListener("keyup", teclaUp);