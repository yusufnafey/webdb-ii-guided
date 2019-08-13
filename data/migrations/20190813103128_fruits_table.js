exports.up = function(knex) {
  // primary key, called id, integer, autoincrements
  return knex.schema.createTable("fruits", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .unique()
      .notNullable();
    tbl.decimal("avg-weight-oz"); //, (characters, 8 default), (decimal place, 2 default)
  });
};

// how we undo the changes made in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExits("fruits");
};
