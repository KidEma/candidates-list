import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterBySkill(param) {
          if (param !== '') {
            return this.store
            .query('candidate', { skills: param }).then((results) => {
              return { query: param, results: results };
            });
          } else {
            return this.store
            .findAll('candidate').then((results) => {
              return { query: param, results: results };
            });
          }
        }
      }
});
