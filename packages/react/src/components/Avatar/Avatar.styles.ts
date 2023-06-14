import { styled } from '../../styles'

import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-flex',

  width: '$12',
  height: '$12',

  overflow: 'hidden',
  borderRadius: '$full',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',

  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',

  color: '$gray800',
  backgroundColor: '$gray600',

  svg: {
    width: '$6',
    height: '$6',
  },
})
