const orm = require("../config/orm.js");

const burger = {
    showAll: function (cb)
    {
        orm.all(function (res) { cb(res); })
    },
    new: function (bn, cb)
    {
        orm.add(bn, function (res) { cb(res); })
    },
    eat: function (bid, cb)
    {
        orm.update(bid, function (res) { cb(res); })
    }
};

module.exports = burger;

