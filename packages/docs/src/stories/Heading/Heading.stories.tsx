import type { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui-lucariozin/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Default heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
}
