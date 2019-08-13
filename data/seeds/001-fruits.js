exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("fruits")
    .truncate() // empties the table and resets the id
    .then(function() {
      // Inserts seed entries
      return knex("fruits").insert([
        { name: "mango" },
        { name: "pineapple" },
        { name: "tomato" }
      ]);
    });
};
