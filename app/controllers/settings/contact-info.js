import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    updateContactInfo() {
      this.set('isLoading', true);
      let currentUser = this.get('model');
      currentUser.save()
        .then(() => {
          this.set('isLoading', false);
          this.get('notify').success('Your Contact Info has been updated');
        })
        .catch(() => {
          this.set('isLoading', false);
          this.get('notify').error('An unexpected error occurred');
        });
    }
  }
});