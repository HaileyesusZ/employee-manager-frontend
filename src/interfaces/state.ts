import Employee from './employee'

export type EmployeeState = Employee[]

export type ErrorState = { message?: string }

export type FetchingState = boolean

export interface AppState {
  employees: EmployeeState
  errors: ErrorState
  fetching: FetchingState
}

const initialEmployeeState: EmployeeState = []
const initialErrorState: ErrorState = {}

const initialFetchingState: FetchingState = false

export { initialEmployeeState, initialErrorState, initialFetchingState }
