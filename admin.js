const admin = require('firebase-admin');

require('dotenv').config();

//firebase service account pk
const type = "service_account";
const project_id = "badbank-48ba6";
const private_key_id = "01f4ec60764991edc88863855986dffdf";
const private_key = "-----BEGIN PRIVATE KEY-----\\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-6rpj3@badbank-48ba6.iam.gserviceaccount.com";
const client_id = "111752319003667724373";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6rpj3%40badbank-48ba6.iam.gserviceaccount.com";

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

module.exports = admin;
