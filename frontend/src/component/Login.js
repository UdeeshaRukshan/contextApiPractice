import React, { useState, useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

function Login() {
  const { setUsername, setPasswords, setShowProfile } = useContext(LoginContext);
  const [username, setLocalUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
     // Update the global context with the username
    // Here you would typically send the username and password to your server
    //console.log(`Logging in with username: ${username} and password: ${password}`);
  };
  setUsername(username);
  setPasswords(password);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setLocalUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input onClick={()=>{setShowProfile(true)}} value="Login" />
      </form>
    </div>
  );
}

export default Login;
