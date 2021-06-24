const {Client } = require('pg');
const connectionString = process.env.DATABASE_URL;
const client = new Client({
  connectionString: connectionString,
  ssl: {
      rejectUnauthorized: false
  } 
});
client.connect();

module.exports = client;