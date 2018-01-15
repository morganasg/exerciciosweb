var jogador = 1; 
var jogada = false; 

var valida_posicao = new Array(0,0,0,0,0,0,0,0,0,0); 
var marca_posicao = new Array(); 

function clic(posicao_jogada){  

    jogada = true; 

    if ( valida_posicao[posicao_jogada] == 0 ){ 
            if ( jogador == 1 ){ 
                document.getElementById("campo"+posicao_jogada).style.backgroundImage = 'url("circ.png")'; 
                marca_posicao[posicao_jogada] = "bola"; 
            }else
            if (jogador == 2 ){ 
                document.getElementById("campo"+posicao_jogada).style.backgroundImage = 'url("x.png")'; 
                marca_posicao[posicao_jogada] = "xis";
            }
            valida_posicao[posicao_jogada] = 1; 
        }
        else{
            jogada = false; 
            exibeMensagem("Este campo já esta marcado!<br/> Escolha outro!");
        }
        
        if(jogada == true){
            trocaJogar();
        }        
        
        testaFimJogo(); 
        
    }


function trocaJogar(){
        if (jogador == 1){
            jogador = 2;    
        } 
        else{
            jogador = 1;   
        }           
}

function testaFimJogo(){

    
    if ( valida_posicao[1] == 1 && valida_posicao[2] == 1 && valida_posicao[3] == 1 ) {
    if ( valida_posicao[4] == 1 && valida_posicao[5] == 1 && valida_posicao[6] == 1 ) {
    if ( valida_posicao[7] == 1 && valida_posicao[8] == 1 && valida_posicao[9] == 1 ) {
    
        var bola = 0; 
        var xis = 0; 
        
        
        if (    marca_posicao[1] == "bola" && marca_posicao[2] == "bola" && marca_posicao[3] == "bola" || 
                marca_posicao[4] == "bola" && marca_posicao[5] == "bola" && marca_posicao[6] == "bola" || 
                marca_posicao[7] == "bola" && marca_posicao[8] == "bola" && marca_posicao[9] == "bola" ||  
                marca_posicao[1] == "bola" && marca_posicao[4] == "bola" && marca_posicao[7] == "bola" ||  
                marca_posicao[2] == "bola" && marca_posicao[5] == "bola" && marca_posicao[8] == "bola" ||  
                marca_posicao[3] == "bola" && marca_posicao[6] == "bola" && marca_posicao[9] == "bola" ||  
                marca_posicao[1] == "bola" && marca_posicao[5] == "bola" && marca_posicao[9] == "bola" ||  
                marca_posicao[3] == "bola" && marca_posicao[5] == "bola" && marca_posicao[7] == "bola" ){
                bola = 1; 
            }
        
      
        if (    marca_posicao[1] == "xis" && marca_posicao[2] == "xis" && marca_posicao[3] == "xis" ||  
                marca_posicao[4] == "xis" && marca_posicao[5] == "xis" && marca_posicao[6] == "xis" ||  
                marca_posicao[7] == "xis" && marca_posicao[8] == "xis" && marca_posicao[9] == "xis" ||  
                marca_posicao[1] == "xis" && marca_posicao[4] == "xis" && marca_posicao[7] == "xis" ||  
                marca_posicao[2] == "xis" && marca_posicao[5] == "xis" && marca_posicao[8] == "xis" ||  
                marca_posicao[3] == "xis" && marca_posicao[6] == "xis" && marca_posicao[9] == "xis" ||  
                marca_posicao[1] == "xis" && marca_posicao[5] == "xis" && marca_posicao[9] == "xis" ||  
                marca_posicao[3] == "xis" && marca_posicao[5] == "xis" && marca_posicao[7] == "xis" ){
                xis = 1; 
            }
        
            if (bola == 0 && xis == 0) 
                exibeMensagem("Deu Velha!<br /> Tente Novamente!");
                       
            else 
            if (bola == 1 && xis == 0) 
                exibeMensagem("Jogador *O* Venceu!");
                        
            else 
            if (bola == 0 && xis == 1) 
                exibeMensagem("Jogador *X* Venceu!");
                       
            else 
            if (bola == 1 && xis == 1) 
            exibeMensagem("Empate!Tente Novamente!");
            
        } 
    } 
} 

}

function exibeMensagem(mensagem){
    var elemento = document.getElementById("mensagem");
    elemento.innerHTML = mensagem;
    document.getElementById("painel-mensagem").style.visibility = "visible";
}








