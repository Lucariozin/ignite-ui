import * as Checkbox from '@radix-ui/react-checkbox'

import { styled, keyframes } from '../../styles'

export const Container = styled(Checkbox.Root, {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 'none',

  width: '$6',
  height: '$6',
  lineHeight: '0',

  borderRadius: '$xs',
  boxSizing: 'border-box',
  backgroundColor: '$gray900',
  border: '1px solid $gray900',

  cursor: 'pointer',
  overflow: 'hidden',
  transition: 'border-color 0.2s, background-color 0.1s',

  '&:focus-visible': {
    border: '1px solid $ignite300',
  },

  '&:has(svg[data-state="checked"])': {
    border: '1px solid $ignite300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',

  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideIn} 0.2s ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 0.2s ease-out`,
  },
})
