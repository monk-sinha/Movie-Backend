const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
const cookieParser = require('cookie-parser');

const authRoutes = require('./Routes/Auth');
const adminRoutes = require('./Routes/Admin')
const movieRoutes = require('./Routes/Movie')

require('dotenv').config();
require('./database')

app.use(bodyParser.json());
app.use(cookieParser())

app.use(express.json());
app.use("/auth", authRoutes)
app.use("/admin", adminRoutes)
app.use("/movie", movieRoutes)

app.get("/",(req, res) => {
    res.send("API works")
})

app.listen(PORT, ()=>{
    console.log("Server works");
});