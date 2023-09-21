import { createPool } from "mysql2";
import { config } from "dotenv";

config({ path: "./.env" });

const pool = createPool({
  host: "127.0.0.1", // Localhost
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "assignment",
}).promise();

const selectUserByEmail = async (email) => {
  const [query] = await pool.query(`SELECT * FROM user WHERE email = ?`, [
    email,
  ]);
  return query;
};

const insertUser = async (email, password) => {
  await pool.query(`INSERT INTO user (email, password) VALUES (?, ?)`, [
    email,
    password,
  ]);
};

export { selectUserByEmail, insertUser };
