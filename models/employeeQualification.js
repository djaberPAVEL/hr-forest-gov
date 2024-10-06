const db = require('../config/db');

const EmployeeQualification = {
  create: async (employeeQualificationData) => {
    const { employee_id, qualification_id, date_obtained } = employeeQualificationData;
    const result = await db.query(
      'INSERT INTO employee_qualification (employee_id, qualification_id, date_obtained) VALUES ($1, $2, $3) RETURNING *',
      [employee_id, qualification_id, date_obtained]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await db.query('SELECT * FROM employee_qualification');
    return result.rows;
  },

  findById: async (id) => {
    const result = await db.query('SELECT * FROM employee_qualification WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, employeeQualificationData) => {
    const { employee_id, qualification_id, date_obtained } = employeeQualificationData;
    const result = await db.query(
      'UPDATE employee_qualification SET employee_id = $1, qualification_id = $2, date_obtained = $3 WHERE id = $4 RETURNING *',
      [employee_id, qualification_id, date_obtained, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM employee_qualification WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = EmployeeQualification;
