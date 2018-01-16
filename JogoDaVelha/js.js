function testaFimJogo() {

    var bola = 0; 
    var xis = 0; 
    
    if ( validaPosicao[1] == 1 && validaPosicao[2] == 1 && validaPosicao[3] == 1 ) {
        if ( validaPosicao[4] == 1 && validaPosicao[5] == 1 && validaPosicao[6] == 1 ) {
            if ( validaPosicao[7] == 1 && validaPosicao[8] == 1 && validaPosicao[9] == 1 ) {
            
                
                
                if (    marcaPosicao[1] == "bola" && marcaPosicao[2] == "bola" && marcaPosicao[3] == "bola" || 
                        marcaPosicao[4] == "bola" && marcaPosicao[5] == "bola" && marcaPosicao[6] == "bola" || 
                        marcaPosicao[7] == "bola" && marcaPosicao[8] == "bola" && marcaPosicao[9] == "bola" ||  
                        marcaPosicao[1] == "bola" && marcaPosicao[4] == "bola" && marcaPosicao[7] == "bola" ||  
                        marcaPosicao[2] == "bola" && marcaPosicao[5] == "bola" && marcaPosicao[8] == "bola" ||  
                        marcaPosicao[3] == "bola" && marcaPosicao[6] == "bola" && marcaPosicao[9] == "bola" ||  
                        marcaPosicao[1] == "bola" && marcaPosicao[5] == "bola" && marcaPosicao[9] == "bola" ||  
                        marcaPosicao[3] == "bola" && marcaPosicao[5] == "bola" && marcaPosicao[7] == "bola" )
                    {
                        bola = 1; 
                    }
                
            
                if (    marcaPosicao[1] == "xis" && marcaPosicao[2] == "xis" && marcaPosicao[3] == "xis" ||  
                        marcaPosicao[4] == "xis" && marcaPosicao[5] == "xis" && marcaPosicao[6] == "xis" ||  
                        marcaPosicao[7] == "xis" && marcaPosicao[8] == "xis" && marcaPosicao[9] == "xis" ||  
                        marcaPosicao[1] == "xis" && marcaPosicao[4] == "xis" && marcaPosicao[7] == "xis" ||  
                        marcaPosicao[2] == "xis" && marcaPosicao[5] == "xis" && marcaPosicao[8] == "xis" ||  
                        marcaPosicao[3] == "xis" && marcaPosicao[6] == "xis" && marcaPosicao[9] == "xis" ||  
                        marcaPosicao[1] == "xis" && marcaPosicao[5] == "xis" && marcaPosicao[9] == "xis" ||  
                        marcaPosicao[3] == "xis" && marcaPosicao[5] == "xis" && marcaPosicao[7] == "xis" )
                    {
                        xis = 1; 
                    }
                
                    if (bola == 0 && xis == 0) 
                        exibeMensagem("Ops...Deu Velha!<br /> Tente Novamente!");
                            
                    else 
                    if (bola == 1 && xis == 0)
                        exibeMensagem("PARABÉNS!<br /> Jogador - O - Venceu!");
                                
                    else 
                    if (bola == 0 && xis == 1) 
                        exibeMensagem("PARABÉNS!<br /> Jogador - X - Venceu!");
                            
                                
                } 
            } 
    }
}