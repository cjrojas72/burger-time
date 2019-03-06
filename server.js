const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// turn on all routes
app.use(routes);

app.listen(PORT, () => console.log(`Now on localhost:${PORT}`));
