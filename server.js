import express from 'express';
import mongoose from 'mongoose';
import {db_user, db_pw} from './secrets/dbConnection.js';
import Product from './models/productModel.js';
import Account from './models/user.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes

app.get('/', (_, res) => {
    res.send('Hello World!');
});

app.get('/account', async (_, res) => {
    const accounts = await Account.find();
    res.send(accounts);
});

app.get('/account/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findById(id);
        res.status(200).json(account);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.post('/account', async (req, res) => {
    try {
        const account = await Account.create(req.body);
        res.status(200).json(account);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.message});
    }
});

app.put('/account/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findByIdAndUpdate(id, req.body)
        if (!account){
            return res.status(404).json({error: 'Account not found'});
        }
        const updatedAccount = await Account.findById(id);
        res.status(200).json(updatedAccount);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.delete('/account/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findByIdAndDelete(id);
        if (!account){
            return res.status(404).json({error: 'Account not found'});
        }
        res.status(200).json(account);
    }
    catch (error) {
        res.status(500).json({error: error.message});
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
