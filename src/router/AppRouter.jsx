import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import UserStats from '../Pages/UserStats'
import SquadStats from '../Pages/SquadStats'


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/user" element={<UserStats />} />
        <Route path="/squad" element={<SquadStats />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
