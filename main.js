// importado o script de faturamento para o script main
import { calcularPercentual } from './faturamento.js';

// exibindo o resultado na execucão da funçao
const percentual = calcularPercentual();
const listaFaturamento = document.getElementById('lista-faturamento');
for (const estado in percentual) {
    const item = document.createElement('li');
    item.textContent = `${estado}: ${percentual[estado]}`;
    listaFaturamento.appendChild(item);
}

// Função para inverter a string
const inverterString = (str) => str.split('').reverse().join('');

// Evento para inverter a string quando o botão for clicado
document.getElementById('inverterButton').addEventListener('click', () => {
    const stringInput = document.getElementById('stringInput').value;
    const stringInvertida = inverterString(stringInput);
    document.getElementById('stringInvertida').textContent = `String invertida: ${stringInvertida}`;
});
