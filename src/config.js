import { config } from 'dotenv';
config();

export default {
    port: process.env.PORT || 3000,
    dbServer: process.env.DB_SERVER || 'localhost',
    dbPort: process.env.DB_PORT || 5432,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbName: process.env.DB_NAME || '',
};