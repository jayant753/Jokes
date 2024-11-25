const pool = require('../db');

class Favourite {
  static async create({ joke_id, joke_text, image_url }) {
    const sql = 'INSERT INTO favourites (joke_id, joke_text, image_url) VALUES (?, ?, ?)';
    const [result] = await pool.execute(sql, [joke_id, joke_text, image_url]);
    return result;
  }

  static async findAll() {
    const sql = 'SELECT * FROM favourites';
    const [rows] = await pool.execute(sql);
    return rows;
  }
}

module.exports = Favourite;
