import mongoose from 'mongoose';

const CreateAccount = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, 
{
    timestamps: true
});

const Account = mongoose.model('User', CreateAccount);

export default Account;