import styled from 'styled-components'
import tw from 'twin.macro'

export interface SidePaneItemProps {
  name: string
}
const StyledSidePane = styled.div.attrs({
  className: 'flex flex-col  h-full bg-teal-700',
})``

const StyledProfile = styled.div.attrs({
  className: 'flex  p-4 items-center',
})`
  & {
    svg {
      ${tw`h-16 fill-current text-gray-300 `}
    }
    div {
      ${tw`flex flex-col text-gray-300`}
      h2 {
        ${tw`text-2xl font-bold`}
      }
    }
  }
`

const SidePaneItem = styled.div.attrs({
  className:
    'flex items-center py-8 px-6 bg-teal-900 hover:bg-teal-600 focus:bg-teal-600 transition duration-200 ease-out cursor-pointer',
})`
  & {
    svg {
      ${tw`h-8 w-8 fill-current text-gray-300`}
    }
    h3 {
      ${tw`text-gray-300 text-2xl`}
    }
  }
`

export { StyledSidePane, StyledProfile, SidePaneItem }
