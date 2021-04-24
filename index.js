const express = require("express");
const app = express();
const router = require("./Routes/userRoutes");

app.use("/user", router);

app.get("/", (req, res) => {
    res.send("Olá");
});

const server = app.listen(8000,() => {
    console.log(`Server is running at ${server.address().port}`);
})