import './App.css'

import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ApplyLeave from './pages/ApplyLeave'

function App() {

  return (
    <div className='container max-w-7xl mx-auto p-5'>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="apply-leave" element={<ApplyLeave />} />
      </Routes>
    </div>
  )
}

export default App
