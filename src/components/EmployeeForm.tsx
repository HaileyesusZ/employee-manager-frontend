import React, { createRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactDOM from 'react-dom'
import Employee from '../interfaces/employee'
import {
  addEmployee,
  updateEmployee,
  makeRequest,
  cancelRequest,
} from '../store/actions'
import { StyledEmployeeForm } from '../styles/EmployeeForm'
import {
  StyledAlignSelf,
  StyledButton,
  StyledIcon,
  StyledSizedBox,
} from '../styles/Utility'
import { AppState } from '../interfaces/state'

interface EmployeeFormProps {
  handleCloseModal: () => void
  employee?: Employee | undefined
}

const container = document.getElementById('modal') as HTMLElement

export const EmployeeForm = ({
  handleCloseModal,
  employee,
}: EmployeeFormProps) => {
  const [gender, setGender] = useState<number>(employee ? employee.gender : 0)
  const [name, setName] = useState<string>(employee ? employee.name : '')
  const [salary, setSalary] = useState<number>(employee ? employee.salary : 0)
  const [dateOfBirth, setDateOfBirth] = useState<string>(
    employee ? employee.dateOfBirth : ''
  )

  const fetching = useSelector<AppState, boolean>((state) => state.fetching)

  const dispatch = useDispatch()

  // refs for the form inputs
  const formRef = createRef<HTMLFormElement>()

  const validate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): boolean => {
    // prevent default form behavior
    e.preventDefault()
    // validate form
    formRef.current?.reportValidity()
    return (
      name !== '' &&
      (gender === 0 || gender === 1) &&
      dateOfBirth !== '' &&
      dateOfBirth.length === 10 &&
      salary !== 0
    )
  }

  const handleUpdateEmployee = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    if (validate(e)) {
      dispatch(makeRequest())

      setTimeout(() => {
        dispatch(
          updateEmployee({
            id,
            name,
            gender,
            dateOfBirth,
            salary,
          })
        )

        dispatch(cancelRequest())
      }, 2000)

      handleCloseModal()
    }
  }

  const handleAddEmployee = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (validate(e)) {
      dispatch(makeRequest())
      setTimeout(() => {
        dispatch(
          addEmployee({
            id: Math.random() * 1e12,
            name,
            gender,
            dateOfBirth,
            salary,
          })
        )
        handleCloseModal()
        dispatch(cancelRequest())
      }, 2000)

      setName('')
      setGender(0)
      setSalary(0)
      setDateOfBirth('')
    }
  }

  return ReactDOM.createPortal(
    <StyledEmployeeForm ref={formRef}>
      <StyledAlignSelf align='self-end'>
        <StyledIcon
          size={4}
          color='gray-800'
          hoverColor='red-800'
          onClick={handleCloseModal}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
          </svg>
        </StyledIcon>
      </StyledAlignSelf>
      <label htmlFor='name'>Name</label>
      <StyledSizedBox height={2} />
      <input
        required
        name='name'
        type='text'
        placeholder='Haileyesus Zemed'
        value={name?.toString()}
        onChange={(e) => setName(e.target.value)}
      />
      <StyledSizedBox height={6} />
      <label htmlFor='gender'>Gender</label>
      <select
        required
        name='gender'
        value={gender?.toString()}
        onChange={(e) => setGender(parseInt(e.target.value))}
      >
        <option value={0}> Female </option>
        <option value={1}> Male </option>
      </select>
      <StyledSizedBox height={6} />
      <label htmlFor='salary'>Salary</label>
      <input
        required
        name='salary'
        type='number'
        placeholder='4000'
        value={salary || ''}
        onChange={(e) => setSalary(parseInt(e.target.value))}
      />
      <StyledSizedBox height={6} />
      <label htmlFor='dateOfBirth'>Date of Birth</label>
      <input
        required
        name='dateOfBirth'
        type='date'
        placeholder='20/12/2020'
        value={dateOfBirth}
        disabled={fetching}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <StyledSizedBox height={6} />

      <StyledButton
        width={40}
        disabled={fetching}
        onClick={(e) =>
          employee ? handleUpdateEmployee(e, employee.id) : handleAddEmployee(e)
        }
      >
        <span> {employee ? 'Update Now' : 'Add Now'} </span>
      </StyledButton>
    </StyledEmployeeForm>,
    container
  )
}
