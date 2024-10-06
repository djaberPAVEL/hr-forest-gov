const db = require('../config/db');

const Transfer = {
  create: async (transferData) => {
    const { employee_id, from_department_id, to_department_id, transfer_date, reason } = transferData;
    const result = await db.query(
      'INSERT INTO transfer (employee_id, from_department_id, to_department_id, transfer_date, reason) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [employee_id, from_department_id, to_department_id, transfer_date, reason]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await db.query('SELECT * FROM transfer');
    return result.rows;
  },

  findById: async (id) => {
    const result = await db.query('SELECT * FROM transfer WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, transferData) => {
    const { employee_id, from_department_id, to_department_id, transfer_date, reason } = transferData;
    const result = await db.query(
      'UPDATE transfer SET employee_id = $1, from_department_id = $2, to_department_id = $3, transfer_date = $4, reason = $5 WHERE id = $6 RETURNING *',
      [employee_id, from_department_id, to_department_id, transfer_date, reason, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM transfer WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Transfer;
