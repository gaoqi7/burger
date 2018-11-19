var connection = require("./connection.js");

var orm = {
    all: function selectAll(cb)
    {
        connection.query(`SELECT * FROM burgers`, (err, data) =>
        {
            if (err) console.log(err);
            cb(data);
        })
    },
    add: function insertOne(bn, cb)
    {
        connection.query(`INSERT INTO burgers(burger_name,devoured) VALUES (?,?);`, [bn, false], (err, result) =>
        {
            if (err) console.log(err);
            cb(result);
        })
    },
    update: function updateOne(bid, cb)
    {
        connection.query("UPDATE burgers SET devoured =? WHERE id= ?", [true, bid], (err, result) =>
        {
            if (err) console.log(err);
            cb(result);
            console.log("update successfully");
        })
    }
};
module.exports = orm;
