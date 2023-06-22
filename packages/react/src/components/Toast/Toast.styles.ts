import * as Toast from '@radix-ui/react-toast'

import { styled, keyframes } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

const slideIn = keyframes({
  from: {
    opacity: '0',
    transform: 'translateX(calc(100% + 2rem))',
  },
  to: {
    opacity: '1',
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    opacity: '1',
    transform: 'translateX(0)',
  },
  to: {
    opacity: '0',
    transform: 'translateX(calc(100% + 2rem))',
  },
})

export const Container = styled(Toast.Root, {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  padding: '$3 1.25rem $5',

  borderRadius: '$sm',
  border: '1px solid $gray600',
  backgroundColor: '$gray800',

  outline: '0',
  transition: 'border-color 0.2s',

  '&:focus-visible': {
    border: '1px solid $ignite300',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms`,
  },

  '&[data-state="closed"]': {
    animation: `${swipeOut} 150ms`,
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Title = styled(Toast.Title, {
  margin: '0',
  lineHeight: '$base',

  fontSize: '$xl',
  fontWeight: '$bold',
  fontFamily: '$default',

  color: '$white',
})

export const Description = styled(Toast.Description, {
  margin: '0',
  lineHeight: '0',

  fontSize: '$sm',
  fontFamily: '$default',

  color: '$gray200',
})

export const Close = styled(Toast.Close, {
  all: 'unset',

  lineHeight: '0',
  marginRight: '-0.5rem',
  padding: '$1',

  color: '$gray200',
  borderRadius: '$full',

  cursor: 'pointer',
  transition: 'color 0.2s, background-color 0.2s',

  '&:hover, &:focus-visible': {
    color: '$ignite300',
    backgroundColor: '$igniteWeak',
  },
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: '9999',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  minWidth: '22.5rem',
  maxWidth: '40rem',

  outline: '0',

  '@media (max-width: 430px)': {
    right: '1rem',

    minWidth: 'auto',
    width: 'calc(100vw - 2rem)',
  },
})
