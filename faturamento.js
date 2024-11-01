// Dados de faturamento por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Função para calcular percentual do faturamento
export const calcularPercentual = () => {
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr, 0);
    const percentualPorEstado = {};

    for (const estado in faturamentoPorEstado) {
        percentualPorEstado[estado] = ((faturamentoPorEstado[estado] / totalFaturamento) * 100).toFixed(2) + '%';
    }

    return percentualPorEstado;
}; 
