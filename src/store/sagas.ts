import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  Action,
  ACTIONS,
  addEmployee,
  removeEmployee,
  setEmployees,
  setError,
  updateEmployee,
  cancelRequest,
} from './actions'
import { requestData, URL } from '../environment/api'

// a saga to fetch employees
function* fetchEmployeeSaga(action: Action) {
  try {
    const employees = yield call(
      requestData,
      URL.BASE_URL + URL.FETCH_EMPLOYEE_URL,
      action.payload
    )
    yield put(setEmployees(employees))
  } catch (error) {
    yield put(setError(error.message))
  } finally {
    yield put(cancelRequest())
  }
}
// a saga to add employee
function* addEmployeeSaga(action: Action) {
  try {
    const addedEmployee = yield call(
      requestData,
      URL.BASE_URL + URL.ADD_EMPLOYEE_URL,
      action.payload
    )
    yield put(addEmployee(addedEmployee))
  } catch (error) {
    yield put(setError(error.message))
  } finally {
    yield put(cancelRequest())
  }
}
// a saga to update employees
function* updateEmployeeSaga(action: Action) {
  try {
    yield call(requestData, URL.BASE_URL + URL.UPDATE_EMPLOYEE_URL, {
      id: action.payload.id,
      employee: action.payload.employee,
    })
    yield put(updateEmployee(action.payload.id, action.payload.employee))
  } catch (error) {
    yield put(setError(error.message))
  } finally {
    yield put(cancelRequest())
  }
}
// a saga to fetch employees
function* removeEmployeeSaga(action: Action) {
  try {
    yield call(requestData, URL.BASE_URL + URL.REMOVE_EMPLOYEE_URL, {
      id: action.payload.id,
    })

    yield put(removeEmployee(action.payload.id))
  } catch (error) {
    yield put(setError(error.message))
  } finally {
    yield put(cancelRequest())
  }
}

// the root saga
function* rootSaga() {
  yield all([
    yield takeLatest(ACTIONS.FETCHING_EMPLOYEES, fetchEmployeeSaga),
    yield takeLatest(ACTIONS.ADDING_EMPLOYEE, addEmployeeSaga),
    yield takeLatest(ACTIONS.UPDATING_EMPLOYEE, updateEmployeeSaga),
    yield takeLatest(ACTIONS.REMOVING_EMPLOYEE, removeEmployeeSaga),
  ])
}

export default rootSaga
