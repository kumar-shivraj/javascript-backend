// require("dotenv").config();
// require("dotenv").config({ path: "./.env" });
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import connectDB from "./db";
import connectDB from "./db/index.js";

// dotenv.config();
dotenv.config({ path: "./.env" });
connectDB();

/*
const app = express();
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error(`Error: ${error}`);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {}
})();

*/
