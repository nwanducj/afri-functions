const app = require("./app");
const {
    logger
} = require("./helpers/logger");
const {
    connectDB
} = require("./connection/Database");

const port = process.env.PORT || 4900;

let server;

connectDB()
    .then(() => {
        server = app.listen(port, () => {
            // eslint-disable-next-line no-console
            logger.info(`################################################
        🛡️  Server listening on port: ${port} 🛡️
        ################################################`);
        });
    })
    .catch((err) => {
        console.log("Database connection failed");
    });

process.on("unhandledRejection", (err) => {
    // eslint-disable-next-line no-console
    console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    // eslint-disable-next-line no-console
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});