
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from '../features/landing/pages/LandingPage'
import DashboardPage from '../features/dashboard/pages/DashboardPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
