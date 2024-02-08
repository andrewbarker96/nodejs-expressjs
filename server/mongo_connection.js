import {db_pw} from './secrets'
const mongoose = require('mongoose');

const uri = `mongodb+srv://andrewbarker96:${db_pw}@cluster0.5646wb0.mongodb.net/?retryWrites=true&w=majority&ssl=true`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});