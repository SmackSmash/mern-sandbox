const express = require('express');

const app = express();
require('./db/connect')();

app.use(express.json());

app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Listening on port ${PORT}`));
