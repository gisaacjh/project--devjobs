const dataRows = [{
  name: 'EWP Technologies',
  description: 'Our business grows milestones to reliably and effectively facilitate our wholesale user experience.',
  imageLink: 'http://www.tinygraphs.com/labs/isogrids/hexa16/1234',
  location: 'Guadalajara'
}]



exports.seed = function(knex, Promise) {
  return knex('company')
    .del()
    .then(() => {
      return knex('company')
        .insert(dataRows);
    })

};
