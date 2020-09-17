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

      return { employees: state.employees.concat(newEmployee) }

    case ACTIONS.SET_EMPLOYEES:
      return { employees: action.payload.employees }
    case ACTIONS.REMOVE_EMPLOYEE:
      // find the index of the employee to remove
      const indexToRemove = state.employees.findIndex(
        (employee) => employee.id === action.payload
      )
      // remove the employee from the index
      return {
        employees: [
          ...state.employees.slice(0, indexToRemove),
          ...state.employees.slice(indexToRemove + 1),
        ],
      }
    case ACTIONS.UPDATE_EMPLOYEE:
      // find the index of the employee to update
      const indexToUpdate = state.employees.findIndex(
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
      return {
        employees: [
          ...state.employees.slice(0, indexToUpdate),
          updatedEmployee,
          ...state.employees.slice(indexToUpdate + 1),
        ],
      }

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
      return { error: action.payload }
    case ACTIONS.CLEAR_ERROR:
      return { error: {} }
    default:
      return state
  }
}

const fetchingReducer = (
  state: FetchingState = initialFetchingState,
  action: Action
): FetchingState => {
  switch (action.type) {
    case ACTIONS.FETCHING_EMPLOYEES:
      return { fetching: true }
    case ACTIONS.UPDATING_EMPLOYEE:
      return { fetching: true }
    case ACTIONS.REMOVING_EMPLOYEE:
      return { fetching: true }

    case ACTIONS.ADDING_EMPLOYEE:
      return { fetching: true }
    case ACTIONS.CANCEL_REQUEST:
      return { fetching: false }
    default:
      return state
  }
}

export default combineReducers({
  employeeReducer,
  errorReducer,
  fetchingReducer,
})
