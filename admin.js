const admin = require('firebase-admin');

require('dotenv').config();


//credential grant sccess to Firebase services
admin.initializeApp({
    credential: admin.credential.cert({
        type: process.env.type,
        project_id: process.env.project_id,
        private_key_id: process.env.private_key_id,
        private_key:
            process.env.private_key.replace(/\\n/g,'\n'),
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: process.env.auth_uri,
        token_uri: process.env.token_uri,
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
        client_x509_cert_url: process.env.client_x509_cert_url,
    }),
});

const fs = require('fs');

let config = require('./firebase.json')

let data = Buffer.from(JSON.stringify(config)).toString('base64')

fs.writeFile("googlecred.txt", data, (err) => {

if (err) console.log(err);

else { console.log("File written successfully\n"); }});



//After, you'll need to convert that base64 back into the credentials....

const googleServiceAccountCreds = JSON.parse(Buffer.from(process.env.GOOGLE_CONFIG, 'base64').toString('ascii'))

if (!googleServiceAccountCreds) throw new Error('The $GOOGLE_SERVICE_ACCOUNT_CREDS environment variable was not found!');

module.exports = admin;
