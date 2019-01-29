var options = {
  development: {
      client: 'pg',
      connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : '123456',
        database : 'practice'
      },
      migrations: {
          directory: __dirname + '/config/migrations',
        },
      seeds: {
          directory: __dirname + '/config/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/config/migrations',
        },
      seeds: {
          directory: __dirname + '/config/seeds/production',
        },
    },
};

var environment = process.env.DATABASE_URL || 'development';
var config = options[environment];
module.exports = config;