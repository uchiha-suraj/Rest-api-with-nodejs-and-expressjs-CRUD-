import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));