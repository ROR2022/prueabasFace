import { useEffect, useState } from "react";
import axios from 'axios';
import { useLogin, LoginButton } from "react-facebook";
//import UserConeccted from "./UserConeccted";

const LoginFace = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { login, isLoading, status, error } = useLogin();
  const [resToken, setResToken] = useState({
    token:'',
    userID: ''
  });

  useEffect(() => {
    if(resToken.token) {
      //console.log(resToken);
      recuperaDataUser();
    }
  
    return 
  }, [resToken])
  
  const recuperaDataUser = async ()=>{
    try {
      const dataUser = await axios.get(`https://graph.facebook.com/${resToken.userID}?fields=id,name,email,picture&access_token=${resToken.token}`);
      console.log('dataUser:..',dataUser);
    } catch (error) {
      console.log(error);
    }
  }
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

   async function handleLogin() {
    try {
      const response = await login({
        scope: "email, public_profile",
        return_scopes: true,
      });
      setIsConnected(response.status);
      console.log("response:..", response);
      const myToken= response.authResponse?.accessToken;
      const myUser= response.authResponse?.userID;
      setResToken({
              token: myToken,
              userID: myUser
      });

      /*window.FB.api("/me", function (response2) {
        console.log("Good to see you, " + response2.name + ".");
        console.log("Response2:..", response2);
      });*/

      //console.log('profile:..',profile);
    } catch (error) {
      console.log(error.message);
    }
  } 

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
      setIsConnected(false);
      console.log(response);
      // user is now logged out
    });
  }

  /*function checkLoginState() {
    
      window.FB.getLoginStatus(function (response) {
        console.log("Estado de la Conexion:..", response);

        if (response.status==='connected'){
          handleLogout();
          checkLoginState();
        } 

        if (response.status==='unknown'){

          window.FB.login(function(response) {
            if (response.status === 'connected') {
              setIsConnected(true);
              console.log('Logged success:..',response);
              const myToken= response.authResponse?.accessToken;
              const myUser= response.authResponse?.userID;
              setResToken({
                token: myToken,
                userID: myUser
              });

              //fetch(`https://graph.facebook.com/USER-ID?fields=id,name,email,picture&access_token=${myToken}`)
              //.then(response=>console.log('dataUser:..',response))

              
              /* window.FB.api("/me", function (response) {
                console.log("Good to see you, " + response.name + ".");
                console.log('Response:..',response);
              }); */

              // Logged into your webpage and Facebook.
           /* } else {
              console.log('Logged not success:..',response);
              // The person is not logged into your webpage or we are unable to tell. 
            }
          }, {scope: 'public_profile,email'});

        }
        //statusChangeCallback(response);
      });
  
  }*/

  return (
    <div>
      LoginFace
       <button onClick={handleLogin} disabled={isLoading}>
        Login via Facebook
      </button>
      {/*{isConnected && <UserConeccted />}*/}
      <hr />
      {/* <button onClick={checkLoginState}> Login via Facebook</button> */}

      <hr />
      {isConnected && 
      <button onClick={handleLogout}>LogOut Facebook</button> }

      {/* <fb:login-button
        scope="public_profile,email"
        onlogin="checkLoginState();"
      ></fb:login-button> */}
    </div>
  );
};

export default LoginFace;
