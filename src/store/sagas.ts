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
    const employees = yield call(requestData, URL.BASE_URL, null, 'GET')
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
    const addedEmployee = yield call(requestData, URL.BASE_URL, {
      name: action.payload.name,
      gender: action.payload.gender.toString(),
      salary: action.payload.salary,
      dateOfBirth: action.payload.dateOfBirth,
    })

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
    const updated = yield call(
      requestData,
      URL.BASE_URL + `/${action.payload._id}`,
      action.payload,
      'PATCH'
    )

    if (updated.hasOwnProperty('success')) {
      yield put(updateEmployee(action.payload))
    }
  } catch (error) {
    yield put(setError(error.message))
  } finally {
    yield put(cancelRequest())
  }
}
// a saga to fetch employees
function* removeEmployeeSaga(action: Action) {
  try {
    const removed = yield call(
      requestData,
      URL.BASE_URL + `/${action.payload}`,
      null,
      'DELETE'
    )

    if (removed.hasOwnProperty('success')) {
      yield put(removeEmployee(action.payload))
    }
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
