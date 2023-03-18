const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();
mongoose.set('strictQuery', false);
app.use(express.urlencoded({extended: true}));

const PORT = process.env.port || 3200;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO)
.then(() => console.log('We connected to MONGO'))
.catch((err) => console.log('MONGO connection err', err));

app.use(routes);

app.listen(PORT, (err) => {
    (err) ? console.log('err', err) : console.log(`Server ${PORT} is running`);
})