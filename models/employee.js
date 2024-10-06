const db = require('../config/db');

const Employee = {
  create: async (employeeData) => {
    const { first_name,last_name, situa_famil,department_id, job_id, hire_date, salary,num_secu_social   } = employeeData;
    const result = await db.query(
      'INSERT INTO employee (first_name,last_name,situa_famil, department_id, position, hire_date, salary,num_secu_social  ) VALUES ($1, $2, $3, $4, $5,$6,$7,$8,) RETURNING *',
      [first_name,last_name,situa_famil, department_id, job_id, hire_date, salary,num_secu_social  ]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await db.query(`
      SELECT e.*, d.name as department_name , j.title as job_title
      FROM employee e
      LEFT JOIN department d ON e.department_id = d.id
      LEFT JOIN job j ON e.job_id = j.id
      
    `);
    return result.rows;
  },

  findById: async (id) => {
    const result = await db.query(`
      SELECT e.*, d.name as department_name , j.title as job_title
      FROM employee e
      JOIN department d ON e.department_id = d.id
      LEFT JOIN job j ON e.job_id = j.id
      WHERE e.id = $1
    `, [id]);
    return result.rows[0];
  },


  update: async (id, employeeData) => {
    const { first_name,last_name,situa_famil, department_id, job_id, hire_date, salary,num_secu_social   } = employeeData;
    const result = await db.query(
      'UPDATE employee SET first_name = $1,last_name=$2, situa_famil=$3, department_id = $4 , job_id = $5, hire_date = $6, salary = $7, num_secu_social =$8 WHERE id = $9 RETURNING *',
      [first_name,last_name,situa_famil, department_id, job_id, hire_date, salary,num_secu_social  , id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM employee WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Employee;
