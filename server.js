require('dotenv').config({ path: './.env' });

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5555;
const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1', require('./routes'));

app.listen(port, () => {
    console.log('Server listened, port: ' + port);
});

