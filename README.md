gregorynicholas:usersnap-widget-sdk
-----------------------------------

usersnap client widget javascript sdk integration with meteor apps.

current as of 2016-02


- usersnap: https://usersnap.com/docs/widget
- atmosphere: https://atmospherejs.com/gregorynicholas/usersnap-widget-sdk
- github: https://github.com/gregorynicholas/meteor-usersnap-widget-sdk


# INSTALLATION

    meteor add gregorynicholas:usersnap-widget-sdk


# IMPLEMENTATION

you likely need help with your javascript skills if you need this package.
but who could ever lay blame to you, it's elegant in it's simplicity,
and fuck bloat, this package provides a zero-footprint `<script>` insertion,
with future-proof foward-thinking in it's design.

here's the gist for how to use it in your (likely shit) meteor app:

`app/client/startup.js`

```js

// issue with usersnap's "rendering-engine", aka server-side scraping,
// as a result, doesn't work with localhost..
// see: https://usersnap.com/yuno?error=localdevelopment
if (Meteor.settings.public.env_id == 'local') {
  return console.warn('usersnap not supported on local development..');

} else if (Meteor.settings.public.env_id == 'prod') {
  // don't run on production environ..

} else {
  Meteor.startup(function(){
    Usersnap.loadWidget(Meteor.settings.public.usersnap.token, function(){
      console.info('usersnap loaded..');
    });
  });
}
```
