const button = document.getElementById('generate');

button.addEventListener('click',function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (min > max) {
        alert('Por favor, insira um valor mínimo menor ou igual ao valor máximo.');
        return;
    }

    let result = Math.floor(Math.random() * (max - min + 1) + min)

    if(isNaN(result)) {
        result = 'Valor inválido'
    }

    document.querySelector('#result > span').textContent = result;

})