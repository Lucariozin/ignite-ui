import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontWeight: 'bold',

  color: '$white',
  backgroundColor: '$ignite300',

  border: '0',
  borderRadius: '$sm',

  variants: {
    size: {
      small: {
        padding: '$2 $4',
        fontSize: '$sm',
      },
      big: {
        padding: '$3 $6',
        fontSize: '$md',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
