import pool from '../config/database.js';

const listarMaquinas = async (req, res) => {
  try {
    const resultado = await pool.query(
      'SELECT * FROM maquinas ORDER BY id'
    );

    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao listar máquinas' });
  }
};

const buscarMaquina = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      'SELECT * FROM maquinas WHERE id = $1',
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Máquina não encontrada'
      });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao buscar máquina'
    });
  }
};

const criarMaquina = async (req, res) => {
  try {
    const {
      nome,
      setor,
      tipo,
      status,
      consumo_energia,
      temperatura
    } = req.body;

    const resultado = await pool.query(
      `INSERT INTO maquinas
      (nome, setor, tipo, status, consumo_energia, temperatura)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [
        nome,
        setor,
        tipo,
        status,
        consumo_energia,
        temperatura
      ]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao criar máquina'
    });
  }
};

const atualizarMaquina = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      nome,
      setor,
      tipo,
      status,
      consumo_energia,
      temperatura
    } = req.body;

    const resultado = await pool.query(
      `UPDATE maquinas
      SET nome = $1,
          setor = $2,
          tipo = $3,
          status = $4,
          consumo_energia = $5,
          temperatura = $6
      WHERE id = $7
      RETURNING *`,
      [
        nome,
        setor,
        tipo,
        status,
        consumo_energia,
        temperatura,
        id
      ]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Máquina não encontrada'
      });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao atualizar máquina'
    });
  }
};

const excluirMaquina = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      'DELETE FROM maquinas WHERE id = $1 RETURNING *',
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Máquina não encontrada'
      });
    }

    res.json({
      mensagem: 'Máquina excluída com sucesso'
    });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao excluir máquina'
    });
  }
};

export {
  listarMaquinas,
  buscarMaquina,
  criarMaquina,
  atualizarMaquina,
  excluirMaquina
};