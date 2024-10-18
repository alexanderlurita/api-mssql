const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoutes.js");

app.use(express.json());

app.use("/api/todos", todoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT http://localhost:${PORT}`);
});
