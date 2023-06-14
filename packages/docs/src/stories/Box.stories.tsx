import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui-lucariozin/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Some text</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
