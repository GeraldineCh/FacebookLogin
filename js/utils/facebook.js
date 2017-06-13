window.fbAsyncInit = () => {
  FB.init({
    appId      : '384697715260773', //Tu APP ID
    cookie     : true,  // habilita las cookies para que el server puede acceder a la sesion
    xfbml      : true,  // parsea los plugins sociales en la pagina
    version    : 'v2.8' // usa version 2.8
  });
};

function loginHandler(response) {
    if (response.status === 'connected') {
        state.status = "Conectado";
        FB.api('/me?fields=email,name', user => {
            state.user = user;
            state.doRender();
        });
    } else if (response.status === 'not authorized') {
        state.user = null;
        state.status = 'Aplicación no autorizada';
        state.doRender();
    }
}

function doLogin() {
    FB.login(loginHandler, {scope: 'email'});
}