const express = require("express");
const app = express();
require('dotenv').config()
const aiRoutes = require('./routes/ai.routes')

app.use(express.json())

app.use('/ai', aiRoutes);

app.listen(3000, () => console.log("Server started"));