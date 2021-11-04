
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
        {recipe_name: 'soup'},
        {recipe_name: 'sandwich'},
        {recipe_name: 'salad'}
  ]);
} ;
