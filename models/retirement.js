const pool = require('../config/db');

const Retirement = {
  create: async ({ employee_id, retirement_date, reason }) => {
    const result = await pool.query(
      'INSERT INTO Retirement (employee_id, retirement_date, reason) VALUES ($1, $2, $3) RETURNING *',
      [employee_id, retirement_date, reason]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await pool.query('SELECT * FROM Retirement');
    return result.rows;
  },

  findById: async (id) => {
    const result = await pool.query('SELECT * FROM Retirement WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, { employee_id, retirement_date, reason }) => {
    const result = await pool.query(
      'UPDATE Retirement SET employee_id = $1, retirement_date = $2, reason = $3 WHERE id = $4 RETURNING *',
      [employee_id, retirement_date, reason, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query('DELETE FROM Retirement WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Retirement;
