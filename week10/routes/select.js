import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get("/", async (req, res) => {
  if (req.session.user == undefined) {
    res.redirect("/");
  } else if (
    req.session.user.role === "student" ||
    req.session.user.role === "super"
  ) {
    const data = {
      StudentId: req.session.user.id,
    };
    const inhaClass = await selectSql.getInhaClass(data);
    res.render("select", {
      title: "Student Class",
      inhaClass,
    });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
