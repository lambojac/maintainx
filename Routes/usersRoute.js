const express = require('express')
const { createUser } = require('../Controllers/createUser')
//const  verifyEmailAndToken = require('../Controllers/authenticateUser');

const router = express.Router();

router.post('/login', createUser);
//router.post('/',  verifyEmailAndToken);

module.exports = router;