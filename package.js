Package.describe({
  name    : 'gregorynicholas:usersnap-widget-sdk',
  version : '0.0.1',
  summary : 'usersnap client widget javascript sdk integration with meteor apps.',
  git     : 'https://github.com/gregorynicholas/meteor-usersnap',
  documentation : 'README.md',
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.addFiles(['lib/client/usersnap-widget-sdk.js'], ['client']);

  api.export([
    'Usersnap',
  ]);
});
