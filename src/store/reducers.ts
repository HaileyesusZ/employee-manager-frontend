import {
  FetchingState,
  EmployeeState,
  ErrorState,
  initialEmployeeState,
  initialFetchingState,
  initialErrorState,
} from '../interfaces/state'
import { combineReducers } from 'redux'
import { Action, ACTIONS } from './actions'

const employeeReducer = (
  state: EmployeeState = initialEmployeeState,
  action: Action
): EmployeeState => {
  switch (action.type) {
    case ACTIONS.ADD_EMPLOYEE:
      // construct an employee object
      const newEmployee = {
        id: action.payload.id,
        name: action.payload.name,
        gender: action.payload.gender,
        salary: action.payload.salary,
        dateOfBirth: action.payload.dateOfBirth,
      }

      return state.concat(newEmployee)

    case ACTIONS.SET_EMPLOYEES:
      return action.payload
    case ACTIONS.REMOVE_EMPLOYEE:
      // find the index of the employee to remove
      const indexToRemove = state.findIndex(
        (employee) => employee.id === action.payload
      )
      // remove the employee from the index
      return [
        ...state.slice(0, indexToRemove),
        ...state.slice(indexToRemove + 1),
      ]

    case ACTIONS.UPDATE_EMPLOYEE:
      // find the index of the employee to update
      const indexToUpdate = state.findIndex(
        (employee) => employee.id === action.payload.id
      )
      // construct an update employee object
      const updatedEmployee = {
        id: action.payload.id,
        name: action.payload.name,
        gender: action.payload.gender,
        salary: action.payload.salary,
        dateOfBirth: action.payload.dateOfBirth,
      }

      console.log('payload', action.payload)
      return [
        ...state.slice(0, indexToUpdate),
        updatedEmployee,
        ...state.slice(indexToUpdate + 1),
      ]

    default:
      return state
  }
}

const errorReducer = (
  state: ErrorState = initialErrorState,
  action: Action
): ErrorState => {
  switch (action.type) {
    case ACTIONS.SET_ERROR:
      return action.payload
    case ACTIONS.CLEAR_ERROR:
      return {}
    default:
      return state
  }
}

const fetchingReducer = (
  state: FetchingState = initialFetchingState,
  action: Action
): FetchingState => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return true
    case ACTIONS.FETCHING_EMPLOYEES:
      return true
    case ACTIONS.UPDATING_EMPLOYEE:
      return true
    case ACTIONS.REMOVING_EMPLOYEE:
      return true

    case ACTIONS.ADDING_EMPLOYEE:
      return true
    case ACTIONS.CANCEL_REQUEST:
      return false
    default:
      return state
  }
}

export default combineReducers({
  employees: employeeReducer,
  error: errorReducer,
  fetching: fetchingReducer,
})
