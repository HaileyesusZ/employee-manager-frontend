import Employee from '../interfaces/employee'
import User from '../interfaces/user'

// list of available action types
enum ACTIONS {
  MAKE_REQUEST = 'MAKE_REQUEST',
  CANCEL_REQUEST = 'CANCEL_REQUEST',
  FETCHING_EMPLOYEES = 'FETCHING_EMPLOYEES',
  SET_EMPLOYEES = 'SET_EMPLOYEES',

  ADDING_EMPLOYEE = 'ADDING_EMPLOYEE',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  UPDATING_EMPLOYEE = 'UPDATING_EMPLOYEE',
  UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEES',
  REMOVING_EMPLOYEE = 'REMOVING_EMPLOYEE',
  REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEES',
  CLEAR_ERROR = 'CLEAR_ERROR',
  SET_ERROR = 'SET_ERROR',
}

// action structure
export type Action = {
  type: ACTIONS
  payload?: any
}

// action creators

const makeRequest = (): Action => ({
  type: ACTIONS.MAKE_REQUEST,
})

const cancelRequest = (): Action => ({ type: ACTIONS.CANCEL_REQUEST })

const setError = (error: string): Action => {
  return {
    type: ACTIONS.SET_ERROR,
    payload: { message: error },
  }
}

const setEmployees = (employees: Employee[]): Action => ({
  type: ACTIONS.SET_EMPLOYEES,
  payload: employees,
})

const addEmployee = (employee: Employee): Action => ({
  type: ACTIONS.ADD_EMPLOYEE,
  payload: employee,
})

const updateEmployee = (employee: Employee): Action => ({
  type: ACTIONS.UPDATE_EMPLOYEE,
  payload: employee,
})

const removeEmployee = (id: number): Action => ({
  type: ACTIONS.REMOVE_EMPLOYEE,
  payload: id,
})

// const SWITCH_THEME = (email:string, password: string) : Action => ({type: ACTIONS.LOGIN, payload: {email, password}})

export {
  ACTIONS,
  setError,
  makeRequest,
  setEmployees,
  addEmployee,
  updateEmployee,
  removeEmployee,
  cancelRequest,
}
