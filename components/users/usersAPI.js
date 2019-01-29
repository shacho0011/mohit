const express = require('express');

const router = express.Router();

const userQuery = require('../../db/userQuery');

var validateUser = function(user){
  var hasName = typeof user.name == 'string' && user.name.trim() != '';
  var hasEmail = typeof user.email == 'string' && user.email.trim() != '';
  var hasPassword = typeof user.password == 'string' && user.password.trim() != '';

  return hasName && hasEmail && hasPassword;
};

router.post('/register/user', (req, res) => {
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

router.get('/', (req, res) => {
  var users = userQuery.users.getAllUser();
  users.then(users =>{
    res.status(200).json({users:users,status:'success'});
  });
  // TODO: you need to get the data using database!
  // TODO: you need to send the response using express!
  
});

module.exports.usersAPI = router;
