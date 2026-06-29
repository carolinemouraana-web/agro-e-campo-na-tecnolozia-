/* ==========================================================================
   AGROTECH INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todas as funções principais do ecossistema agro
    initMobileMenu();
    initSensorTelemetry();
    initHarvestChart();
});

/**
 * 1. MENU RESPONSIVO (HAMBÚRGUER)
 * Gerencia a abertura e fechamento do menu em celulares
 */
function initMobileMenu() {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.menu-burger');
    
    // Cancela execução se os elementos não existirem na página atual
    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle-burger');
    });
}

/**
 * 2. TELEMETRIA DOS SENSORES (SIMULAÇÃO IOT)
 * Atualiza dados de sensores de campo em tempo real e emite alertas de seca
 */
function initSensorTelemetry() {
    const soilHumidityEl = document.getElementById('humidity-value');
    const temperatureEl = document.getElementById('temperature-value');
    const alertBoxEl = document.getElementById('agro-alert');

    if (!soilHumidityEl || !temperatureEl) return;

    // Simula variação natural de sensores a cada 4 segundos
    setInterval(() => {
        // Gera valores flutuantes realistas para o campo
        const currentHumidity = (Math.random() * (75 - 35) + 35).toFixed(1);
        const currentTemp = (Math.random() * (34 - 18) + 18).toFixed(1);

        // Atualiza a interface de texto do usuário
        soilHumidityEl.innerText = `${currentHumidity}%`;
        temperatureEl.innerText = `${currentTemp}°C`;

        // Regra de Negócio Agro: Alerta se a umidade do solo cair abaixo de 40%
        if (parseFloat(currentHumidity) < 40.0) {
            alertBoxEl.style.display = 'block';
            alertBoxEl.innerHTML = `⚠️ <strong>Alerta Crítico:</strong> Solo seco detectado no Talhão 04. Irrigação recomendada!`;
            alertBoxEl.className = 'alert-danger animate-pulse';
        } else {
            alertBoxEl.style.display = 'none';
        }
    }, 4000);
}

/**
 * 3. SIMULAÇÃO DE GRÁFICO DE PRODUÇÃO
 * Cria barras dinâmicas simples para representar sacas por hectare (Produtividade)
 */
function initHarvestChart() {
    const chartBars = document.querySelectorAll('.chart-bar-fill');
    if (chartBars.length === 0) return;

    // Simula o carregamento dos dados após conexão com o banco de dados agro
    setTimeout(() => {
        chartBars.forEach(bar => {
            const productionTarget = bar.getAttribute('data-production');
            // Altera a propriedade CSS height dinamicamente para efeito visual
            bar.style.height = `${productionTarget}%`;
        });
    }, 500);
}
