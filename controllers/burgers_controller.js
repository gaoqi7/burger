const express = require("express");
const path = require("path");
const orm = require("../config/orm.js");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("vew engine", "handlebars");

app.post("/add", (req, res) =>
{
    let newBg = req.body;
    console.log(newBg);
    orm.iOne(newBg.burger_name, newBg.devoured);
});
app.get("/", (req, res) =>
{
    let burgerT = orm.sAll(true);
    let burgerF = orm.sAll(false);
})
app.post("/update", (req, res) =>
{
    let needUpdateBg = req.body;
    orm.uOne(needUpdateBg.burger_name, needUpdateBg.devoured);
});

app.listen(PORT, function ()
{
    console.log("Server listening on: http://localhost:" + PORT);
})