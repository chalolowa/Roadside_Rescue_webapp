import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RequestAssistance = () => {
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSubmit = () => {
    useEffect(async () => {
      await fetch("http://localhost:4000/api/request").then((res) => res.json()).catch(error);
    }, []);
    useNavigate('/dashboard');
  }

  return (
    <div>
      <h1>Requesting assistance</h1>
      <p>Please provide some details on your issue for easier assistance by the service provider.</p>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="phone">Phone Number (currently active)</label>
            <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="breakdown">Please select the nature of your vehicle problem</label>
            <div>
              <input type="checkbox" name="tyre" id="tyre" value="tyre" />
              <label htmlFor="problem1">Tyre puncture</label>
              <input type="checkbox" name="engine" id="engine" value="engine" />
              <label htmlFor="problem2">Engine problems</label>
              <input type="checkbox" name="suspension" value="suspension" />
              <label htmlFor="problem3">Suspension related issues</label>
              <input type="checkbox" name="tow" value="tow" />
              <label htmlFor="tow">Towing service</label>
            </div>
          </div>
          <button type="submit">Request</button>
        </form>
      </div>
      <p>Change yor mind? Aight let's go <Link to={`/dashboard`}>back</Link> and select another.</p>
    </div>
  )
}

export default RequestAssistance