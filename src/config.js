import { config } from 'dotenv';
config();

export default {
    port: process.env.PORT || 3000,
    dbServer: process.env.DB_SERVER || 'localhost',
    dbPort: process.env.DB_PORT || 5432,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbName: process.env.DB_NAME || '',
    dbDialect: process.env.DB_DIALECT || '',
    dbLogging: process.env.DB_LOGGING || 'false'
};

/*
PORT = 3000

DB_DIALECT = postgres
DB_SERVER = localhost
DB_PORT = 5432
DB_USER = postgres
DB_PASSWORD = 1234
DB_NAME = store
DB_LOGGING = false
*/