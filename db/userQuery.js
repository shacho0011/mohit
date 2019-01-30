
const knex = require('../config/knex');

module.exports = {
    users:{
        getAllUser: function(){
            return knex('users');
        },
        getUserByEmail: function(email){
            return knex('users').where('email', email);
        },
        createUser: function(user){
            return knex('users').insert(user, '*');
        }
    }
};