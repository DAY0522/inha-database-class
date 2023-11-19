import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "WEEK11_INHA_DB",
    password: "kk116211__",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

// async / await 사용
const promisePool = pool.promise();

// selec query
export const selectSql = {
  getUsers: async () => {
    const [rows] = await promisePool.query(`select * from student`);
    return rows;
  },
  //TODO
  getInhaClass: async (data) => {
    const [rows] = await promisePool.query(`SELECT 
      c.ID AS ID, 
      c.Name AS Course, 
      c.Professor, 
      d.Dname AS Opening_departments, 
      Number_of_participant,
      c.Number_of_participant - COALESCE(cs.Participant_Count, 0) AS Remaining_participants
  FROM 
      Class c 
  JOIN 
      Department d ON c.Did = d.ID
  LEFT JOIN 
      (SELECT 
           Class_Id, 
           COUNT(*) AS Participant_Count 
       FROM 
           class_student 
       GROUP BY 
           Class_Id) cs ON c.ID = cs.Class_Id
  WHERE 
      c.ID NOT IN (SELECT 
                       Class_Id 
                   FROM 
                       class_student 
                   WHERE 
                       Student_Id = ${data.StudentId})`);
    return rows;
  },
};

export const createSql = {
  addClass: async (data) => {
    const uid = await promisePool.query(
      `select Id from Student where StudentId=${data.sId}`
    );
    console.log(uid);
    const results = await promisePool.query(
      `insert into class_student values (${uid[0][0].Id}, ${data.cId});`
    );
    return results[0];
  },
};
