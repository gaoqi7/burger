var connection = require("./connection.js");

connection.connect(err =>
{
    if (err) throw err;
    console.log("Mysql server connected, the id is " + connection.threadId + "\n");
});

function selectAll(isD)
{
    connection.query(`SELECT * FROM burgers WHERE devoured = ${isD}`, (err, data) =>
    {
        if (err) console.log(err);
        return data;
    })
};

function insertOne(bn, isD)
{
    connection.query(`INSERT INTO burgers(burger_name,devoured) VALUES (${bn},${isD}) `, err =>
    {
        if (err) console.log(err);
        console.log("New Burger Added");
    })
};

function updateOne(bn, isD)
{
    connection.query(`UPDATE burgers SET ${isD} WHERE burger_name = ${bn}`, err =>
    {
        if (err) console.log(err);
        console.log("update successfully");
    })
}

module.exports = { sAll: selectAll, iOne: insertOne, uOne: updateOne };
