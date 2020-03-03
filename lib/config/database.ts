import { Sequelize } from "sequelize";

export const database = new Sequelize("seqlizer", 'root', '', {
    host: "localhost",
    dialect: "mysql",
    // logging: function () {},
    // pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 10000
    // },
    // dialectOptions: {
    //     socketPath: "/var/run/mysqld/mysqld.sock"
    // },
    // define: {
    //     paranoid: true
    // }
});