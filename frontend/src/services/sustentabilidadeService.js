const API_URL = "http://localhost:3000/sustentabilidade";

// LISTAR REGISTROS
export async function listarSustentabilidade() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar registros de sustentabilidade.");
  }

  return await response.json();
}

// BUSCAR UM REGISTRO
export async function buscarSustentabilidade(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar registro de sustentabilidade.");
  }

  return await response.json();
}

// CRIAR REGISTRO
export async function criarSustentabilidade(registro) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registro),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar registro de sustentabilidade.");
  }

  return await response.json();
}

// ATUALIZAR REGISTRO
export async function atualizarSustentabilidade(id, registro) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registro),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar registro de sustentabilidade.");
  }

  return await response.json();
}

// EXCLUIR REGISTRO
export async function excluirSustentabilidade(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir registro de sustentabilidade.");
  }

  return await response.json();
}