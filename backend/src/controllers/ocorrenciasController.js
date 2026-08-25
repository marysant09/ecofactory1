import pool from '../config/database.js';

const listarOcorrencias = async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT
        o.id,
        o.tipo,
        o.descricao,
        o.nivel_risco,
        o.local,
        o.data,
        o.medida_preventiva,
        o.maquina_id,
        m.nome AS maquina
      FROM ocorrencias o
      JOIN maquinas m ON o.maquina_id = m.id
      ORDER BY o.id
    `);

    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao listar ocorrências'
    });
  }
};

const buscarOcorrencia = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(`
      SELECT
        o.id,
        o.tipo,
        o.descricao,
        o.nivel_risco,
        o.local,
        o.data,
        o.medida_preventiva,
        o.maquina_id,
        m.nome AS maquina
      FROM ocorrencias o
      JOIN maquinas m ON o.maquina_id = m.id
      WHERE o.id = $1
    `, [id]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Ocorrência não encontrada'
      });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao buscar ocorrência'
    });
  }
};

const criarOcorrencia = async (req, res) => {
  try {
    const {
      tipo,
      descricao,
      nivel_risco,
      local,
      data,
      medida_preventiva,
      maquina_id
    } = req.body;

    const resultado = await pool.query(
      `INSERT INTO ocorrencias
      (tipo, descricao, nivel_risco, local, data, medida_preventiva, maquina_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [
        tipo,
        descricao,
        nivel_risco,
        local,
        data,
        medida_preventiva,
        maquina_id
      ]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao criar ocorrência'
    });
  }
};

const atualizarOcorrencia = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      tipo,
      descricao,
      nivel_risco,
      local,
      data,
      medida_preventiva,
      maquina_id
    } = req.body;

    const resultado = await pool.query(
      `UPDATE ocorrencias
      SET tipo = $1,
          descricao = $2,
          nivel_risco = $3,
          local = $4,
          data = $5,
          medida_preventiva = $6,
          maquina_id = $7
      WHERE id = $8
      RETURNING *`,
      [
        tipo,
        descricao,
        nivel_risco,
        local,
        data,
        medida_preventiva,
        maquina_id,
        id
      ]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Ocorrência não encontrada'
      });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao atualizar ocorrência'
    });
  }
};

const excluirOcorrencia = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      'DELETE FROM ocorrencias WHERE id = $1 RETURNING *',
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Ocorrência não encontrada'
      });
    }

    res.json({
      mensagem: 'Ocorrência excluída com sucesso'
    });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao excluir ocorrência'
    });
  }
};

export {
  listarOcorrencias,
  buscarOcorrencia,
  criarOcorrencia,
  atualizarOcorrencia,
  excluirOcorrencia
};