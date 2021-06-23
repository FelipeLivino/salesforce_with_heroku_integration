const {Client } = require('pg');
const connectionString = 'postgres://pacbeedrkyykik:9ee0e9dadeac7ec719dec08658bc2bd39dd66f332bce2ad4b44c7de221876b03@ec2-52-4-111-46.compute-1.amazonaws.com:5432/d7dodtpnprjedd';

const client = new Client({
  connectionString: connectionString,
  ssl: {
      rejectUnauthorized: false
  } 
});
client.connect();

module.exports = client;