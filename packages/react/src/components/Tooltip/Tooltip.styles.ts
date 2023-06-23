import { keyframes, styled } from '../../styles'

import * as Tooltip from '@radix-ui/react-tooltip'

export const Provider = styled(Tooltip.Provider, {})

export const Root = styled(Tooltip.Root, {})

export const Trigger = styled(Tooltip.Trigger, {})

export const Portal = styled(Tooltip.Portal, {})

const fadeIn = keyframes({
  from: {
    opacity: '0',
  },
  to: {
    opacity: '1',
  },
})

const fadeOut = keyframes({
  from: {
    opacity: '1',
  },
  to: {
    opacity: '0',
  },
})

export const Content = styled(Tooltip.Content, {
  position: 'relative',

  padding: '$3 $4',

  borderRadius: '$sm',
  backgroundColor: '$gray900',

  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',

  '&[data-state="delayed-open"], &[data-state="instant-open"]': {
    animation: `${fadeIn} 0.3s`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 0.2s`,
  },

  '&[data-side="top"]': {
    bottom: '-0.8rem',
  },

  '&[data-side="bottom"]': {
    top: '-0.8rem',
  },
})

export const Arrow = styled(Tooltip.Arrow, {
  width: '$4',
  height: '$2',

  fill: '$gray900',
})
