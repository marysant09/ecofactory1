import { useEffect, useState } from "react";
import { listarSustentabilidade } from "../services/sustentabilidadeService";

function Sustentabilidade() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregar = async () => {
      try {
        const resultado = await listarSustentabilidade();
        setDados(resultado);
      } catch (error) {
        console.error(error);
      } finally {
        setCarregando(false);
      }
    };

    carregar();
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">AMBIENTAL</span>
          <h1>Sustentabilidade</h1>
          <p>Indicadores ambientais da indústria.</p>
        </div>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <span>Energia</span>
          <strong>8.420 kWh</strong>
          <small>Consumo registrado</small>
        </div>

        <div className="kpi-card">
          <span>Água</span>
          <strong>4.280 L</strong>
          <small>Consumo registrado</small>
        </div>

        <div className="kpi-card">
          <span>Resíduos</span>
          <strong>680 kg</strong>
          <small>Produzidos</small>
        </div>

        <div className="kpi-card">
          <span>Reciclados</span>
          <strong>540 kg</strong>
          <small className="positive">79,4% reciclados</small>
        </div>
      </div>

      <div className="panel table-panel">
        <div className="panel-header">
          <h3>Registros ambientais</h3>
          <span>{dados.length} registros</span>
        </div>

        {carregando ? (
          <div className="loading">Carregando...</div>
        ) : dados.length === 0 ? (
          <div className="empty-state">
            Nenhum registro ambiental encontrado.
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Energia</th>
                  <th>Água</th>
                  <th>Resíduos</th>
                  <th>Reciclado</th>
                </tr>
              </thead>

              <tbody>
                {dados.map((item) => (
                  <tr key={item.id}>
                    <td>{item.data}</td>
                    <td>{item.consumo_energia} kWh</td>
                    <td>{item.consumo_agua} L</td>
                    <td>{item.residuos} kg</td>
                    <td>{item.quantidade_reciclada} kg</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sustentabilidade;