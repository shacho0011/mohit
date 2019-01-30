const jwt = require('jsonwebtoken');
const config = require('../config/jwtConfig');


const tokenGenerator = user => {
    var oPayload = {
        username: user.email,
        role: 'role_user'
    };
    var sSecret = config.secret;
    var token = jwt.sign(oPayload, sSecret, {expiresIn: 600});
    return token;
}

module.exports = tokenGenerator;
