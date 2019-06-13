function aleatorio (){
    let textArea = document.getElementById('texto');
    for(let  i=0; i<10; i++){
        textArea.innerHTML = textArea.innerHTML + Math.random() + "\n";
    }
}