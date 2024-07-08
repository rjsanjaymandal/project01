const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:false}));

// routes
app.get("/", (req, res) => {
  res.console.log("this is home page");
});
// rest api
app.get("/api/users", (req, res) => {
  res.json(users);
});
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

app
.route("/users/:id")
.get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
})
.patch((req, res) => {
  // too edit the user with id
  return res.json({ status: "pending" });
})
.delete((req, res) => {
  // too delete the user
  return res.json({ status: "pending" });
});

app.post("/users", (req, res) => {
  const body = req.body;
  users.push({...body,id:users.length+1});
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.json({ status: "success",id:users.length  });
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
