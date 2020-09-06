const express = require("express");
const app = express();
const PORT = 8080; // default port 8080
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");






app.listen(PORT, () => {
  console.log(`TinyApp is listening on ${PORT}`);
});