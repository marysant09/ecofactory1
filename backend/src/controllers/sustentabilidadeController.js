import pool from '../config/database.js';

const listarSustentabilidade = async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT
        s.id,
        s.consumo_energia,
        s.consumo_agua,
        s.residuos,
        s.quantidade_reciclada,
        s.data,
        s.maquina_id,
        m.nome AS maquina
      FROM sustentabilidade s
      JOIN maquinas m ON s.maquina_id = m.id
      ORDER BY s.id
    `);

    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao listar registros de sustentabilidade'
    });
  }
};

const buscarSustentabilidade = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(`
      SELECT
        s.id,
        s.consumo_energia,
        s.consumo_agua,
        s.residuos,
        s.quantidade_reciclada,
        s.data,
        s.maquina_id,
        m.nome AS maquina
      FROM sustentabilidade s
      JOIN maquinas m ON s.maquina_id = m.id
      WHERE s.id = $1
    `, [id]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Registro de sustentabilidade não encontrado'
      });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao buscar registro de sustentabilidade'
    });
  }
};

const criarSustentabilidade = async (req, res) => {
  try {
    const {
      consumo_energia,
      consumo_agua,
      residuos,
      quantidade_reciclada,
      data,
      maquina_id
    } = req.body;

    const resultado = await pool.query(
      `INSERT INTO sustentabilidade
      (consumo_energia, consumo_agua, residuos, quantidade_reciclada, data, maquina_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [
        consumo_energia,
        consumo_agua,
        residuos,
        quantidade_reciclada,
        data,
        maquina_id
      ]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao criar registro de sustentabilidade'
    });
  }
};

const atualizarSustentabilidade = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      consumo_energia,
      consumo_agua,
      residuos,
      quantidade_reciclada,
      data,
      maquina_id
    } = req.body;

    const resultado = await pool.query(
      `UPDATE sustentabilidade
      SET consumo_energia = $1,
          consumo_agua = $2,
          residuos = $3,
          quantidade_reciclada = $4,
          data = $5,
          maquina_id = $6
      WHERE id = $7
      RETURNING *`,
      [
        consumo_energia,
        consumo_agua,
        residuos,
        quantidade_reciclada,
        data,
        maquina_id,
        id
      ]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Registro de sustentabilidade não encontrado'
      });
    }

    res.json(resultado.rows[0]);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao atualizar registro de sustentabilidade'
    });
  }
};

const excluirSustentabilidade = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      'DELETE FROM sustentabilidade WHERE id = $1 RETURNING *',
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        erro: 'Registro de sustentabilidade não encontrado'
      });
    }

    res.json({
      mensagem: 'Registro de sustentabilidade excluído com sucesso'
    });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: 'Erro ao excluir registro de sustentabilidade'
    });
  }
};

export {
  listarSustentabilidade,
  buscarSustentabilidade,
  criarSustentabilidade,
  atualizarSustentabilidade,
  excluirSustentabilidade
};