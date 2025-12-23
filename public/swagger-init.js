// public/swagger-init.js
(function () {
  // debug logs can be left or removed later
  console.log('[swagger-init] loaded');

  function attachInterceptor(){
    if (!window.ui) {
      return setTimeout(attachInterceptor, 200);
    }
    try {
      window.ui.getConfigs().requestInterceptor = function (req) {
        try {
          const token = localStorage.getItem('token');
          if (token) {
            req.headers['Authorization'] = 'Bearer ' + token;
          }
        } catch (e) {
          // ignore
        }
        return req;
      };
      console.log('[swagger-init] requestInterceptor attached');
    } catch (e) {
      console.error('[swagger-init] error', e);
    }
  }
  attachInterceptor();
})();
