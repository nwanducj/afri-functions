const {
    errors
} = require("celebrate");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");
const myServer = require("./routes/server")
const dotenv = require("dotenv");
const cors = require("cors");
const apicache = require('apicache');
let cache = apicache.middleware;

// user routes import
const eventRoutes = require("./routes/events");

dotenv.config({
    path: "config.env"
});

app.use(cache('5 minutes'));
app.use(cors());

process.on("uncaughtException", (err) => {
    // eslint-disable-next-line no-console
    console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
    // eslint-disable-next-line no-console
    console.log(err.name, err.message);
    process.exit(1);
});

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

//Allow all requests from all domains & localhost
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
    next();
});

// Routes
app.use("", myServer);

// user routes
app.use("/api/events", eventRoutes);


// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"), {
    flags: "a"
}
);

//celebrate errors
app.use(errors());

app.use(helmet());
app.use(compression());

// setup the logger
app.use(morgan("combined", {
    stream: accessLogStream
}));

module.exports = app;