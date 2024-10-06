const db = require('../config/db');

const Leave = {
  create: async (leaveData) => {
    const { employee_id, start_date, end_date, reason } = leaveData;
    const result = await db.query(
      'INSERT INTO leave (employee_id, start_date, end_date, reason) VALUES ($1, $2, $3, $4) RETURNING *',
      [employee_id, start_date, end_date, reason]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await db.query('SELECT * FROM leave');
    return result.rows;
  },

  findById: async (id) => {
    const result = await db.query('SELECT * FROM leave WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, leaveData) => {
    const { employee_id, start_date, end_date, reason } = leaveData;
    const result = await db.query(
      'UPDATE leave SET employee_id = $1, start_date = $2, end_date = $3, reason = $4 WHERE id = $5 RETURNING *',
      [employee_id, start_date, end_date, reason, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM leave WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Leave;
