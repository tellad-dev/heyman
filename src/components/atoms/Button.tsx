import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  width?: string
  height?: string
  borderRadius?: string
  color?: string
  backgroundColor?: string
  margin?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  fontSize?: string
}

const StyledButton = styled.button<
  Pick<
    ButtonProps,
    | 'width'
    | 'height'
    | 'borderRadius'
    | 'color'
    | 'backgroundColor'
    | 'margin'
    | 'disabled'
    | 'fontSize'
  >
>`
  border: 0;
  outline: 0;
  box-shadow: none;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  padding: auto;
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  transition: all 0.2s ease-in-out;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: ${({ margin }) => margin};
  &:active {
    background-color: #135aa1;
  }
`

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  width,
  height,
  borderRadius,
  color,
  backgroundColor,
  margin,
  onClick,
  disabled,
  fontSize,
}) => {
  return (
    <StyledButton
      className={className}
      width={width}
      height={height}
      borderRadius={borderRadius}
      color={color}
      backgroundColor={backgroundColor}
      margin={margin}
      onClick={onClick}
      disabled={disabled}
      fontSize={fontSize}
    >
      {children}
    </StyledButton>
  )
}

export default Button
