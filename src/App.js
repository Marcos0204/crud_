import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './FIrebase/Credentials';
import Home from './components/Home';
import Logueo from './components/Logueo';



const App = () => {

  const [ userGlobal, setUserGlobal ] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
        setUserGlobal(user)
    } else {
      setUserGlobal(null)
    }
  });
  

  //funcion que se ejecutar al detectar autentificacion

  return (
    <div>
      {userGlobal ? <Home email={userGlobal.email}/> : <Logueo/>}
    </div>
  )
}

export default App
