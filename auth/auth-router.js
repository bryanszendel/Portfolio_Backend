const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/users', (req, res) => {
  res.status(200).json({message: 'users'})
})

module.exports = router