const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(3000, () => {
    console.log("Started express server at port 3000");
});