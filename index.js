import express from "express";
// import bodyParser from "body-parser"; // ❌ No longer needed!

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

// ✅ Modern way: Use Express's built-in JSON body parser
app.use(express.json());
// If you also need to parse URL-encoded data (e.g., from HTML forms):
// app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
// app.all("*", (req, res) =>
//   res.send("You've tried reaching a route that doesn't exist.")
// );

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
