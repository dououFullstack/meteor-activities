Template.activitiesIndex.rendered = function() {
};

Template.activitiesIndex.helpers({
  sayHello: function () {
    return "Hallo!";
  }
});

Template.activitiesIndex.events ({
  'click .delete-activitie': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Activities.remove(item._id);
      console.log("Deleted!")
    }
  }
});
