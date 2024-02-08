const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.send('New User Form')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router
    .route('/:id') 
    .get(() => { 
        res.send('Get User with ID')
    })
    .put(() => { 
        res.send('Update User with ID')
    })
    .delete(() => { 
        res.send('Delete User with ID')
    })

router.param

module.exports = router;