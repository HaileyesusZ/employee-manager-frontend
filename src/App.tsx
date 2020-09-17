import React from 'react'
import { useDispatch } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { ACTIONS } from './store/actions'

function App() {
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <button
        className='px-8 bg-red-200 red py-4'
        onClick={() => dispatch({ type: ACTIONS.FETCHING_EMPLOYEES })}
      >
        {' '}
        Get Employees{' '}
      </button>
      <button className='px-8 bg-red-200 red py-4'> Hello </button>
      <button className='px-8 bg-red-200 red py-4'> Hello </button>
      <button className='px-8 bg-red-200 red py-4'> Hello </button>
    </div>
  )
}

export default App
