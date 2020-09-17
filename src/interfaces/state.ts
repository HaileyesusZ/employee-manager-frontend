import Employee from './employee'

export interface EmployeeState {
  employees: Employee[]
}
export interface ErrorState {
  error: { message?: string }
}

export interface FetchingState {
  fetching: boolean
}

const initialEmployeeState: EmployeeState = {
  employees: [],
}
const initialErrorState: ErrorState = {
  error: {},
}

const initialFetchingState: FetchingState = {
  fetching: false,
}

export { initialEmployeeState, initialErrorState, initialFetchingState }
