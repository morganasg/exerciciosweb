var jogador = 1;  
var jogadas = [void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0];
var posicoesJogo = [0,0,0,0,0,0,0,0,0];
var fimJogo=false;
var placar = [0,0];

function carregaPlacar()
{
    document.getElementById("placarO").innerText = placar[0];
    document.getElementById("placarX").innerText = placar[1];
}

function limpaTela()
{
    jogador = 1;  
    jogadas = [void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0];
    posicoesJogo = [0,0,0,0,0,0,0,0,0];
    fimJogo=false;
    document.getElementById("campo"+0).style.backgroundImage = 'none';
    document.getElementById("campo"+1).style.backgroundImage = 'none';
    document.getElementById("campo"+2).style.backgroundImage = 'none';
    document.getElementById("campo"+3).style.backgroundImage = 'none';
    document.getElementById("campo"+4).style.backgroundImage = 'none';
    document.getElementById("campo"+5).style.backgroundImage = 'none';
    document.getElementById("campo"+6).style.backgroundImage = 'none';
    document.getElementById("campo"+7).style.backgroundImage = 'none';
    document.getElementById("campo"+8).style.backgroundImage = 'none';
}

function jogo(posicaoJogada) 
{
    if(fimJogo)
    {
        limpaTela();    
    }
    carregaPlacar();
    ocultarMensagem();
    if(posicoesJogo[posicaoJogada]==0)
    {
        if(jogador==1)
        {
            document.getElementById("campo"+posicaoJogada).style.backgroundImage = 'url("p1.png")';
            posicoesJogo[posicaoJogada]="p1";
        }else
        {
            document.getElementById("campo"+posicaoJogada).style.backgroundImage = 'url("p2.png")';
            posicoesJogo[posicaoJogada]="p2";
        }        
        trocaJogador();
        validaFimJogo();
    }else
    {
        exibeMensagem("Este campo já esta marcado!<br/> Escolha outro!");
    }
}

function validaFimJogo()
{
    carregaJogadas();   
    
    var vencedor;
    for(i=0;i<8;i++)
    {
        vencedor = validaVencedor(jogadas[i]);
        if(vencedor!=0)
        {
            break;
        }
    }
    if(vencedor != 0){
        if(vencedor == "p1"){
            exibeMensagem("PARABÉNS!<br /> Jogador - O - Venceu!");
            fimJogo=true;
            placar[0]++;
        }
        else{
            exibeMensagem("PARABÉNS!<br /> Jogador - X - Venceu!");
            fimJogo=true;
            placar[1]++;
        }

    }
    if(posicoesJogo[0]!=0 && posicoesJogo[1]!=0 && posicoesJogo[2]!=0 &&
        posicoesJogo[3]!=0 && posicoesJogo[4]!=0 && posicoesJogo[5]!=0 && 
        posicoesJogo[6]!=0 && posicoesJogo[7]!=0 && posicoesJogo[8]!=0)
    {
        exibeMensagem("Ops...Deu Velha!<br /> Tente Novamente!");
        fimJogo=true;
    }
}
function carregaJogadas()
{
    jogadas[0]=[0,1,2];
    jogadas[1]=[3,4,5];
    jogadas[2]=[6,7,8];
    jogadas[3]=[0,4,8];
    jogadas[4]=[2,4,6];
    jogadas[5]=[0,3,6];
    jogadas[6]=[1,4,7];
    jogadas[7]=[2,5,8];

}
function validaVencedor(jogada){
    if(posicoesJogo[jogada[0]] == posicoesJogo[jogada[1]] && posicoesJogo[jogada[1]] == posicoesJogo[jogada[2]]){
        if(posicoesJogo[jogada[0]] != 0){
            return posicoesJogo[jogada[0]];
        }
        return 0;
    }
    else{
        return 0;
    }
}

function trocaJogador()
{
    if (jogador == 1){
        jogador = 2;    
    } 
    else{
        jogador = 1;   
    }           
}

function exibeMensagem(mensagem) {
    var elemento = document.getElementById("mensagem");
    elemento.innerHTML = mensagem;
    document.getElementById("painel-mensagem").style.visibility = "visible";
}

function ocultarMensagem()
{
    document.getElementById("painel-mensagem").style.visibility = "hidden";
}

window.onload = function(e){
    carregaPlacar();
}