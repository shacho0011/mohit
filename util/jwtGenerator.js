const jwt = require('jsonwebtoken');
const config = require('../config/jwtConfig');


tokenGenerator = user => {
    console.log(user);
    var oPayload = {
        username: user.email,
        role: 'role_user'
    };
    var sSecret = config.secret;
    var token = jwt.sign(oPayload, sSecret, {expiresIn: 90000});
    return token;
}

module.exports = tokenGenerator;
