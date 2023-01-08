require("dotenv").config();
const app = require("./src/app");
const config = require("./src/v1/config/index");
const mongoose = require("./src/v1/databases/init.mongodb");

const PORT = config.app.port;
const MONGO_URI = config.db.uri;
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected mongoose success!...");
    const server = app.listen(PORT, () => {
      console.log(`Server start with port ${PORT}`);
    });

    // process.on("SIGINT", () => {
    //   server.close(() => console.log(`Exits server express`));
    //   process.exit(0);
    // });
  } catch (error) {
    console.log("Cannot connect to database! ", error);
    process.exit();
  }
}

startServer();
