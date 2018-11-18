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
    eat: function (bn, cb)
    {
        orm.update(bn, function (res) { cb(res); })
    }
};

module.exports = burger;

