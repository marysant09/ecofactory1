const API_URL = "http://localhost:3000/ocorrencias";

export async function listarOcorrencias() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar ocorrências.");
  }

  return await response.json();
}

export async function buscarOcorrencia(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar ocorrência.");
  }

  return await response.json();
}

export async function criarOcorrencia(ocorrencia) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ocorrencia),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar ocorrência.");
  }

  return await response.json();
}

export async function atualizarOcorrencia(id, ocorrencia) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ocorrencia),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar ocorrência.");
  }

  return await response.json();
}

export async function excluirOcorrencia(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir ocorrência.");
  }

  return await response.json();
}