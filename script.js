document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch('https://liturgia.up.railway.app/');
        const data = await response.json();

        displayLiturgia(data);
    } catch (error) {
        console.error('Erro ao obter dados da liturgia:', error);
    }
});

function displayLiturgia(data) {
    document.getElementById('data').textContent = `Data: ${data.data}`;
    document.getElementById('liturgia').textContent = `Liturgia: ${data.liturgia}`;
    document.getElementById('cor').textContent = `Cor: ${data.cor}`;
    document.getElementById('dia').textContent = `Dia: ${data.dia}`;
    document.getElementById('oferendas').textContent = `Oferendas: ${data.oferendas}`;
    document.getElementById('comunhao').textContent = `Comunhão: ${data.comunhao}`;

    if (data.primeiraLeitura) {
        document.getElementById('primeiraLeitura').innerHTML = `<strong>Primeira Leitura:</strong> ${data.primeiraLeitura.referencia} - ${data.primeiraLeitura.titulo}<br>${data.primeiraLeitura.texto}`;
    }

    if (data.segundaLeitura) {
        document.getElementById('segundaLeitura').innerHTML = `<strong>Segunda Leitura:</strong> ${data.segundaLeitura.referencia} - ${data.segundaLeitura.titulo}<br>${data.segundaLeitura.texto}`;
    } else {
        document.getElementById('segundaLeitura').innerHTML = `<strong>Segunda Leitura:</strong> Não há segunda leitura hoje!`;
    }

    document.getElementById('salmo').innerHTML = `<strong>Salmo:</strong> ${data.salmo.referencia} - ${data.salmo.refrao}<br>${data.salmo.texto}`;
    document.getElementById('evangelho').innerHTML = `<strong>Evangelho:</strong> ${data.evangelho.referencia} - ${data.evangelho.titulo}<br>${data.evangelho.texto}`;
}
