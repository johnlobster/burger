express = require("express");

// Set Handlebars.
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;

const routes = require("./app/controllers/burgers_controller")
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("app/public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// attach the routes
app.use(routes);

// as all data is under app, have to set that path in express
app.set('views', './app/views');
// set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});