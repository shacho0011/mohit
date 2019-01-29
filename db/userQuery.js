
const knex = require('../config/knex');

module.exports = {
    users:{
        getAllUser: function(){
            return knex('users');
        },
        createUser: function(user){
            return knex('users').insert(user, '*');
        }
    }
};