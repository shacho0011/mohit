const express = require('express');

const router = express.Router();

const userQuery = require('../../db/userQuery');

router.post('/', (req, res) => {
  // TODO: you need to store the data using database!
  const SOMETHING = 'DATABASE ACCESS IS NECESSARY HERE';

  return res.status(201).send(SOMETHING);
});

router.get('/users', (req, res) => {
  var users = userQuery.users.getAllUser();
  users.then(users =>{
    res.status(200).json({users:users,status:'success'});
  });
  // TODO: you need to get the data using database!
  // TODO: you need to send the response using express!
  
});

module.exports.usersAPI = router;
