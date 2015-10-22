// ***************************************************************
// ROUTES (Documents)
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
FlowRouter.route('/activities', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "activitiesIndex", footer: "footer"});
  },
  name: "activitiesIndex"
});

// DOCUMENT NEW
// -------------------------------------------------------
FlowRouter.route('/activities/new', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "activitieNew", footer: "footer"});
  },
  name: "activitieNew"
});

// DOCUMENT SHOW
// -------------------------------------------------------
  FlowRouter.route('/activities/:activitieId', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "activitieShow", footer: "footer"});
  },
  name: "activitieShow"
});

// DOCUMENT EDIT
// -------------------------------------------------------
FlowRouter.route('/activities/:activitieId/edit', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "activitieEdit", footer: "footer"});
  },
  name: "activitieEdit"
});
