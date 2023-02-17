import { useLogin, useProfile } from 'react-facebook';

const LoginFace = () => {
  const { login, isLoading} = useLogin();
  const { profile } = useProfile(['id', 'name']);

  async function handleLogin() {
    try {
      const response = await login({
        scope: 'email',
      });

      console.log('response:..',response);
      console.log('profile:..',profile);
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
      </div>
  )
}

export default LoginFace