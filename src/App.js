import React, { useState } from 'react';
import Home from './components/Home';
import Logueo from './components/Logueo';


const App = () => {

  const [ userGlobal, setUserGlobal ] = useState(false);


  //funcion que se ejecutar al detectar autentificacion

  return (
    <div>
      {userGlobal ? <Home email={userGlobal.email}/> : <Logueo/>}
    </div>
  )
}

export default App
