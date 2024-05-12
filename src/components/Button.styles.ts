import styled, {css} from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: 'green',
  secondary: 'blue',
  success: 'purple',
  danger: 'red'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;


  background-color: ${ props => props.theme.secondary}

  /*${props => {
    return css`
      background-color: ${buttonVariant[props.variant]}
      `
  }}*/
`