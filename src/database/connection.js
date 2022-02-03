import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
  user: config.dbUser,
  host: config.dbServer,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
});

export default pool;