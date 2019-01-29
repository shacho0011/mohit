const TABLENAME = 'users';

exports.up = knex => knex.schema.createTable(TABLENAME, (table) => {
  table.increments();
  table.string('name').notNullable();
  table.string('email').notNullable();
  table.string('password').notNullable();
  table.string('phone');
  table.string('address');
  // TODO: you need to add created_at column
  // which should be set the time when the column inserted automatically.
});

exports.down = knex => knex.schema.dropTable(TABLENAME);
