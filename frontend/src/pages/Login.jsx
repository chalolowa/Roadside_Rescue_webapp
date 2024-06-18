import React, { useState } from 'react'
import { login } from '../services/AuthService';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Jump back in</h1>
      <div>
        <form onSubmit={login}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <p>Not yet signed up? <Link to={`/register`}>Register</Link></p>
    </div>
  )
}

export default Login