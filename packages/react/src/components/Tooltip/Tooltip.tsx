import { ReactNode } from 'react'

import { Text } from '../Text'

import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from './Tooltip.styles'

export interface TooltipProps {
  children: ReactNode
  content: string
}

export const Tooltip = ({ children, content = '' }: TooltipProps) => {
  return (
    <Provider>
      <Root delayDuration={200}>
        <Trigger asChild>{children}</Trigger>

        <Portal>
          <Content>
            <Text size="sm" css={{ lineHeight: '$short' }}>
              {content}
            </Text>

            <Arrow />
          </Content>
        </Portal>
      </Root>
    </Provider>
  )
}
