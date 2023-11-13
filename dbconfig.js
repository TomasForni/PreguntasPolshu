import 'dotenv/config';

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: "A-PHZ2-LUM-06",
    database: "PreguntasPolshu",
    options : {
        trustServerCertificate : true,
        trustedConnection : true
    }
}

export default config;