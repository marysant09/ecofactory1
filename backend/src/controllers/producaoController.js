import pool from '../config/database.js';

const listarProducoes = async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT
        p.id,
        p.produto,
        p.quantidade_produzida,
        p.quantidade_esperada,
        p.data,
        p.maquina_id,
        m.nome AS maquina
      FROM producoes p
      JOIN maquinas m ON p.maquina_id = m.id
      ORDER BY p.id
    `);

    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao listar produções'
    });
  }
};

const buscarProducao = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(`
      SELECT
        p.id,
        p.produto,
        p.quantidade_produzida,
        p.quantidade_esperada,
        p.data,
        p.maquina_id,
        m.nome AS maquina
      FROM producoes p
      JOIN maquinas m ON p.maquina_id = m.id
      WHERE p.id = $1
    `, [id]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Produção não encontrada'
      });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao buscar produção'
    });
  }
};

const criarProducao = async (req, res) => {
  try {
    const {
      produto,
      quantidade_produzida,
      quantidade_esperada,
      data,
      maquina_id
    } = req.body;

    const resultado = await pool.query(
      `INSERT INTO producoes
      (produto, quantidade_produzida, quantidade_esperada, data, maquina_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [
        produto,
        quantidade_produzida,
        quantidade_esperada,
        data,
        maquina_id
      ]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao criar produção'
    });
  }
};

const atualizarProducao = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      produto,
      quantidade_produzida,
      quantidade_esperada,
      data,
      maquina_id
    } = req.body;

    const resultado = await pool.query(
      `UPDATE producoes
      SET produto = $1,
          quantidade_produzida = $2,
          quantidade_esperada = $3,
          data = $4,
          maquina_id = $5
      WHERE id = $6
      RETURNING *`,
      [
        produto,
        quantidade_produzida,
        quantidade_esperada,
        data,
        maquina_id,
        id
      ]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Produção não encontrada'
      });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao atualizar produção'
    });
  }
};

const excluirProducao = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      'DELETE FROM producoes WHERE id = $1 RETURNING *',
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Produção não encontrada'
      });
    }

    res.json({
      mensagem: 'Produção excluída com sucesso'
    });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao excluir produção'
    });
  }
};

export {
  listarProducoes,
  buscarProducao,
  criarProducao,
  atualizarProducao,
  excluirProducao
};