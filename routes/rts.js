'use strict';

const fs = require('fs');
const request = require('request');

exports.login = async function(req,res){
    try{
        var response  = await loginRts3();
        res.send(200,response).end();

    }catch (error) { 
        console.log('error',error)
        return res.send(400,error).end();
    }
    
}


function loginRts3(){
    const caBundle = fs.readFileSync("./cert/ca.pem", "utf8");
    const certBundle = fs.readFileSync("./cert/certificado.pem", "utf8");
    const keyBundle = fs.readFileSync("./cert/certificado_key.pem", "utf8");

    const ca = caBundle.split('-----END CERTIFICATE-----\r\n') .map(cert => cert +'-----END CERTIFICATE-----\r\n');
    const cert = certBundle.split('-----END CERTIFICATE-----\r\n') .map(cert => cert +'-----END CERTIFICATE-----\r\n');
    const key = keyBundle.split('-----END CERTIFICATE-----\r\n') .map(cert => cert +'-----END CERTIFICATE-----\r\n');

    ca.pop();
    cert.pop();
    key.pop();

    var options = {
        url: process.env.RTS_URL,
        headers: {
            'Authorization': 'Basic '+process.env.RTS_Authorization,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        agentOptions: {
            rejectUnauthorized: false, 
            key:key[0],
            cert: cert[0],
            ca: ca[0],
            passphrase: ''
        }
    };
 
    return new Promise(function (resolve, reject) {  
        request.post(options, (error, res, body) => {
            console.log(body);
            if(!error && res.statusCode == 200){
                resolve(JSON.parse(body));
            }else {
                reject(error);
            }
        });
    });
}
