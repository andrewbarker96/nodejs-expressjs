import express from 'express';
import mongoose from 'mongoose';
import {db_user, db_pw} from './secrets/dbConnection.js';
import Product from './models/productModel.js';

const app = express();

app.use(express.json());

//routes

app.get('/', (_, res) => {
    res.send('Hello NODE API');
});

app.get('/product', async (req, res) => {
    const products = await Product.find();
    res.send(products);
  });
  
app.post('/product', async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
});

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://${db_user}:${db_pw}@cluster0.5646wb0.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(3000, () => {
            console.log('Server Successfully Started on Port 3000');
        });
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });
