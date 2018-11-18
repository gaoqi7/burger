const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


router.post("/api/burger", (req, res) =>
{
    burger.new(req.body.burger_name, function (result) { res.json({ id: result.insertId }) })
});
router.get("/", (req, res) =>
{
    burger.showAll(function (data) { res.render("index", { burger: data }) })
})
router.put("/api/:id", (req, res) =>
{
    burger.eat(req.params.id, function (result)
    {
        if (result.changedRows == 0)
        {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else
        {
            res.status(200).end();
        }
    });
});

module.exports = router;