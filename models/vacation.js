const pool = require('../config/db');

const Vacation = {
  create: async ({ employee_id, start_date, end_date, type, reason, status }) => {
    const result = await pool.query(
      'INSERT INTO Vacation (employee_id, start_date, end_date, type, reason, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [employee_id, start_date, end_date, type, reason, status]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await pool.query('SELECT * FROM Vacation');
    return result.rows;
  },

  findById: async (id) => {
    const result = await pool.query('SELECT * FROM Vacation WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, { employee_id, start_date, end_date, type, reason, status }) => {
    const result = await pool.query(
      'UPDATE Vacation SET employee_id = $1, start_date = $2, end_date = $3, type = $4, reason = $5, status = $6 WHERE id = $7 RETURNING *',
      [employee_id, start_date, end_date, type, reason, status, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query('DELETE FROM Vacation WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Vacation;
