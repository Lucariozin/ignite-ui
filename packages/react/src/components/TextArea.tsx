import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  minHeight: '80px',
  padding: '$3 $4',

  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$regular',
  color: '$white',

  resize: 'vertical',
  boxSizing: 'border-box',

  border: '2px solid $gray900',
  borderRadius: '$sm',
  backgroundColor: '$gray900',

  transition: 'border-color 0.2s',

  '&:placeholder': {
    color: '$gray400',
  },

  '&:focus-visible': {
    outline: '0',
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
