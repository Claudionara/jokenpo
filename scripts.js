




function playHuman(humanChoice) { 
    
   // console.log("Escolha do jogador: " + humanChoice);  
    document.querySelector("#one").innerHTML = humanChoice

    const machineChoice = playMachine();  
    //console.log("Escolha da máquina: " + machineChoice);  
    document.querySelector("#two").innerHTML = machineChoice
    
    // Obtenha o resultado chamando determineWinner
    const result = determineWinner(humanChoice, machineChoice);
    
    // Imprima o resultado no console
    //console.log(result);
    document.getElementById("result").innerHTML = result;//permitiu inserir o resultado dentre da div
}  

function playMachine() {  
    const choices = ['Pedra', 'Papel', 'Tesoura'];  
    const randomIndex = Math.floor(Math.random() * choices.length);   
    return choices[randomIndex];  
}  

function determineWinner(humanChoice, machineChoice) {  
    if (humanChoice === machineChoice) {  
      return "Empate!";  
    } else if (  
        (humanChoice === 'Pedra' && machineChoice === 'Tesoura') ||  
        (humanChoice === 'Papel' && machineChoice === 'Pedra') ||  
        (humanChoice === 'Tesoura' && machineChoice === 'Papel')  
    ) {  
       
        return  "Você ganhou!";  
    } else {  
        return "A máquina ganhou!";  
    }  
}  