import React, { useState } from 'react'
import { register } from '../services/AuthService';
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [role, setRole] = useState('');

  return (
    <div>
      <h1>Sign up let's get you help</h1>
      <div>
        <form onSubmit={register}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="id">National Identification number</label>
            <input type="number" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="role">Select a role</label>
            <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="mechanic">Service provider</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <p>Already a customer? Let's <Link to={`/login`}>log you in</Link>...</p>
    </div>
  )
}

export default Register