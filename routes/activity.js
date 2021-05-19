'use strict';

const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
const util = require('util');
const axios = require('axios');

exports.logExecuteData = [];

function logData(req) {
    exports.logExecuteData.push({
        body: req.body,
        headers: req.headers,
        trailers: req.trailers,
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        route: req.route,
        cookies: req.cookies,
        ip: req.ip,
        path: req.path,
        host: req.host,
        fresh: req.fresh,
        stale: req.stale,
        protocol: req.protocol,
        secure: req.secure,
        originalUrl: req.originalUrl
    });
    
    console.log("body: " + util.inspect(req.body));
    console.log("headers: " + util.inspect(req.headers));
    console.log("trailers: " + req.trailers);
    console.log("method: " + req.method);
    console.log("url: " + req.url);
    console.log("params: " + util.inspect(req.params));
    console.log("query: " + util.inspect(req.query));
    console.log("route: " + req.route);
    console.log("cookies: " + req.cookies);
    console.log("ip: " + req.ip);
    console.log("path: " + req.path);
    console.log("host: " + req.host);
    console.log("fresh: " + req.fresh);
    console.log("stale: " + req.stale);
    console.log("protocol: " + req.protocol);
    console.log("secure: " + req.secure);
    console.log("originalUrl: " + req.originalUrl);
}

exports.edit = function (req, res) {
    console.log('edit request');
    // logData(req);
    res.send(200, 'Edit');
};

exports.save = function (req, res) {
    console.log('save request');
    // logData(req);
    res.send(200, 'Save');
};

exports.execute = function (req, res) {
    console.log('execute');
    console.log('req.body',req.body);
    JWT(req.body, process.env.jwtSecret, (err, decoded) => {
        if (err) {
            console.error(err);
            return res.status(401).end();
        }

        console.log('buffer hex', req.body.toString('hex'));

        if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {
            var decodedArgs = decoded.inArguments[0];
            console.log('inArguments', JSON.stringify(decoded.inArguments));
            console.log('decodedArgs', JSON.stringify(decodedArgs));

            const mid = decodedArgs['mid'];
            const dataExtensionName = decodedArgs['dataExtensionName'];
            const buField = decodedArgs['buField'];
            const isRecall = decodedArgs['isRecall'];
            const subject = decodedArgs['subject'];
            const body = decodedArgs['body'];
            const htmlText = decodedArgs['htmlText'];
            const contactIdentifier = decodedArgs['contactIdentifier'];
            const parameters = decodedArgs['parameters'];

            console.log('mid', mid); 
            console.log('dataExtensionName', dataExtensionName);
            console.log('buField', buField);
            console.log('isRecall', isRecall);
            console.log('subject', subject);
            console.log('body', body);
            console.log('htmlText', htmlText);
            console.log('contactIdentifier', contactIdentifier);
            console.log('parameters', parameters);


            // res.send(201, 'Execute');
            return res.send(200,{"success":false});
        } else {
            console.error('inArguments invalid.');
            return res.send(401,{"success":false});
        }
    });
};

exports.publish = function (req, res) {
    console.log('publish request');
    // logData(req);
    res.send(200, 'Publish');
};

exports.validate = function (req, res) {
    console.log('validate request');
    // logData(req);
    res.send(200, 'Validate');
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}