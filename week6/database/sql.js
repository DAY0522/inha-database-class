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

// select query
export const selectSql = {
  getBuilding: async () => {
    const sql = `select * from building`;
    const [result] = await promisePool.query(sql);
    return result;
  },
  getDepartment: async () => {
    const sql = `select * from department`;
    const [result] = await promisePool.query(sql);
    return result;
  },
  getRoom: async () => {
    const sql = `select * from room`;
    const [result] = await promisePool.query(sql);
    return result;
  },
  getStudent: async () => {
    const sql = `select * from Student`;
    const [result] = await promisePool.query(sql);
    return result;
  },
  getClass: async () => {
    const sql = `select * from Class`;
    const [result] = await promisePool.query(sql);
    return result;
  },
};

// insert query
export const insertSql = {
  setStudent: async (data) => {
    const sql = `insert into student values (
            "${data.Id}", "${data.Name}", "${data.Email}", 
            "${data.PhoneNumber}", "${data.Major}"
        )`;
    console.log(data);
    await promisePool.query(sql);
  },
};

// update query
export const updateSql = {
  updateStudent: async (data) => {
    console.log(data);
    const sql = `
            UPDATE Student 
            SET Id = ${data.Id}, Name = "${data.Name}", 
                Email = "${data.Email}", PhoneNumber = "${data.PhoneNumber}",
                Major = "${data.Major}"
            WHERE Id = ${data.Id}`;
    console.log(sql);
    await promisePool.query(sql);
  },
  updateDepartment: async (data) => {
    console.log(data);
    const sql = `
            UPDATE Department 
            SET Id = ${data.Id}, Name = "${data.Name}", 
                Email = "${data.Email}", PhoneNumber = "${data.PhoneNumber}"
            WHERE Id = ${data.Id}`;
    console.log(sql);
    await promisePool.query(sql);
  },
};
