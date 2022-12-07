// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")


// application Object
const app = express()

// middleware

app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}))
app.use("/static", express.static("public"))


// routes and routers

app.get("/", (req, res)=> {
    res.send("server is working")
})

// server listener
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log (`server is listening on port ${PORT}`)
})

