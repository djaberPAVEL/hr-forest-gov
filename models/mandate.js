const pool = require('../config/db');

const Mandate = {
  create: async ({ employee_id, start_date, end_date, task_description, location, status }) => {
    const result = await pool.query(
      'INSERT INTO Mandate (employee_id, start_date, end_date, task_description, location, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [employee_id, start_date, end_date, task_description, location, status]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await pool.query('SELECT * FROM Mandate');
    return result.rows;
  },

  findById: async (id) => {
    const result = await pool.query('SELECT * FROM Mandate WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, { employee_id, start_date, end_date, task_description, location, status }) => {
    const result = await pool.query(
      'UPDATE Mandate SET employee_id = $1, start_date = $2, end_date = $3, task_description = $4, location = $5, status = $6 WHERE id = $7 RETURNING *',
      [employee_id, start_date, end_date, task_description, location, status, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query('DELETE FROM Mandate WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Mandate;
