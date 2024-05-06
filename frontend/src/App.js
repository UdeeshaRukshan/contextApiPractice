
import './App.css';
import { useState} from 'react';
import { LoginContext } from './contexts/LoginContext';
import Profile from './component/Profile';
import Login from './component/Login';
function App() {

  const [showProfile,setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [passwords, setPasswords] = useState("");
  return (
    <div className="App">
     <LoginContext.Provider value={{username, passwords, setPasswords, setUsername, setShowProfile}}>

        {showProfile ? <Profile /> : <Login/> }
      </LoginContext.Provider>
    </div>
  );
}

export default App;
