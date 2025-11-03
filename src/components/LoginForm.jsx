// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const user = await Auth.signIn(email, password);
      const jwt = user.signInUserSession.idToken.jwtToken;
      onLoginSuccess(jwt);
    } catch (err) {
      console.error("❌ Error de login:", err);
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleLogin} style={styles.form}>
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Entrar</button>
      {error && <p style={styles.error}>{error}</p>}
    </form>
  );
};

const styles = {
  form: { maxWidth: '400px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.5rem', fontSize: '1rem' },
  button: { padding: '0.5rem', background: '#007bff', color: '#fff', border: 'none' },
  error: { color: 'red' }
};

export default LoginForm;