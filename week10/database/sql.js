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

export const selectSql = {
  getStudent: async () => {
    const sql = `select * from Student`;
    const [result] = await promisePool.query(sql);
    return result;
  },
  getInhaClass: async (data) => {
    const sql = `select * from Class c join student_has_class shc on c.id = shc.Class_id where shc.Student_id=${data.StudentId}`;
    const [result] = await promisePool.query(sql);
    return result;
  },
};

export const deleteSql = {
  deleteInhaClass: async (data) => {
    console.log("delete Class id =", data);
    const sql = `delete from student_has_class where Class_id=${data.ClassId} and Student_id=${data.StudentId}`;
    console.log(sql);
    await promisePool.query(sql);
  },
};
