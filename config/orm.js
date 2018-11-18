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
        connection.query(`INSERT INTO burgers(burger_name,devoured) VALUES (${bn},true) `, (err, result) =>
        {
            if (err) console.log(err);
            cb(result);
            console.log("New Burger Added");
        })
    },
    update: function updateOne(bn, cb)
    {
        connection.query(`UPDATE burgers SET false WHERE burger_name = ${bn}`, (err, result) =>
        {
            if (err) console.log(err);
            cb(result);
            console.log("update successfully");
        })
    }
};
module.exports = orm;
