import "dotenv/config";
import Sequelize from "sequelize";

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const db = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
    }
  }
);

export default db;
