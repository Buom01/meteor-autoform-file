Package.describe({
  name: "ostrio:autoform-files",
  summary: "File upload for AutoForm using ostrio:files",
  description: "File upload for AutoForm using ostrio:files",
  version: "1.0.2",
  git: "https://github.com/VeliovGroup/meteor-autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');

  api.use([
    'check',
    'underscore',
    'reactive-var',
    'templating',
    'aldeed:autoform@5.8.0',
    'ostrio:files@1.6.9'
  ]);

  api.addFiles([
    'lib/client/autoform.js',
    'lib/client/fileUpload.html',
    'lib/client/fileUpload.js',
    'lib/client/afFileDemo.html',
    'lib/client/afFileDemo.js'
  ], 'client');
});
