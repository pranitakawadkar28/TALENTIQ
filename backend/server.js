import app from "./src/app.js"
import { ENV } from "./src/lib/env.js"

const PORT = ENV.PORT || 5001

app.listen(ENV.PORT, () => {
    console.log(`Server is running on Port : ${ENV.PORT}`);
})