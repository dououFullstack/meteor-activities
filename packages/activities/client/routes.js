// ***************************************************************
// ROUTES (Activities)
// ***************************************************************

Router.map(function() {

  // Activities INDEX
  // -------------------------------------------------------
  this.route('activitiesIndex', {
    template: 'activitiesIndex',
    path: '/activities',
    waitOn: function () {
      return Meteor.subscribe('activities');
    },
    data: {
      activities: function () {
        return Activities.find({}, {sort: {createdAt: -1}});
      }
    }
  });

  // Activitie NEW
  // -------------------------------------------------------
  this.route('activitieNew', {
    template: 'activitieNew',
    path: '/activities/new'
  });

  // Activitie SHOW
  // -------------------------------------------------------
  this.route('activitieShow', {
    template: 'activitieShow',
    path: '/activities/:_id',
    waitOn: function () {
      return Meteor.subscribe('activitie', this.params._id);
    },
    data: function () {
      return Activities.findOne(this.params._id);
    }
  });

  // Activitie EDIT
  // -------------------------------------------------------
  this.route('activitieEdit', {
    template: 'activitieEdit',
    path: '/activities/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('activitie', this.params._id);
    },
    data: function () {
      return Activities.findOne(this.params._id);
    }
  });

});
