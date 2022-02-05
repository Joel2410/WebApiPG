import { Sequelize, DataTypes, Model } from "sequelize";
import config from "../config";

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbServer,
  dialect: config.dbDialect,
  logging: config.dbLogging === 'true' ? (...msg) => console.log(msg) : false
});

const Open = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const Close = async () => {
  try {
    await sequelize.close();
    console.log('Connection has been closed successfully.');
  } catch (error) {
    console.error('Unable to close the database:', error);
  }
}

export {
  sequelize,
  Sequelize,
  DataTypes,
  Model,
  Open,
  Close
};


// import { Pool } from 'pg';
//

// const pool = new Pool({
//   user: config.dbUser,
//   host: config.dbServer,
//   database: config.dbName,
//   password: config.dbPassword,
//   port: config.dbPort,
// });

// export default pool;