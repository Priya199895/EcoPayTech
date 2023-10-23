const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")

app.get("/api",(req,res)=>{
    res.send("hello world")
})

// middlewares
app.use(express.json());
app.use(cors());

//routes
const connection = require("./DB")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/products")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const educativeContentRoute = require("./routes/educativeContentRoute") 
const walletRoute = require("./routes/wallet")

// DB connection 
connection()

//routes
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)
app.use("/api/carts",cartRoute)
app.use("/api/orders",orderRoute)
app.use("/api/checkout",stripeRoute)
app.use("/api/educativecontent",educativeContentRoute)
app.use("/api/wallets", walletRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`you are listening on PORT ${PORT}`)
})

/*var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('C:\Users\brtiw\OneDrive\Desktop\new collab\CarbonSense-main\sustainable select\Sustainable-Select-frontend\build', { index: ['index.html']})


// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3000)*/