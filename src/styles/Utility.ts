import styled from 'styled-components'
import tw from 'twin.macro'

// types
export interface SizedBoxProps {
  height?: number
  width?: number
}
export interface IconProps {
  size?: number
  color?: string
  hoverColor?: string
  disabled?: boolean
}

export interface AlignSelfProps {
  align?: string
}

export interface ButtonProps {
  width?: number
}

export interface FlexProps {
  vertical?: boolean
}

// styled components

const StyledSizedBox = styled.div.attrs<SizedBoxProps>(
  ({ height = 1, width = 1 }) => ({
    className: `h-${height} w-${width}`,
  })
)<SizedBoxProps>``

const StyledButton = styled.button.attrs<ButtonProps>(({ width = 56 }) => ({
  className: `flex items-center justify-evenly px-3 py-2 w-${width} bg-teal-900 text-gray-300 text-2xl rounded hover:bg-teal-600 transition duration-200 ease-out cursor-pointer`,
}))<ButtonProps>`
  & {
    svg {
      ${tw`w-6 h-6 fill-current`}
    }
  }
`

const StyledFlex = styled.div.attrs<FlexProps>(({ vertical = false }) => ({
  className: `flex ${vertical ? 'flex-col' : ''} justify-start gap-4`,
}))<FlexProps>``

const StyledAlignSelf = styled.div.attrs<AlignSelfProps>(({ align = '' }) => ({
  className: `${align}`,
}))<AlignSelfProps>``

const StyledIcon = styled.svg.attrs<IconProps>(
  ({ size = 0, color = '', hoverColor = '', disabled = false }) => ({
    className: `h-${size} w-${size} fill-current text-${
      disabled ? 'gray-500' : color
    } hover:text-${hoverColor} transition duration-300 ease-out`,
    viewBox: '0 0 20 20',
  })
)<IconProps>``

export { StyledSizedBox, StyledButton, StyledAlignSelf, StyledIcon, StyledFlex }
