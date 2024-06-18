import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMechanicDetails } from '../services/MechanicService';

const MechanicProfile = () => {
  const { mechanicId } = useParams();
  const [mechanic, setMechanic] = useState('');

  useEffect(() => {
    getMechanicDetails()
  }, [mechanicId])

  if (!mechanic) {
    return (
      <div>loading....</div>
    )
  }
  
  return (
    <div>
      <h2>{mechanic.fullName}</h2>
      <p>Email: {mechanic.email}</p>
      <p>Phone: {phoneNumber}</p>
      <Link to={`/request-assistance`}>Request assistance</Link>
    </div>
  )
}

export default MechanicProfile