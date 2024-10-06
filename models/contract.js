const db = require('../config/db');

const Contract = {
  create: async (contractData) => {
    const { employee_id, start_date, end_date, terms } = contractData;
    const result = await db.query(
      'INSERT INTO contract (employee_id, start_date, end_date, terms) VALUES ($1, $2, $3, $4) RETURNING *',
      [employee_id, start_date, end_date, terms]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await db.query('SELECT * FROM contract');
    return result.rows;
  },

  findById: async (id) => {
    const result = await db.query('SELECT * FROM contract WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, contractData) => {
    const { employee_id, start_date, end_date, terms } = contractData;
    const result = await db.query(
      'UPDATE contract SET employee_id = $1, start_date = $2, end_date = $3, terms = $4 WHERE id = $5 RETURNING *',
      [employee_id, start_date, end_date, terms, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM contract WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Contract;
