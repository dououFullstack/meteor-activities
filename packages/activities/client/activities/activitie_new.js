Template.activitieNew.rendered = function() {
};

Template.activitieNew.helpers({
});

Template.activitieNew.events ({
});

AutoForm.hooks({
  'activitieForm': {
    before: {
      insert: function(doc) {
        doc.createdAt = new Date();
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      console.log('New Activitie inserted successfully!');
      Router.go('activitiesIndex', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
