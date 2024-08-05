import { Sequelize } from "sequelize";
import mysql2 from 'mysql2'
import * as fs from 'node:fs';
import path from 'node:path';

// read the database password from a file
const passwordfile = path.resolve('db_password.txt');

const password = fs.readFileSync(passwordfile, { encoding: 'utf8' });

const sequelize = new Sequelize('DB_Portfolio', 'alex', password, {
    host: 'database',
    dialect: 'mysql',
    dialectModule: mysql2
});

export default sequelize;