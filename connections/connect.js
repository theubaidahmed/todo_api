const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.error(err);
    });
