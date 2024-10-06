const pool = require('../config/db');

const TemporaryArrest = {
  create: async ({ employee_id, arrest_date, reason, duration, status }) => {
    const result = await pool.query(
      'INSERT INTO TemporaryArrest (employee_id, arrest_date, reason, duration, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [employee_id, arrest_date, reason, duration, status]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await pool.query('SELECT * FROM TemporaryArrest');
    return result.rows;
  },

  findById: async (id) => {
    const result = await pool.query('SELECT * FROM TemporaryArrest WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, { employee_id, arrest_date, reason, duration, status }) => {
    const result = await pool.query(
      'UPDATE TemporaryArrest SET employee_id = $1, arrest_date = $2, reason = $3, duration = $4, status = $5 WHERE id = $6 RETURNING *',
      [employee_id, arrest_date, reason, duration, status, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query('DELETE FROM TemporaryArrest WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = TemporaryArrest;
