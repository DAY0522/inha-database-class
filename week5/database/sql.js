import mysql from "mysql2";

require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "kk116211__",
  database: "INHA",
});

const promisePool = pool.promise();

export const ApplyQuery = {
  applyquery: async (Query) => {
    const sql = Query; // Store the SQL query provided as a parameter
    const [result] = await promisePool.query(sql);
    // Execute the SOL query and await the result
    return result; // Return the query result
  },
};
