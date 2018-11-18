const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PORT = 3000 || process.env.PORT;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("vew engine", "handlebars");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function ()
{
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});