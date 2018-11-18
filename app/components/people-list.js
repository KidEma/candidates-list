import Component from '@ember/component';

export default Component.extend({
    actions: {        
        shareContact(person){
          alert('Not implemented');
        },
        toggleFavourite(person){
          person.set('favourite', !person.favourite);
        },
        toggleHidden(person){
          person.set('hidden', !person.hidden);
        }
      }
});
