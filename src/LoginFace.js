import { useState } from "react";
//import { useLogin, LoginButton } from "react-facebook";
//import UserConeccted from "./UserConeccted";

const LoginFace = () => {
  //const [isConnected, setIsConnected] = useState(false);
  //const { login, isLoading, status, error } = useLogin();

  /* function handleSuccess(response) {
    console.log(response.status);
    console.log("Resp button:..", response);
    window.FB.api("/me", function (response2) {
      console.log("Good to see you, " + response2.name + ".");
      console.log("Response2:..", response2);
    });
  }

  function handleError(error) {
    console.log(error);
  } */

  /* async function handleLogin() {
    try {
      const response = await login({
        scope: "email, public_profile",
        return_scopes: true,
      });
      setIsConnected(response.status);
      console.log("response:..", response);
      window.FB.api("/me", function (response2) {
        console.log("Good to see you, " + response2.name + ".");
        console.log("Response2:..", response2);
      });
      //console.log('profile:..',profile);
    } catch (error) {
      console.log(error.message);
    }
  } */

  /* const handleMyLogin = () => { 
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          window.FB.api("/me", function (response) {
            console.log("Good to see you, " + response.name + ".");
            console.log('Response:..',response);
          });

        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      {
        scope: "email, name",
        return_scopes: true,
      }
    );
  }; */

  function handleLogout() {
    window.FB.logout((response) => {
      //setIsConnected(false);
      console.log(response);
      // user is now logged out
    });
  }

  function checkLoginState() {
    

      window.FB.getLoginStatus(function (response) {
        console.log("Estado de la Conexion:..", response);
        if (response.status==='unknown'){

          window.FB.login(function(response) {
            if (response.status === 'connected') {
              console.log('Logged success:..',response);
              const myToken= response.authResponse?.accessToken;
              const dataUser = fetch(`https://graph.facebook.com/USER-ID?fields=id,name,email,picture&access_token=${myToken}`);

              console.log('dataUser:..',dataUser);
              /* window.FB.api("/me", function (response) {
                console.log("Good to see you, " + response.name + ".");
                console.log('Response:..',response);
              }); */

              // Logged into your webpage and Facebook.
            } else {
              console.log('Logged not success:..',response);
              // The person is not logged into your webpage or we are unable to tell. 
            }
          }, {scope: 'public_profile,email'});

        }
        //statusChangeCallback(response);
      });
  
    
    
  }

  return (
    <div>
      LoginFace
      {/* <button onClick={handleLogin} disabled={isLoading}>
        Login via Facebook
      </button>
      {isConnected && <UserConeccted />}*/}
      <button onClick={checkLoginState}> Login via Facebook</button>

      <button onClick={handleLogout}>LogOut Facebook</button> 

      {/* <fb:login-button
        scope="public_profile,email"
        onlogin="checkLoginState();"
      ></fb:login-button> */}
    </div>
  );
};

export default LoginFace;
