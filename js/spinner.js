const btnSaibamais = document.querySelector('#btn-saibamais');

btnSaibamais.addEventListener('click', function() {
    btnSaibamais.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Carregando...`;
    btnSaibamais.disabled = true;
    
    setTimeout(function() {
        document.location.href = "sobre.html"
        }, 2000);
});

