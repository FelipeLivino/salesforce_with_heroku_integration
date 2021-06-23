const client = require('../db/db');

exports.getAll = async function() {
    return new Promise(function (resolve, reject) {  
        const query = 'SELECT * FROM salesforce.account';
        client.query(query, (err, result) => {
            if (err) { 
                reject(err);
            } else {
                resolve(result.rows);
            }
            // client.end()
        });  
    });
}

exports.get = async function(id) {
    return new Promise(function (resolve, reject) {  
        const query = `SELECT * FROM salesforce.account WHERE id = ${id}`;
        console.log('## query ',query);
        client.query(query, (err, result) => {
            if (err) { 
                reject(err);
            } else {
                resolve(result.rows);
            }
            // client.end()
        });  
    });
}

exports.update = async function( account, id ) {
    return new Promise(function (resolve, reject) {  
        const query = 'UPDATE salesforce.account SET name=$1 WHERE Id = $2';
        const values = [account.Name,id];

        console.log('## query ',query);
        client.query(query, values, (err, result) => {
            if (err) { 
                reject(err);
            } else {
                resolve(result);
            }
            // client.end()
        });  
    });
}