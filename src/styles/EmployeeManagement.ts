import styled from 'styled-components'
import tw from 'twin.macro'

const StyledEmployeeManagement = styled.div.attrs({
  className: 'flex flex-col flex-grow pl-24 pr-8  bg-gray-100 pt-16',
})`
  & {
  }
`
const StyledIntro = styled.div.attrs({
  className: 'flex justify-between items-center',
})`
  & {
    h2 {
      ${tw`font-medium text-gray-900 text-3xl`}
    }
    img {
      ${tw`h-16 w-16`}
    }
  }
`

const StyledSummary = styled.div.attrs({
  className: 'flex p-6 justify-around  items-center bg-teal-200 rounded',
})`
  & {
    div {
      ${tw`flex items-center`}
      span {
        ${tw`text-2xl`}
      }
      svg {
        ${tw`h-4 w-4 fill-current text-teal-900`}
      }
    }
  }
`

const StyledTableHead = styled.div.attrs({
  className: 'flex justify-between text-lg font-light justify-items-start px-4',
})`
  & {
    div {
      ${tw`flex-1`}
    }
  }
`

const StyledTableRow = styled.div.attrs({
  className:
    'flex justify-between justify-start text-lg font-light bg-gray-300 p-4 mt-2',
})`
  & {
    div {
      ${tw`flex-1`}
    }
  }
`

export {
  StyledEmployeeManagement,
  StyledIntro,
  StyledSummary,
  StyledTableHead,
  StyledTableRow,
}
