const express = require('express');
const router = express.Router();

const {
    listUsers,
    getUser,
    createUser,
    editUser,
    removeUser
} = require('../controllers/usersController');

router.get('/users', listUsers);

router.get('/users/:id', getUser);

router.post('/users', createUser);

router.put('/users/:id', editUser);

router.delete('/users/:id', removeUser);

module.exports = router;