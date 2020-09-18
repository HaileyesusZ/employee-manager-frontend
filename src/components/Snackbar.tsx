import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../interfaces/state'
import { StyledSnackbar } from '../styles/Snackbar'
const container = document.getElementById('snackbar') as HTMLElement

const SnackBar: React.FC = () => {
  const fetching = useSelector<AppState, boolean>((state) => state.fetching)

  return fetching ? (
    ReactDOM.createPortal(
      <StyledSnackbar>
        <span> {'Request API, Please Wait ...'} </span>
      </StyledSnackbar>,
      container
    )
  ) : (
    <div></div>
  )
}

export default SnackBar
