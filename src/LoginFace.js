import { useState } from 'react';
import { useLogin } from 'react-facebook';
import UserConeccted from './UserConeccted';

const LoginFace = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { login, isLoading, status, error} = useLogin();
  //const { profile } = useProfile(['id', 'name']);

  async function handleLogin() {
    try {
      const response = await login({
        scope: 'email',
      });
      setIsConnected(response.status);
      console.log('response:..',response);
      //console.log('profile:..',profile);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      LoginFace
      <button onClick={handleLogin} disabled={isLoading}>
      Login via Facebook
    </button>
    <UserConeccted/>
      </div>
  )
}

export default LoginFace