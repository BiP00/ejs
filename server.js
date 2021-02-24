const { response } = require("express");
const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/static"));
app.use("/images", express.static(__dirname + "/images"));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.set("view engine", "ejs");

app.get("/users", function (request, response){
  const users_array = [
    {name: "Michael", email: "michael@codingdojo.com"},
    {name: "Jay", email: "jay@codingdojo.com"},
    {name: "Brendan", email: "brendan@codingdojo.com"},
    {name: "Andrew", email: "andrew@codingdojo.com"},
  ];
  response.render("users", {users: users_array});
})

app.get("/cars", function (request, response){
  response.render("cars");
})

app.get("/cats", function (request, response){
  response.render("cats");
})

app.get("/cars/new", function (request, response){
  response.render("new");
})

app.get("/", function (request, response){
  response.render("index.html");
})