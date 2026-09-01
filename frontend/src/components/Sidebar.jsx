import "./Sidebar.css";

function Sidebar({ paginaAtual, onNavigate }) {
  const menu = [
    {
      id: "dashboard",
      nome: "Dashboard",
      icone: "▦",
    },
    {
      id: "maquinas",
      nome: "Máquinas",
      icone: "⚙",
    },
    {
      id: "producao",
      nome: "Produção",
      icone: "▤",
    },
    {
      id: "sustentabilidade",
      nome: "Sustentabilidade",
      icone: "♻",
    },
    {
      id: "ocorrencias",
      nome: "Ocorrências",
      icone: "⚠",
    },
    {
      id: "relatorios",
      nome: "Relatórios",
      icone: "▥",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">E</div>

        <div>
          <h2>EcoFactory</h2>
          <span>Gestão inteligente</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        <p className="menu-title">MENU PRINCIPAL</p>

        {menu.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${
              paginaAtual === item.id ? "active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="menu-icon">{item.icone}</span>
            <span>{item.nome}</span>
          </button>
        ))}

        <p className="menu-title cadastro-title">CADASTROS</p>

        <button
          className={`menu-item ${paginaAtual === "cadastro" ? "active" : ""}`}
          onClick={() => onNavigate("cadastro")}
        >
          <span className="menu-icon">＋</span>
          <span>Novo Cadastro</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <div className="user-avatar">U</div>

        <div>
          <strong>Usuário</strong>
          <span>Gestor</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;