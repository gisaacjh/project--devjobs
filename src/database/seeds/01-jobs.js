const dataRows = [{
  title: 'Database Administrator - MySQL',
  description: 'Key players will take ownership of their bandwhidths by conservatively  right-sizing best-of-breed standpoints.',
  location: 'Ciudad de México',
  salary: 27000,
  fullTime: true,
  companyId: Math.floor(Math.random()*4)+1
}]



exports.seed = function(knex, Promise) {
  return knex('jobs')
    .del()
    .then(() => {
      return knex('jobs')
        .insert(dataRows);
    })
};
