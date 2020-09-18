import styled from 'styled-components'
import tw from 'twin.macro'

const StyledEmployeeForm = styled.form.attrs({
  className: 'flex flex-col  rounded w-120 p-8 border-gray-300',
})`
  label {
    ${tw`text-lg text-gray-700 font-bold`}
  }
  input,
  select {
    ${tw`bg-gray-300 p-4`}
  }
`

export { StyledEmployeeForm }
