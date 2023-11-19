import express from "express";
import { selectSql } from "../database/sql";
// TODO
// sql import

const router = express.Router();

router.get("/", async function (req, res) {
  // TODO

  if (req.cookies.user) {
    const data = {
      StudentId: req.cookies.user,
    };
    const allClass = await selectSql.getInhaClass(data);
    console.log(allClass);
    res.render("select", {
      allClass,
      user: req.cookies.user, // 사용자 정보도 같이 전달
    });
  } else {
    res.render("/");
  }
});

router.post("/", async (req, res) => {
  // TODO
  const data = {
    cId: req.body.applyBtn,
    sId: req.cookies.user,
  };
});

module.exports = router;
