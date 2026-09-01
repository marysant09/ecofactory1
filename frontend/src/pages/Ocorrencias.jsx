import { useState } from "react";

function Ocorrencias() {
  const [ocorrencias, setOcorrencias] = useState([]);

  const [form, setForm] = useState({
    tipo: "",
    descricao: "",
    nivel_risco: "",
    local: "",
    data: "",
    medida_preventiva: "",
  });

  function alterarCampo(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function adicionarOcorrencia(event) {
    event.preventDefault();

    if (
      !form.tipo ||
      !form.descricao ||
      !form.nivel_risco ||
      !form.local ||
      !form.data
    ) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const novaOcorrencia = {
      id: Date.now(),
      ...form,
    };

    setOcorrencias([...ocorrencias, novaOcorrencia]);

    setForm({
      tipo: "",
      descricao: "",
      nivel_risco: "",
      local: "",
      data: "",
      medida_preventiva: "",
    });
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">SEGURANÇA E SAÚDE</span>

          <h1>Ocorrências</h1>

          <p>
            Registre e acompanhe ocorrências de segurança e saúde
            no ambiente industrial.
          </p>
        </div>
      </div>

      <div className="content-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <h3>Nova ocorrência</h3>
              <span>Registre uma ocorrência de SST</span>
            </div>
          </div>

          <form onSubmit={adicionarOcorrencia}>
            <label>
              Tipo de ocorrência

              <select
                name="tipo"
                value={form.tipo}
                onChange={alterarCampo}
              >
                <option value="">
                  Selecione
                </option>

                <option value="Acidente">
                  Acidente
                </option>

                <option value="Incidente">
                  Incidente
                </option>

                <option value="Risco">
                  Situação de risco
                </option>

                <option value="Manutenção">
                  Manutenção
                </option>
              </select>
            </label>

            <label>
              Descrição

              <textarea
                name="descricao"
                value={form.descricao}
                onChange={alterarCampo}
                placeholder="Descreva o que aconteceu..."
                rows="4"
              />
            </label>

            <div className="form-grid">
              <label>
                Nível de risco

                <select
                  name="nivel_risco"
                  value={form.nivel_risco}
                  onChange={alterarCampo}
                >
                  <option value="">
                    Selecione
                  </option>

                  <option value="Baixo">
                    Baixo
                  </option>

                  <option value="Médio">
                    Médio
                  </option>

                  <option value="Alto">
                    Alto
                  </option>

                  <option value="Crítico">
                    Crítico
                  </option>
                </select>
              </label>

              <label>
                Local

                <input
                  type="text"
                  name="local"
                  value={form.local}
                  onChange={alterarCampo}
                  placeholder="Ex.: Setor de produção"
                />
              </label>
            </div>

            <label>
              Data

              <input
                type="date"
                name="data"
                value={form.data}
                onChange={alterarCampo}
              />
            </label>

            <label>
              Medida preventiva

              <textarea
                name="medida_preventiva"
                value={form.medida_preventiva}
                onChange={alterarCampo}
                placeholder="Informe a medida preventiva..."
                rows="3"
              />
            </label>

            <button
              type="submit"
              className="primary-button"
            >
              Registrar ocorrência
            </button>
          </form>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div>
              <h3>Ocorrências registradas</h3>

              <span>
                {ocorrencias.length} ocorrência(s)
              </span>
            </div>
          </div>

          {ocorrencias.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">✓</div>

              <h3>Nenhuma ocorrência</h3>

              <p>
                Ainda não existem ocorrências registradas.
              </p>
            </div>
          ) : (
            <div className="occurrences-list">
              {ocorrencias.map((ocorrencia) => (
                <div
                  className="occurrence-card"
                  key={ocorrencia.id}
                >
                  <div className="occurrence-top">
                    <strong>
                      {ocorrencia.tipo}
                    </strong>

                    <span
                      className={`risk risk-${ocorrencia.nivel_risco.toLowerCase()}`}
                    >
                      {ocorrencia.nivel_risco}
                    </span>
                  </div>

                  <p>
                    {ocorrencia.descricao}
                  </p>

                  <small>
                    📍 {ocorrencia.local} · 📅{" "}
                    {ocorrencia.data}
                  </small>

                  {ocorrencia.medida_preventiva && (
                    <div className="preventive">
                      <strong>
                        Medida preventiva:
                      </strong>

                      <span>
                        {ocorrencia.medida_preventiva}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ocorrencias;