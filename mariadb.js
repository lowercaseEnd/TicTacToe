require("dotenv").config();
const mariadb = require("mariadb");

console.log(process.env);
mariadb.createConnection({
  host: process.env.HOST,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD
}).then(conn => {
  conn.query("select 1", [2]).then(rows => {
    console.log(rows);
    conn.end();
  })
  .catch(err => {
    console.log(err);
  })
})
.catch(err => {
  console.log(err);
})