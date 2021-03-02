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

const gatitos = [
  {
    id: 1,
    nombre: "Tom",
    imagen: "maine.jpg",
    comidafav: "atun",
    edad: 3,
    cama: ["ropero", "sofa"]
  },
  {
    id: 2,
    nombre: "Tom",
    imagen: "persian.jpg",
    comidafav: "atun",
    edad: 3,
    cama: ["ropero", "sofa"]
  },
  {
    id: 3,
    nombre: "Tom",
    imagen: "serengeti.jpg",
    comidafav: "atun",
    edad: 3,
    cama: ["ropero", "sofa"]
  }
]

app.get("/cars", function (request, response){
  response.render("cars");
})

app.get("/cats", function (request, response){
  response.render("cats", {gatitos});
})

app.get("/cars/new", function (request, response){
  response.render("new");
})

app.get("/", function (request, response){
  response.render("index.html");
})