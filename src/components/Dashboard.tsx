import React from 'react'
import { StyledDashboard } from '../styles/Dashboard'
import '../assets/css/styles.css'
import { EmployeeManagement } from './EmployeeManagement'
import SidePane from './SidePane'

export const Dashboard: React.FC = () => {
  return (
    <StyledDashboard>
      <SidePane />
      <EmployeeManagement />
    </StyledDashboard>
  )
}

export default Dashboard
