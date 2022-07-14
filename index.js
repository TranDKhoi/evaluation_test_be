//import package
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//import from file
const userRoutes = require("./routes/user")
const jokeRoutes = require("./routes/joke")

//config app
const PORT = 3000;
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "50mb" }));

app.use((err, req, res, next) => {
    console.log('Check error', err.message);
    let error = Object.create(err);
    res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode || 500,
        message: error.message || 'Server error',
    });
});


//database
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
})
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch((err) => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });

  
  //apply route for app
app.use("/api/user",userRoutes)
app.use("/api/joke",jokeRoutes)
//////////////////////////////


  app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
});