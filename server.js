const express= require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require("./routes/loginroute")
const authenticate = require('./auth')
require('dotenv').config()
const path = require('path')

app = express()

app.use(express.json())
app.use(cors())
app.use("/", routes)


app.use("/login", authenticate)

const PORT= process.env.PORT || 5000

const uri = process.env.MONGODB_URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

connection= mongoose.connection
connection.once('open',()=>console.log("connected to mongodb"))

app.listen(PORT, ()=> console.log(`listening at port ${PORT}`))


app.get("/",(req,res)=>{
    res.send("hello")
})


//production
if(process.env.NODE_ENV==="production")
{
app.use(express.static('frontend/build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
  }

//mongoose.disconnect();
