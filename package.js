Package.describe({
  name: 'danmendes:amazon-affiliate-links',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Insert your Amazon affiliate program id into Amazon product links on your Meteor app.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.6');
  api.use('ecmascript');
  api.mainModule('affiliates.js');
  api.export('Affiliates', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('danmendes:amazon-affiliate-links');
  api.mainModule('affiliates-tests.js');
});
