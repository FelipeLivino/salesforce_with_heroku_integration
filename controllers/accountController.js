const { Pool, Client } = require('pg');
const connectionString = process.env.DATABASE_URL;

exports.getAll = async function() {

    const pool = new Pool({
        user: 'pacbeedrkyykik',
        host: 'ec2-52-4-111-46.compute-1.amazonaws.com',
        database: 'd7dodtpnprjedd',
        password: '9ee0e9dadeac7ec719dec08658bc2bd39dd66f332bce2ad4b44c7de221876b03',
        port: 5432,
        ssl: true
    })
    
    // const pool = new Pool({
    //     connectionString: process.env.DATABASE_URL,
    //     ssl: true
    // })

    const query = 'SELECT * FROM salesforce.account';
    pool .query(query, (err, result) => {
        if (err) { 
            console.error(err);
        } else {
            var contacts = {};
            result.rows.forEach(function(row){
                contacts[row.Name] = row;
            });
            console.log('contacts :', contacts);
        }
        pool .end()
    })  
    // pg.connect(process.env.DATABASE_URL+'?ssl=true', function(err, client, done) {
    //     if (err) {
    //         console.error(err);
    //         process.exit(1);
    //     }
    //     client.query('SELECT * FROM salesforce.account', function(err, result) {
    //         if (err) { 
    //             console.error(err);
    //         } else {
    //             var contacts = {};
    //             result.rows.forEach(function(row){
    //                 contacts[row.Name] = row;
    //             });
    //             console.log('contacts :', contacts);
    //         }
    //     });
    // });
}