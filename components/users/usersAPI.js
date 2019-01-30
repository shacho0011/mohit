const express = require('express');

const router = express.Router();

const userQuery = require('../../db/userQuery');
const {validateUser} = require('../../util/util');
const {validateUserLogin} = require('../../util/util');

const jwtGenerator = require('../../util/jwtGenerator');
const jwtValidator = require('../../middleware/jwtValidator')

router.post('/register', (req, res) => {
  // TODO: you need to store the data using database!
  if(validateUser(req.body)){
    var users = userQuery.users.createUser(req.body);
    users.then(users => {
      return res.status(200).json({user:users[0],status:'success'});
    });
    
  }else{
    return res.status(400).json({status:'User info is not good!'});
  }


});

router.post('/login', (req, res) => {
  // TODO: you need to store the data using database!
  if(validateUserLogin(req.body)){
    var user = userQuery.users.getUserByEmail(req.body.email);
    user.then(user => {
      if(user[0].password == req.body.password){
        var token = jwtGenerator(user[0]);
       res.setHeader('token', token);
        return res.status(200).json(user[0]);
      }else{
        return res.status(400).json({status:'Password is not good!'});
      }
      
    });
  }else{
    return res.status(400).json({status:'User info is not good!'});
  }


});

router.get('/', jwtValidator, (req, res) => {
  console.log(req.header);
  var users = userQuery.users.getAllUser();
  users.then(users =>{
    res.status(200).json(users);
  });
  // TODO: you need to get the data using database!
  // TODO: you need to send the response using express!
  
});

module.exports.usersAPI = router;
