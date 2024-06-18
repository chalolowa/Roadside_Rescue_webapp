import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, MechanicProfile, RequestAssistance, Home, Dashboard } from './pages/index'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mechanic/:id" element={<MechanicProfile />} />
          <Route path="/request-assistance" element={<RequestAssistance />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
