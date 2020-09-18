import styled from 'styled-components'
import tw from 'twin.macro'

const StyledLoginPage = styled.div.attrs({
  className: 'flex justify-items-center w-full h-screen bg-gray-100 p-4 ',
})``

const StyledWelcomeContainer = styled.div.attrs({
  className: 'flex-1 flex flex-col items-center h-full  justify-center',
})`
  & {
    img {
      ${tw`w-64`}
    }
    div {
      ${tw`flex flex-col items-end`}

      span:first-child {
        ${tw`font-bold text-4xl`}
      }
      span:nth-child(2) {
        ${tw`text-sm`}
      }
    }
  }
`

const StyledLoginForm = styled.div.attrs({
  className: 'flex-1 flex flex-col justify-center',
})`
  & {
    div:first-child {
      ${tw` text-gray-900 text-2xl  `}
    }
    form {
      ${tw` mt-8  flex flex-col `}
      label {
        ${tw`text-xl`}
      }
    }
  }
`

const StyledInput = styled.input.attrs({})``

export { StyledLoginPage, StyledWelcomeContainer, StyledLoginForm }
