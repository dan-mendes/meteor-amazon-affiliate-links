Package.describe({
  name: 'danmendes:amazon-affiliate-links',
  version: '1.0.3',
  // Brief, one-line summary of the package.
  summary: 'Insert your Amazon affiliate program id into Amazon product links on your Meteor app.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dan-mendes/meteor-amazon-affiliate-links',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.mainModule('affiliates.js');
  api.export('Affiliates', 'client');
});
