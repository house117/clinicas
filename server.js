const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//Conexión a base de datos
connectDB();

//Middleware
app.use(express.json({ extended: false }));


//app.get("/", (req, res) => res.send("API Running"));

// Definición de rutas
/*app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));*/
app.use("/api/clinica", require("./routes/api/clinica"));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));