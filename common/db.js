const mongoose  = require('mongoose')

require('dotenv').config()

const URI = process.env.DATABASE_URL

// connecting to database
const connectToMongo = () => {
  try{
    mongoose.connect(URI)
    .then(console.log("Database Connected Successfully"))
  }catch(err){
    console.log(err)
  }
}

mongoose.set("strictQuery", true)

module.exports = connectToMongo