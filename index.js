require("dotenv").config();
require("./connections/connect");
const port = process.env.PORT;
const app = require("./app");

app.listen(port, () => {
    console.log("server started");
});
