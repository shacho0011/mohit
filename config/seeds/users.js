const tableName = 'users';

// TODO: you need to add some data.
exports.seed = knex => knex(tableName).del().then(() => knex(tableName).insert([
  {
    name: 'Shadhin',
    email: 'shadhin@gmail.com',
    password: '123456',
    phone: '123',
    address: 'Dhaka'
  },
  {
    name: 'Arif',
    email: 'arif@gmail.com',
    password: '123456',
    phone: '234',
    address: 'Sylhet'
  },
  {
    name: 'Bayezid',
    email: 'bayezid@gmail.com',
    password: '123456',
    phone: '345',
    address: 'Rangpur'
  },
  {
    name: 'Zian',
    email: 'zian@gmail.com',
    password: '123456',
    phone: '456',
    address: 'Chattagram'
  }
]));
