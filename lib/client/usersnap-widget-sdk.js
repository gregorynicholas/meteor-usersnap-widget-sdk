Usersnap = {
  base_url: '//api.usersnap.com/load/',
};

/**
 * _widgetUrl
 *
 * how thoughtful that gregory is, simply override this method when the day
 * of horrible reckoning comes to be, and usersnap changes the urls for the
 * widget scripts.
 */
Usersnap._widgetUrl = function(projectId) {
  return this.base_url + projectId + '.js';
};

Usersnap.loadWidget = function(projectId, callback) {
  var url = this._widgetUrl(projectId);

  var tag = document.createElement("script");
  tag.type = "text/javascript";
  tag.src = url;
  tag.async = true;

  tag.onload = function() {
    if (callback != null) return callback(null, tag);
  };

  tag.onerror = function(e) {
    console.error('[USERSNAP] widget-script load error:', {
      'url': url,
      'exception': e
    });

    if (callback != null) return callback(e);
  };

  document.body.appendChild(tag);
  return tag;
};
