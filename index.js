const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres_db', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const createTable = async () => {
    await sequelize.query(`
        CREATE TABLE IF NOT EXISTS test1 (id integer, content varchar);
    `);
}

const createIndex = async () => {
    await sequelize.query(`
        CREATE INDEX test1_id_index ON test1 (id);
    `);
}

const run = async () => {
    await connect();
    await createTable();
    await createIndex();
}

run();