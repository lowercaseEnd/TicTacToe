require("dotenv").config();
const mariadb = require("mariadb");

class DB {
  constructor() {
    this.connector = mariadb.createPool({
      host: process.env.HOST,
      user: process.env.USER_MYSQL,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    });
  }
  static async checkDB(userData, db) {
    let conn = await db.getConnection();
    const user = await conn.query(`select * from users where name = '${userData}'`);
    if(user[0] === undefined) {
      const id = await conn.query(`select max(id) from users`);
      await conn.query(`insert into users value (?, ?)`, [id[0]["max(id)"] + 1, userData]);
    }
    conn.end();
    console.log(`Hello, ${userData}`);
  }
  get db() {
    return this.connector;
  }
}

module.exports = DB;