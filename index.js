import express from 'express';
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;


// routes
app.get('/', (req, res) => {
  res.console.log("this is home page");;
});
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});