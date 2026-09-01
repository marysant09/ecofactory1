function Dashboard() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">VISÃO GERAL</span>
          <h1>Dashboard</h1>
          <p>Acompanhe os principais indicadores da sua indústria.</p>
        </div>

        <button className="secondary-button">Hoje ▾</button>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <span>Produção total</span>
          <strong>12.480</strong>
          <small className="positive">↑ 12,4% este mês</small>
        </div>

        <div className="kpi-card">
          <span>Máquinas ativas</span>
          <strong>18 / 20</strong>
          <small className="positive">90% operacionais</small>
        </div>

        <div className="kpi-card">
          <span>Consumo de energia</span>
          <strong>8.420 kWh</strong>
          <small className="negative">↓ 8,2% este mês</small>
        </div>

        <div className="kpi-card">
          <span>EcoScore</span>
          <strong>87/100</strong>
          <small className="positive">↑ 5 pontos</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <h3>Produção</h3>
              <span>Últimos 7 dias</span>
            </div>
          </div>

          <div className="chart">
            {[65, 80, 55, 90, 72, 96, 84].map((valor, index) => (
              <div className="bar-wrapper" key={index}>
                <div
                  className="bar"
                  style={{ height: `${valor}%` }}
                ></div>
                <span>{["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel ecoscore">
          <h3>EcoScore</h3>

          <div className="score-circle">
            <strong>87</strong>
            <span>/100</span>
          </div>

          <p>Excelente desempenho ambiental</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;