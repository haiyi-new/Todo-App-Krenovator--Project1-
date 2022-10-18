import {Sequelize} from "sequelize";

const db = new Sequelize('<db_name>', '<user>', '<password>', {
    host: "<host>",
    port: "<port>",
    dialect: "mysql"
});

export default db;