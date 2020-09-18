import Employee from './employee'

export type EmployeeState = Employee[]

export type ErrorState = { message?: string }

export type FetchingState = boolean

export interface AppState {
  employees: EmployeeState
  errors: ErrorState
  fetching: FetchingState
}

const initialEmployeeState: EmployeeState = [
  {
    id: 788,
    name: 'haileyesus',
    salary: 11000,
    gender: 1,
    dateOfBirth: '2020-09-12',
  },
]
const initialErrorState: ErrorState = {}

const initialFetchingState: FetchingState = false

export { initialEmployeeState, initialErrorState, initialFetchingState }
