const jwt = require('jsonwebtoken');
const config = require('../config/jwtConfig');

const checkToken = (req, res, next) => {
    
    var token = req.headers['x-access-token'] || req.headers['authorization'];
    console.log(typeof token);
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
        
    }

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.json({success: false, message: 'Bad token'});
        } else {
            req.decoded = decoded;
            next();
        }
        });
    } else {
        return res.json({success: false, message: 'Please provide your token'});
    }
};

module.exports = checkToken;