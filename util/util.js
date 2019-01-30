validateUser = user =>{

    var hasName = typeof user.name == 'string' && user.name.trim() != '';
    var hasEmail = typeof user.email == 'string' && user.email.trim() != '';
    var hasPassword = typeof user.password == 'string' && user.password.trim() != '';
  
    return hasName && hasEmail && hasPassword;
}

validateUserLogin = user =>{

    var hasEmail = typeof user.email == 'string' && user.email.trim() != '';
    var hasPassword = typeof user.password == 'string' && user.password.trim() != '';
  
    return hasEmail && hasPassword;
}


module.exports.validateUser = validateUser;
module.exports.validateUserLogin = validateUserLogin;