import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";

import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Maquinas from "./pages/Maquinas";
import Producao from "./pages/Producao";
import Sustentabilidade from "./pages/Sustentabilidade";
import Ocorrencias from "./pages/Ocorrencias";
import Relatorios from "./pages/Relatorios";

function App() {
  const [pagina, setPagina] = useState("cadastro");

  function renderizarPagina() {
    switch (pagina) {
      case "dashboard":
        return <Dashboard />;

      case "maquinas":
        return <Maquinas />;

      case "producao":
        return <Producao />;

      case "sustentabilidade":
        return <Sustentabilidade />;

      case "ocorrencias":
        return <Ocorrencias />;

      case "relatorios":
        return <Relatorios />;

      case "cadastro":
      default:
        return <Cadastro onNavigate={setPagina} />;
    }
  }

  return (
    <div className="app">
      {pagina !== "cadastro" && (
        <Sidebar
          paginaAtual={pagina}
          onNavigate={setPagina}
        />
      )}

      <main
        className={
          pagina === "cadastro"
            ? "main-cadastro"
            : "main-content"
        }
      >
        {renderizarPagina()}
      </main>
    </div>
  );
}

export default App;