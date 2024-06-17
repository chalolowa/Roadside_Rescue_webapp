import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom'
import { Login, Register, MechanicProfile, RequestAssistance } from './pages/index'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/mechanic/:id" component={MechanicProfile} />
          <Route path="/request-assistance" component={RequestAssistance} />
        </Routes>
      </Switch>
    </BrowserRouter>
  )
}

export default App
