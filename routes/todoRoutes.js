const express = require("express");
const { getConnection } = require("../db.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().execute("spGetTodos");
  res.status(200).json(result.recordset);
});
router.post("/", async (req, res) => {
  const { title, completed } = req.body;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("title", title)
    .input("completed", completed)
    .execute("spCreateTodo");

  res.status(201).json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .input("title", title)
    .input("completed", completed)
    .execute("spUpdateTodo");

  res.status(200).json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = pool.request().input("id", id).execute("spDeleteTodo");

  res.status(200).json(result);
});

module.exports = router;
