const API_URL = "http://localhost:3000/producoes";

// LISTAR PRODUÇÕES
export async function listarProducoes() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar produções.");
  }

  return await response.json();
}

// BUSCAR UMA PRODUÇÃO
export async function buscarProducao(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar produção.");
  }

  return await response.json();
}

// CRIAR PRODUÇÃO
export async function criarProducao(producao) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producao),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar produção.");
  }

  return await response.json();
}

// ATUALIZAR PRODUÇÃO
export async function atualizarProducao(id, producao) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producao),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar produção.");
  }

  return await response.json();
}

// EXCLUIR PRODUÇÃO
export async function excluirProducao(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir produção.");
  }

  return await response.json();
}