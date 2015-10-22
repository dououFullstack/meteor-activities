Package.describe({
  name: 'douhengshan:activities',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Maodou.io activities package, A meteor package that provides activities pages at /activities',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dououFullstack/meteor-activities',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.2');

  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('aldeed:autoform@5.1.2', ["server", "client"]);
  api.use('aldeed:collection2@2.3.3', ["server", "client"]);
  api.use('aldeed:simple-schema@1.3.2', ["server", "client"]);
  api.use('matb33:collection-hooks@0.8.0', ["server", "client"]);

  api.use('templating');
  // api.use('ecmascript');
  api.addFiles('activities.js');
  api.addFiles('client/routes.js', 'client');
  api.addFiles("client/activities/activitie_edit.html", "client");
  api.addFiles("client/activities/activitie_edit.js", "client");
  api.addFiles("client/activities/activitie_new.html", "client");
  api.addFiles("client/activities/activitie_new.js", "client");
  api.addFiles("client/activities/activitie_show.html", "client");
  api.addFiles("client/activities/activitie_show.js", "client");
  api.addFiles("client/activities/activities.html", "client");
  api.addFiles("client/activities/activities_index.html", "client");
  api.addFiles("client/activities/activities_index.js", "client");

  api.addFiles("lib/collections.js");

  api.addFiles("server/publications.js", "server");

  api.export('Activities');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('douhengshan:activities');
  api.addFiles('activities-tests.js');
});
