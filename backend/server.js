const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

const moviesRoutes = require("./routes/movies");

app.use("/api/movies", moviesRoutes)

app.listen(process.env.API_PORT, () => {
  console.log(`Limelight listening on port ${process.env.API_PORT}`);
});
