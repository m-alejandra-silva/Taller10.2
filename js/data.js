document.addEventListener('DOMContentLoaded', function() {
    let datoGuardado = localStorage.getItem('textoGuardado');
    document.getElementById('data').textContent = datoGuardado ? datoGuardado : 'No hay datos guardados.';
});
