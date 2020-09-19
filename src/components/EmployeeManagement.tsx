import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../interfaces/state'
import { getEmployeesRequest, removeEmployeeRequest } from '../store/actions'
import {
  StyledEmployeeManagement,
  StyledIntro,
  StyledTableHead,
  StyledTableRow,
  StyledSummary,
} from '../styles/EmployeeManagement'
import {
  StyledSizedBox,
  StyledButton,
  StyledIcon,
  StyledAlignSelf,
  StyledFlex,
} from '../styles/Utility'
import { EmployeeForm } from './EmployeeForm'

export interface EmployeeManagementProps {}

export function EmployeeManagement(props: EmployeeManagementProps) {
  // state to show modal
  const [showModal, setShowModal] = useState<boolean>(false)
  // state to set current employee index for update
  const [currentEmployeeId, setCurrentEmployeeId] = useState<string>('')
  // current app state
  const state = useSelector<AppState, AppState>((state) => state)
  const dispatch = useDispatch()

  //  run at app start
  useEffect(() => {
    dispatch(getEmployeesRequest())
  }, [dispatch])

  const handleOpenAddEmployeeForm = () => {
    setCurrentEmployeeId('')
    setShowModal(true)
  }
  const handleCloseAddEmployeeForm = () => {
    setShowModal(false)
  }

  const handleEditEmployee = (id: string) => {
    if (!showModal) {
      setCurrentEmployeeId(id)
      setShowModal(true)
    }
  }
  const handleRemoveEmployee = (id: string) => {
    if (!showModal) {
      dispatch(removeEmployeeRequest(id))
    }
  }
  const handleFetchEmployees = () => {
    dispatch(getEmployeesRequest())
  }

  return (
    <StyledEmployeeManagement>
      {showModal && (
        <EmployeeForm
          handleCloseModal={handleCloseAddEmployeeForm}
          employee={state.employees.find(
            (employee) => employee._id === currentEmployeeId
          )}
        />
      )}

      <StyledIntro>
        <h2>Manage Employees</h2>
        <img src='/images/logo.png' alt='Addis Software Logo' />
      </StyledIntro>
      <StyledSizedBox height={2} />
      <hr />
      <StyledSizedBox height={8} />

      <StyledSummary>
        <div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z' />
          </svg>
          <StyledSizedBox width={4} />
          <span>{state.employees.length} employees</span>
        </div>
        <div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z' />
          </svg>
          <StyledSizedBox width={4} />
          <span>
            {`${
              state.employees.filter((employee) => employee.gender === 0).length
            } females`}
          </span>
        </div>
        <div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z' />
          </svg>
          <StyledSizedBox width={4} />
          <span>
            {`${
              state.employees.filter((employee) => employee.gender === 1).length
            } males`}
          </span>
        </div>
      </StyledSummary>

      <StyledAlignSelf align='self-end'>
        <StyledSizedBox height={12} />
        <StyledButton width={56} onClick={handleOpenAddEmployeeForm}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' />
          </svg>

          <span>Add Employee</span>
        </StyledButton>
        <StyledSizedBox width={8} />
      </StyledAlignSelf>

      <StyledSizedBox height={6} />

      {state.employees.length ? (
        <div>
          <StyledTableHead>
            <div>Number</div>
            <div>Name</div>
            <div>Gender</div>
            <div>Date of Birth</div>
            <div>Salary</div>
            <div>Actions</div>
          </StyledTableHead>
          {state.employees.map((employee, i) => (
            <StyledTableRow key={employee._id || i}>
              <div>{i + 1}</div>
              <div>{employee.name}</div>
              <div>{employee.gender ? 'Male' : 'Female'}</div>
              <div>{employee.dateOfBirth.substr(0, 10)}</div>
              <div>
                {employee.salary} / <small>month</small>
              </div>
              <StyledFlex>
                <StyledIcon
                  size={4}
                  color='teal-500'
                  hoverColor='teal-900'
                  disabled={showModal || state.fetching}
                  onClick={() => handleEditEmployee(employee._id)}
                >
                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'> */}
                  <path d='M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z' />
                  {/* </svg> */}
                </StyledIcon>

                <StyledIcon
                  size={4}
                  color='red-500'
                  hoverColor='red-900'
                  disabled={showModal || state.fetching}
                  onClick={() => handleRemoveEmployee(employee._id)}
                >
                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'> */}
                  <path d='M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z' />
                  {/* </svg> */}
                </StyledIcon>
              </StyledFlex>
            </StyledTableRow>
          ))}
        </div>
      ) : (
        <StyledFlex vertical={true}>
          <h3> No registered employees found</h3>
          <StyledButton
            width={40}
            disabled={showModal || state.fetching}
            onClick={handleFetchEmployees}
          >
            <StyledIcon size={4}>
              <path d='M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z' />
            </StyledIcon>
            <span>Refresh</span>
          </StyledButton>
        </StyledFlex>
      )}
    </StyledEmployeeManagement>
  )
}
