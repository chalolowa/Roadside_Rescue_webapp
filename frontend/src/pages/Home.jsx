import React from 'react'
import { useNavigate } from 'react-router-dom'
import homebg from '../assets/homebg.png'

const Home = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/register');
  }

  return (
    <div className='bg-scroll bg-center' style={{backgroundImage: `url(${homebg})`}}>
      <div className='py-4'>
        <h1 className='mb-5 text-5xl text-black font-bold'>Roadside Rescue Assistance</h1>
        <p className='mb-5 text-black text-xl'>Your reliable and professional roadside assistance service on Kenyan highways.</p>
        <button onClick={handleClick} className='p-2'>Get help</button>
      </div>
    </div>
  )
}

export default Home