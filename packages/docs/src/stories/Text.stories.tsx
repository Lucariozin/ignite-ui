import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui-lucariozin/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Normal text',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomElement: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
