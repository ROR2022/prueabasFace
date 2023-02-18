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
 

   const handleLogin = async()=>{
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

      
    } catch (error) {
      console.log(error.message);
    }
  } 

  

  const handleLogout = ()=>{
    window.FB.logout((response) => {
      setIsConnected(false);
      console.log(response);
      // user is now logged out
    });
  }

  

  return (
    <div>
      LoginFace
       <button onClick={handleLogin} disabled={isLoading}>
        Login via Facebook
      </button>
      {/*{isConnected && <UserConeccted />}*/}
      <hr />
      

      <hr />
      {isConnected && 
      <button onClick={handleLogout}>LogOut Facebook</button> }

      
    </div>
  );
};

export default LoginFace;
