const admin = require('firebase-admin');

require('dotenv').config();

//firebase service account pk
const type = "service_account";
const project_id = "badbank-48ba6";
const private_key_id = "01f4ec60764991edc88863855986dffdfa4685a8";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCMyYkDQLxbqDPl\nZMkatsJATLV5L6x+A2i01hTelZ1khmcstSZBuU2gxYucaTTxgcVfI2RFxXrljR22\nLxxHzg4GAl+G7gR2kyqivSLcRY11ycBw3rhzGdrat+z+1fYgNCcmdPsGY/0Y+EFn\n6JZ/bKiKDzhfNGvsUoAcVGPIecVq0BKFi5jjy2zGYlbfU7z1eGQHe7FKIySaH0Nr\n3yiKQyijJ53me1rZuVjhJL72xdUmaoIqdJyQKyMVkF8yTceWSAqxES6ePcBI1Mlf\nl23ZqrPwCXVnVh6gAmAssd7j9/Nk47VrLL16nOd/glg/HWMqC08M6NhtjERIl5/e\nMhe/D6BVAgMBAAECggEARibmLsjDEqjtsxBVZQpMIN4YTxqCSQhJ1FIYdBD5LG4M\nWyqotXcwRzwoJPgHeY/AWXe5L0sHwfpfI7i1ztHOCxCDqShQ8QTD6fN0u22s31R4\nn8VbA3+Ong2n+hODYOib2X3Q145bP2X0sWIkG7p5ANI0tLvaSxeQ3ozua6bByEbI\nv/Y7Q6vnW+QnSDr0TkdAbLOMPh3BM5tbb0hpavxyTKkxCmRYCbUlUX/WKd/IG5c4\nIL+XvOLIP0ib8obu/EnQlBX5DSC4bp8foyr2oQa36wjwALGGVPVrfrysQOPUg7a5\n59A0r6k59TnNXCj6xNuE1k23w9yRJZ/QAnlcYac8wQKBgQC/UQHT0RIADv/BRuh3\n5JGPGrKRUWUb89y5FUmv+71pfLVAAbJiqttzID8cTllcr4vdmoKAu+aEHbsMjNP8\nIBJ+e4RGIYbURP+Xd2H0Q5la+NAUsY/Z5rb+cSNf7WOJbUU/F2XV0KGCJ78r1CkS\nZ5vKdUkwtA6CKHQWrzLpADztiwKBgQC8YxSICYMHDtgWEA97rjlfvliLk5GDDqTC\nMi3sjTjhUiGb089Y52T96L4w0WRtdn+qBMjmzOkkqK5aFbY9U2V8a+9kYuzQDK3S\n8IeNz8kn6MsKFrgKOSO+JBmiur/lNF0h7NieKe+HuPCvEVk7M+Y5EeWIuzaZ2ILx\nZZw6cwklnwKBgFScRuqetA9CkumvqnAbriRT8lVCYi0SlLNmLsid1Q8qEB7WoUXx\nukwYHtEt9WeAW6MOCllUwIX9gBP01GvU41j812sMuMx4F3GtYqzcmJ4bHCuKu8vq\ntVOiRbrPCg5lPRLCDk+ZjVQ6r9l6Yw+4srW/WTco6qG1smG16hYR/OAxAoGBAIrh\n1JIRyRob9GwXfQKmR7/w+SA1M3JWClrsWXTqDAP447QYq+UT+h1CR2yAAjS8xpNW\nIbIdYMfY32ikVwzQ/aGDhSIR2BntLvyyvIxsohSdB4qxgw5uX45e2NNiL/RO7VYE\nYRIBQohhbHb0KD+AHHr4Waq6sh8rQiWqzkk844JrAoGADF+Rx2yLp3s/OaA4v0/M\nDe2x80NmRTwGLhD9x1aKNWXoqvVjLlOrdl4zCzPKRY9AqKBP0iANHv0hFE69McDJ\nHb2yP4I6D6E3QvSY6ppD0Qqg4qfcdbZ6ROEp1EIRBcCEyOXmOjWjw+cqQvT7i27f\n0ExgxHe0/orWRR/b/gMHxbc=\n-----END PRIVATE KEY-----\n";
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