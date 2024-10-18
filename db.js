const sql = require("mssql");

const config = {
  user: "sa",
  password: "123456",
  server: "localhost",
  database: "testdb",
  options: {
    encrypt: false,
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getConnection };
