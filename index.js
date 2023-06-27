const express = require('express')
require('dotenv').config()
const connectToMongo = require('./common/db')
connectToMongo()

const app = express()
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// const cors = require('cors')
const cors=require("cors");

// using cors origin
app.use(cors({
	origin: true
})) 

// user route
app.use("/user", require('./user/route'))

// item route
app.use("/items",require('./items/route'))

// port 3022
const port = process.env.PORT

// listening server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
