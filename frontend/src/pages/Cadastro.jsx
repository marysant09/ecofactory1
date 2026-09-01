import { useState } from "react";

function Cadastro({ onNavigate }) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    setor: "",
    cargo: "",
    perfil: "Funcionário",
  });

  const [mensagem, setMensagem] = useState("");

  function alterarCampo(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function cadastrar(event) {
    event.preventDefault();

    if (
      !form.nome ||
      !form.email ||
      !form.senha ||
      !form.confirmarSenha ||
      !form.setor ||
      !form.cargo
    ) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    if (form.senha !== form.confirmarSenha) {
      setMensagem("As senhas não coincidem.");
      return;
    }

    setMensagem("Cadastro realizado com sucesso!");

    setTimeout(() => {
      if (onNavigate) {
        onNavigate("dashboard");
      }
    }, 1000);
  }

  return (
    <div className="cadastro-page">
      <section className="cadastro-left">
        <div className="brand-large">
          <div className="brand-icon">E</div>

          <div>
            <h1>EcoFactory</h1>
          </div>
        </div>

        <div className="cadastro-intro">
          <span className="tag">GESTÃO INDUSTRIAL INTELIGENTE</span>

          <h2>
            Transformando dados em{" "}
            <strong>decisões sustentáveis.</strong>
          </h2>

          <p>
            Monitore sua produção, acompanhe máquinas e transforme
            sustentabilidade em resultados.
          </p>
        </div>

        <div className="preview-cards">
          <div>
            <strong>94%</strong>
            <span>Eficiência</span>
          </div>

          <div>
            <strong>−18%</strong>
            <span>Consumo</span>
          </div>

          <div>
            <strong>+24%</strong>
            <span>Produção</span>
          </div>
        </div>
      </section>

      <section className="cadastro-right">
        <div className="form-container">
          <div className="form-header">
            <span className="form-step">PRIMEIRO ACESSO</span>

            <h2>Crie sua conta</h2>

            <p>
              Preencha seus dados para acessar o EcoFactory.
            </p>
          </div>

          <form onSubmit={cadastrar}>
            <label>
              Nome completo

              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={alterarCampo}
                placeholder="Digite seu nome"
              />
            </label>

            <label>
              E-mail

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={alterarCampo}
                placeholder="seu@email.com"
              />
            </label>

            <div className="form-grid">
              <label>
                Setor

                <input
                  type="text"
                  name="setor"
                  value={form.setor}
                  onChange={alterarCampo}
                  placeholder="Ex.: Produção"
                />
              </label>

              <label>
                Cargo

                <input
                  type="text"
                  name="cargo"
                  value={form.cargo}
                  onChange={alterarCampo}
                  placeholder="Ex.: Analista"
                />
              </label>
            </div>

            <label>
              Perfil

              <select
                name="perfil"
                value={form.perfil}
                onChange={alterarCampo}
              >
                <option value="Funcionário">Funcionário</option>
                <option value="Gestor">Gestor</option>
              </select>
            </label>

            <div className="form-grid">
              <label>
                Senha

                <input
                  type="password"
                  name="senha"
                  value={form.senha}
                  onChange={alterarCampo}
                  placeholder="••••••••"
                />
              </label>

              <label>
                Confirmar senha

                <input
                  type="password"
                  name="confirmarSenha"
                  value={form.confirmarSenha}
                  onChange={alterarCampo}
                  placeholder="••••••••"
                />
              </label>
            </div>

            {mensagem && (
              <div
                className={
                  mensagem.includes("sucesso")
                    ? "form-message success"
                    : "form-message error"
                }
              >
                {mensagem}
              </div>
            )}

            <button
              className="primary-button"
              type="submit"
            >
              Criar conta
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Cadastro;