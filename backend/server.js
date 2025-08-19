const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const recipe = require("./routes/recipe.route.js");
const user = require("./routes/user.route.js");
const ai = require("./routes/ai.route.js");
const connectDB = require("./config/db.config");
const path = require("path");

const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));
app.use("/images", express.static(path.join(__dirname, "public/images"))); //

app.use("/recipe", recipe);
app.use("/user", user);
app.use("/ai-chef", ai);

app.listen(PORT, (err) => {
  console.log(`Server is running on port ${PORT}`);
});
