import { useEffect, useState } from "react";
import { listarProducoes } from "../services/producaoService";

function Producao() {
  const [producoes, setProducoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const carregar = async () => {
      try {
        const dados = await listarProducoes();
        setProducoes(dados);
      } catch {
        setErro("Não foi possível carregar as produções.");
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
          <span className="eyebrow">PRODUÇÃO</span>
          <h1>Produção</h1>
          <p>Acompanhe os registros de produção.</p>
        </div>
      </div>

      {carregando && <div className="loading">Carregando...</div>}

      {erro && <div className="form-message error">{erro}</div>}

      {!carregando && !erro && (
        <div className="panel table-panel">
          <div className="panel-header">
            <h3>Registros de produção</h3>
            <span>{producoes.length} registros</span>
          </div>

          {producoes.length === 0 ? (
            <div className="empty-state">
              Nenhuma produção registrada.
            </div>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Produzido</th>
                    <th>Esperado</th>
                    <th>Data</th>
                    <th>Máquina</th>
                  </tr>
                </thead>

                <tbody>
                  {producoes.map((item) => (
                    <tr key={item.id}>
                      <td>#{item.id}</td>
                      <td>{item.produto}</td>
                      <td>{item.quantidade_produzida}</td>
                      <td>{item.quantidade_esperada}</td>
                      <td>{item.data}</td>
                      <td>{item.maquina_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Producao;