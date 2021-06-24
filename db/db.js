const {Client } = require('pg');
const connectionString = 'postgres://jrvuxlyddeykth:bbb883e84cda13dcaeb964883ac329d34f0196f015aee09119aea60d3f5fb75d@ec2-52-23-45-36.compute-1.amazonaws.com:5432/da8jheg3r55do7';
const client = new Client({
  connectionString: connectionString,
  ssl: {
      rejectUnauthorized: false
  } 
});
client.connect();

module.exports = client;