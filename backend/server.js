import app from "./src/app.js"
import connectDb from "./src/lib/db.js"
import { ENV } from "./src/lib/env.js"

const PORT = ENV.PORT || 5001
connectDb()

app.listen(ENV.PORT, () => {
    console.log(`Server is running on Port : ${ENV.PORT}`);
})