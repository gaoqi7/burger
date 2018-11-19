const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


router.post("/api/burger", (req, res) =>
{
    burger.new(req.body.burger_name, function (a)
    {
        console.log("this is the request body" + req.body.burger_name)
        console.log("what is the result of post " + a)

        res.json({ id: a.insertId })
    })
});
router.get("/", (req, res) =>
{
    burger.showAll(function (data) { res.render("index", { burger: data }) })
})
router.post("/api/:id", (req, res) =>
{
    burger.eat(req.params.id, function (result)
    {
        console.log("reqest params id  " + req.params.id)
        if (result.changedRows == 0)
        {
            return res.status(404).end();
        } else
        {
            res.status(200).end();
        }
    });
});

module.exports = router;