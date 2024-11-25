require('dotenv').config();
const app = require('./app');
const pool = require('./db');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await pool.query('CREATE TABLE IF NOT EXISTS favourites (id INT AUTO_INCREMENT PRIMARY KEY, joke_id VARCHAR(255) UNIQUE, joke_text TEXT, image_url TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
    console.log('Database connected and table ensured');
    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
