const db = require('../config/db');

const Qualification = {
  create: async (qualificationData) => {
    const { name, description } = qualificationData;
    const result = await db.query(
      'INSERT INTO qualification (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return result.rows[0];
  },

  findAll: async () => {
    const result = await db.query('SELECT * FROM qualification');
    return result.rows;
  },

  findById: async (id) => {
    const result = await db.query('SELECT * FROM qualification WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, qualificationData) => {
    const { name, description } = qualificationData;
    const result = await db.query(
      'UPDATE qualification SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await db.query('DELETE FROM qualification WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = Qualification;
