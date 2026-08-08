import { useNavigate } from 'react-router-dom';

export default function useNavigator() {
  const navigate = useNavigate();

  const login = () => {
    console.log('Login Success');

    navigate('/dashboard');
  };

  return <button onClick={login}>Login</button>;
}
