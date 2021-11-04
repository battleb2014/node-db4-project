
exports.up = function(knex) {
  return knex.schema
    .createTable ('recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name').notNullable().unique()
        table.timestamps(true, true)
    })
    .createTable ('steps', table => {
        table.increments('step_id')
        table.integer('step_number').notNullable()
        table.string('instructions').notNullable()
        table.integer('recipe_id')
            .notNullable()
            .unsigned()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable ('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name').notNullable().unique()
    })
    .createTable ('step_ingredients', table => {
        table.increments('step_ingredient_id')
        table.integer('ingredient_id')
            .notNullable()
            .unsigned()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.string('ingredient_name')
            .notNullable()
            .unsigned()
            .references('ingredient_name')
            .inTable('ingre')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.decimal('quantity').notNullable()
        table.integer('step_id')
            .notNullable()
            .unsigned()
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('step_ingredient_id')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
