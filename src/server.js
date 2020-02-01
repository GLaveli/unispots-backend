const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://NetUser:System_rw@kitnet-x03i0.mongodb.net/kitnet?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);