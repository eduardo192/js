function random10(){
        let textArea = document.getElementById('texto');
        textArea.innerHTML = "";
        for(let i = 0; i<10; i++){
            textArea.innerHTML = textArea.innerHTML + (Math.floor(Math.random()*11)+1) + "\n";
        }
        
}