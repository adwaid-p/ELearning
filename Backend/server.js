const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config()
const aiRoutes = require('./routes/ai.routes')

app.use(cors())
app.use(express.json())

app.use('/ai', aiRoutes);

app.listen(3000, () => console.log("Server started"));