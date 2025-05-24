import { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:8080/login', { email, password });
      onLogin(res.data);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#18192b'}}>
      <div id="welcome-container">
        <h1 style={{color: '#3fcf8e', marginBottom: '-12px'}}>Welcome to</h1>
        <h1 style={{color: '#3fcf8e'}}>
          <img 
            src="/BookMark_app_icon.png"
            alt="BookMark Logo"
            style={{marginBottom: '-12px', width: '80px'}}
          />ookMark!
        </h1>
        <h3 style={{color: '#3fcf8e'}}>Please login...</h3>
      </div>
      <div id="login-container">
        <input id="email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input id="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button id="login-button" type="submit">Login</button>
        {error && <div style={{color: 'red'}}>{error}</div>}
      </div>
    </form>
  );
} 