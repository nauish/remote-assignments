const mysql = require("mysql2");
const dotenv = require("dotenv");
const bookQuotes = require("./bookQuotes.js");

dotenv.config();

const pool = mysql
  .createPool({
    host: "127.0.0.1", // Localhost
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "assignment",
  })
  .promise();

async function fakeArticleGeneration() {
  for (let index = 0; index < 50; index++) {
    // Fake data insertion
    const query = await pool.query(
      `INSERT INTO article (title, content, author_id) values (?,?,?)`,
      [
        bookQuotes[index].title,
        bookQuotes[index].quote,
        Math.floor(Math.random() * 5) + 1,
      ]
    );
    console.log(query);
  }
}

fakeArticleGeneration();
