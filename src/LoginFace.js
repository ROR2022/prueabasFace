import { useState } from "react";
//import { useLogin } from "react-facebook";
//import UserConeccted from "./UserConeccted";



window.fbAsyncInit = function() {
  window.FB.init({
    appId      : '933422631180070',
    cookie     : true,  
    xfbml      : true,  
    version    : 'v16.0' 
  });
}

const LoginFace = () => {
  const [isConnected, setIsConnected] = useState(false);
  //const { login, isLoading, status, error } = useLogin();
  //const { profile } = useProfile(['id', 'name']);

 /*  async function handleLogin() {
    try {
      const response = await login({
        scope: "email, public_profile",
        return_scopes: true,
      });
      setIsConnected(response.status);
      console.log("response:..", response);
      //console.log('profile:..',profile);
    } catch (error) {
      console.log(error.message);
    }
  } */

  const handleMyLogin = () => {

    
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
  };

  function handleLogout() {
    window.FB.logout((response) => {
      console.log(response);
      // user is now logged out
    });
  }

  return (
    <div>
      LoginFace
      <button onClick={handleMyLogin}>
        Login via Facebook
      </button>
      {/* {isConnected && <UserConeccted />} */}
      <button onClick={handleLogout}>LogOut Facebook</button>
    </div>
  );
};

export default LoginFace;
