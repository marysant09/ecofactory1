import { useEffect, useState } from "react";
import { listarMaquinas, criarMaquina, excluirMaquina } from "../services/maquinaService";

function Maquinas() {
  const [maquinas, setMaquinas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const carregar = async () => {
    try {
      setCarregando(true);
      const dados = await listarMaquinas();
      setMaquinas(dados);
    } catch (error) {
      setErro("Não foi possível carregar as máquinas.");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  const excluir = async (id) => {
    if (!window.confirm("Deseja excluir esta máquina?")) return;

    try {
      await excluirMaquina(id);
      carregar();
    } catch {
      alert("Erro ao excluir máquina.");
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">GESTÃO</span>
          <h1>Máquinas</h1>
          <p>Monitore as máquinas cadastradas na indústria.</p>
        </div>
      </div>

      {carregando && <div className="loading">Carregando máquinas...</div>}

      {erro && <div className="form-message error">{erro}</div>}

      {!carregando && !erro && (
        <div className="panel table-panel">
          <div className="panel-header">
            <h3>Máquinas cadastradas</h3>
            <span>{maquinas.length} registros</span>
          </div>

          {maquinas.length === 0 ? (
            <div className="empty-state">
              Nenhuma máquina cadastrada.
            </div>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Setor</th>
                    <th>Tipo</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>

                <tbody>
                  {maquinas.map((maquina) => (
                    <tr key={maquina.id}>
                      <td>#{maquina.id}</td>
                      <td>{maquina.nome}</td>
                      <td>{maquina.setor}</td>
                      <td>{maquina.tipo || "-"}</td>
                      <td>
                        <span className="status">
                          {maquina.status || "Ativa"}
                        </span>
                      </td>
                      <td>
                        <button
                          className="delete-button"
                          onClick={() => excluir(maquina.id)}
                        >
                          Excluir
                        </button>
                      </td>
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

export default Maquinas;