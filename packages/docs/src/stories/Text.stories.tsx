import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui-lucariozin/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Normal text',
    size: 'md',
    as: 'p',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
    },
    as: {
      control: 'text',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomElement: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
