const db = require('../config/db');

const Job = {
  create: async (employeeData) => {
    const {
      first_name,
      last_name,
      dob,
      email,
      phone,
      job_id,
      department_id,
      salary,
      hire_date,
      num_secu_social,
      situa_famil
    } = employeeData;
  
    const result = await db.query(
      'INSERT INTO employee (first_name, last_name, dob, email, phone, job_id, department_id, salary, hire_date, num_secu_social, situa_famil) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [
        first_name,
        last_name,
        dob,
        email,
        phone,
        job_id,
        department_id,
        salary,
        hire_date,
        num_secu_social,
        situa_famil
      ]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await db.query(`
      SELECT j.*, d.name as department_name, e.first_name as employee_first_name, e.last_name as employee_last_name
      FROM job j
      LEFT JOIN department d ON j.department_id = d.id
      LEFT JOIN employee e ON j.employee_id = e.id
    `);
    return result.rows;
  },

  findById: async (id) => {
    const result = await db.query(`
      SELECT j.*, d.name as department_name, e.first_name as employee_first_name, e.last_name as employee_last_name
      FROM job j
      JOIN department d ON j.department_id = d.id
      JOIN employee e ON j.employee_id = e.id
      WHERE j.id = $1
    `, [id]);
    return result.rows[0];
  },

  update: async (id, jobData) => {
    const { title, description, department_id,employee_id } = jobData;
    const result = await db.query(
      'UPDATE job SET title = $1, description = $2, department_id = $3,employee_id=$4 WHERE id = $5 RETURNING *',
      [title, description, department_id,employee_id, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM job WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Job;
