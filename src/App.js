import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SearchPanel from './components/SearchPanel';

function App() {
  const [jwt, setJwt] = useState(null);

  const handleLoginSuccess = (token) => {
    setJwt(token);
  };

  return (
    <div>
      {!jwt ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <h1>Buscador de Licitaciones</h1>
          <SearchPanel jwt={jwt} />
        </>
      )}
    </div>
  );
}

export default App;