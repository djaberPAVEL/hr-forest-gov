const db = require('../config/db');

const Attendance = {
  create: async (attendanceData) => {
    const { employee_id, date, status } = attendanceData;
    const result = await db.query(
      'INSERT INTO attendance (employee_id, date, status) VALUES ($1, $2, $3) RETURNING *',
      [employee_id, date, status]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await db.query('SELECT * FROM attendance');
    return result.rows;
  },

  findById: async (id) => {
    const result = await db.query('SELECT * FROM attendance WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, attendanceData) => {
    const { employee_id, date, status } = attendanceData;
    const result = await db.query(
      'UPDATE attendance SET employee_id = $1, date = $2, status = $3 WHERE id = $4 RETURNING *',
      [employee_id, date, status, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM attendance WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Attendance;
