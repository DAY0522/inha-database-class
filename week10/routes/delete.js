import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get("/", async (req, res) => {
  if (req.session.user != undefined && req.session.user.role === "student") {
    const data = {
      StudentId: req.session.user.id,
    };
    const inhaClass = await selectSql.getInhaClass(data);
    res.render("delete", {
      title: "Delete",
      inhaClass,
    });
  } else {
    res.redirect("/");
  }
});

router.post("/", async (req, res) => {
  console.log("delete :", req.body.delBtn);
  const data = {
    StudentId: req.session.user.id,
    ClassId: req.body.delBtn,
  };

  await deleteSql.deleteInhaClass(data);

  res.redirect("/delete/class");
});

module.exports = router;
