function Relatorios() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">ANÁLISE</span>
          <h1>Relatórios</h1>
          <p>Visualize os principais resultados do EcoFactory.</p>
        </div>
      </div>

      <div className="report-grid">
        <div className="report-card">
          <span>01</span>
          <h3>Relatório de produção</h3>
          <p>
            Indicadores de produção, metas e desempenho das máquinas.
          </p>
          <button>Visualizar relatório</button>
        </div>

        <div className="report-card">
          <span>02</span>
          <h3>Relatório ambiental</h3>
          <p>
            Consumo de energia, água e gerenciamento de resíduos.
          </p>
          <button>Visualizar relatório</button>
        </div>

        <div className="report-card">
          <span>03</span>
          <h3>Relatório de SST</h3>
          <p>
            Ocorrências, níveis de risco e medidas preventivas.
          </p>
          <button>Visualizar relatório</button>
        </div>
      </div>
    </div>
  );
}

export default Relatorios;