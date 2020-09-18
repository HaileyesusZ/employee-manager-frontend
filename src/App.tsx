import React from 'react'
import Dashboard from './components/Dashboard'
import Snackbar from './components/Snackbar'
const App: React.FC = () => {
  return (
    <div className='App'>
      <Dashboard />
      <Snackbar />
    </div>
  )
}

export default App
