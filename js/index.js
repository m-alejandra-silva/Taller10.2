document.getElementById('buttonText').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value; // Usamos let para la variable
    localStorage.setItem('textoGuardado', inputText);
});
