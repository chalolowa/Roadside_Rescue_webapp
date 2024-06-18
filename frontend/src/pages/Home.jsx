import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/register');
  }

  return (
    <div>
      <div>
        <h1>Roadside Rescue Assistance</h1>
        <p>Your reliable and professional roadside assistance service on Kenyan highways.</p>
        <button onClick={handleClick}>Get help</button>
      </div>
    </div>
  )
}

export default Home