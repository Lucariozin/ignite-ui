import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',

  padding: '$3 $4',

  borderRadius: '$sm',
  boxSizing: 'border-box',

  backgroundColor: '$gray900',
  border: '2px solid $gray900',

  transition: 'border-color 0.2s',

  '&:has(input:focus-visible)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$regular',
  color: '$gray400',
})

export const Input = styled('input', {
  width: '100%',

  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$regular',

  border: '0',
  color: '$white',
  background: 'transparent',

  '&:placeholder': {
    color: '$gray400',
  },

  '&:focus-visible': {
    outline: '0',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
