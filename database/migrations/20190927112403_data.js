
exports.up = function(knex) {
  return knex.schema
  .createTable('users', users => {
    users.increments();
    users.string('name_first', 255).notNullable()
    users.string('name_last', 255).notNullable()
    users.string('username', 255).notNullable()
    users.string('password', 255).notNullable()
    users.string('title', 255)
    users.text('bio')
    users.string('email', 255)
    users.string('mobile', 255)
    users.string('github_url')
    users.string('twitter_url')
    users.string('linkedin_url')
    tbl.timestamps(false, true)
  })

  .createTable('projects', projects => {
    projects.increments();
    projects.string('title', 255).notNullable()
    projects.text('description').notNullable()
    projects.string('image')
    projects.string('github_repo', 255)
    projects.string('prod_url', 255)
    tbl.timestamps(false, true)
  })

  .createTable('tech', tech => {
    tech.increments();
    tech.string('name', 255).notNullable()
    tech.integer('xp_level').notNullable().defaultTo(1);
    tech.date('start_date').notNullable()
  })

  .createTable('project_tech', tbl => {
    tbl.increments();
    tbl.integer('project_id').unsigned().notNullable().reference('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE')
    tbl.integer('tech_id').unsigned().notNullable().reference('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  dropTableIfExists('project_technologies')
  dropTableIfExists('technologies')
  dropTableIfExists('projects')
  dropTableIfExists('users')
};

// users
// projects
// technologies
// project_technologies