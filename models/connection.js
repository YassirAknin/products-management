require("dotenv").config() // get .env vars

const mongoose = require("mongoose")  // import mongoose

// establish are connection
mongoose.connect(process.env.DATABASE_URI)

// Connection Events
mongoose.connection
.on("open", () => {console.log("connect to mongo")})
.on("close", () => {console.log("Disconnected from mongo")})
.on("error", (error) => {console.log(error)})

// export the mongoose object
module.exports = mongoose