require("dotenv").config();
const mariadb = require("mariadb");

let connection = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});
// connection.then(conn => {
//   conn.query("select * from users").then(res => {
//   console.log(res);
//   conn.end();
//   })
// })

module.exports = connection;