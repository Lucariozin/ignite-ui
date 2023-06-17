import type { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui-lucariozin/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Default heading',
    size: 'md',
    as: 'h2',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: 'inline-radio',
    },
    as: {
      control: 'text',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
}
