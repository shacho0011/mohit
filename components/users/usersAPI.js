const express = require('express');

const router = express.Router();

const userQuery = require('../../db/userQuery');
const {validateUser} = require('../../util/util');
const {validateUserLogin} = require('../../util/util');

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
      console.log("User Info...", user[0]);
      if(user[0].password == req.body.password){
        console.log("Yaahhhhh! Loged In...");
        return res.status(200).json(user[0]);
      }else{
        return res.status(400).json({status:'Password is not good!'});
      }
      
    });
  }else{
    return res.status(400).json({status:'User info is not good!'});
  }


});

router.get('/', (req, res) => {
  var users = userQuery.users.getAllUser();
  users.then(users =>{
    res.status(200).json(users);
  });
  // TODO: you need to get the data using database!
  // TODO: you need to send the response using express!
  
});

module.exports.usersAPI = router;
