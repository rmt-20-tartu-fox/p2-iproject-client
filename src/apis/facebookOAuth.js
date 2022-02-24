
export const initFbsdk = () => {
  return new Promise((resolve) => {
      window.fbAsyncInit = function() {
           FB.init({
              appId : '976814339607748',
              cookie : true,
              xfbml : true,
              version : 'v8.0'
          });
      };
        FB.getLoginStatus(({ authResponse }) => {
            if (authResponse) {
                apiAuthenticate(authResponse.accessToken).then(resolve);
            } else {
                resolve();
            }
        });

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk')); 
  })
}