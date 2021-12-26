
function boletimEscolar () {
        
        const bnt = document.querySelector("#bnt");    
        bnt.addEventListener("click", function(evento) {
                evento.preventDefault();
        
                const nota = document.querySelector("#nota");
                let value = nota.value;
               
                value =  ( 
                value >= 0 && value <= 59 ? 'E' : 
                value >= 60 && value <=69 ? 'D' :
                value >= 70 && value <=79 ? 'C' :
                value >= 80 && value <=89 ? 'B' :
                value >= 90 && value <= 100 ? 'A' : null
                )                   
                
                const write = document.writeln("Sua nota é: "+value)
                console.log(value)
        
        });    
        
}

boletimEscolar()





      
           
       