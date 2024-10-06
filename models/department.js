const db = require('../config/db');

const Department = {
  create: async (departmentData) => {
    const { name, description } = departmentData;
    const result = await db.query(
      'INSERT INTO department (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await db.query('SELECT * FROM department');
    return result.rows;
  },

  findById: async (id) => {
    const result = await db.query('SELECT * FROM department WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, departmentData) => {
    const { name, description } = departmentData;
    const result = await db.query(
      'UPDATE department SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM department WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Department;
