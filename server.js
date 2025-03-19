import { app } from "./middleware/app.js";
import { config } from "dotenv";
import { connectDB } from "./config/db.js"
config()

connectDB()
app.listen(process.env.PORT, () => console.log("*" + process.env.PORT))
