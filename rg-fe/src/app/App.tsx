
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from '../features/landing/pages/LandingPage'
import DashboardPage from '../features/dashboard/pages/DashboardPage'
import GamePage from '../features/game/pages/GamePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
