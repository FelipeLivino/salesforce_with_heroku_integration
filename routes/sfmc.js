// 'use strict';

// const axios = require('axios');

// exports.login = async function(req,res){
//     const access_token = await loginMarketingCloud();
//     res.status(200).send(access_token);
   
// }

// async function loginMarketingCloud(){
//     const headers = {
//         'Content-Type': 'application/json'
//     }

//     const post_save = {
//         "grant_type": "client_credentials",
//         "client_id": "4i42t3uqva16aptaiugt506p",
//         "client_secret": "ngOKTeFu8ZfAxIqwRThmQC46",
//         "account_id": "7275449"
//     }

//     const endpoint = "https://mcr4f2sdb8yxt9vsf2td9rsb3d14.auth.marketingcloudapis.com/v2/token";
//     const response = await callPost(endpoint, post_save, headers);
//     return response.data; 
// } 

// async function callPost(endpoint, post_save, headers){
//     return await axios.post(endpoint, post_save, { headers: headers });
// }

// async function getMarketingCloudData(contactIdentifier, accessToken){
//     /*GET /data/v1/customobjectdata/key/YOURDEEXTERNALKEY/rowset?$filter=emailAddress%20eq%20'test@example.com' HTTP/1.1
//     Host: YOURTENANT.rest.marketingcloudapis.com
//     Authorization: Bearer YOURAUTHTOKEN
//     Content-Type: application/json
//     User-Agent: PostmanRuntime/7.17.1
//     Cache-Control: no-cache
//     Host: YOURTENANT.rest.marketingcloudapis.com
//     Accept-Encoding: gzip, deflate
//     Connection: keep-alive
//     cache-control: no-cache*/
// }
