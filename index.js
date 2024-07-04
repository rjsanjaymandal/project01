import express from 'express';
import { createRequire } from 'module'; 
const require = createRequire(import.meta.url);
try {
  const users = require('./MOCK_DATA.json');
} catch (error) {
  console.error("Error importing MOCK_DATA.json:", error);
}

const app = express();
const PORT = 3000;


// routes
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});