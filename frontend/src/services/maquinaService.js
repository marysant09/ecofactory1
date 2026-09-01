const API_URL = "http://localhost:3000/maquinas";

// LISTAR MÁQUINAS
export async function listarMaquinas() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar máquinas.");
  }

  return await response.json();
}

// BUSCAR UMA MÁQUINA
export async function buscarMaquina(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar máquina.");
  }

  return await response.json();
}

// CRIAR MÁQUINA
export async function criarMaquina(maquina) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(maquina),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar máquina.");
  }

  return await response.json();
}

// ATUALIZAR MÁQUINA
export async function atualizarMaquina(id, maquina) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(maquina),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar máquina.");
  }

  return await response.json();
}

// EXCLUIR MÁQUINA
export async function excluirMaquina(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir máquina.");
  }

  return await response.json();
}