import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui-lucariozin/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,

  args: {},

  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Comment</Text>

        <Story />
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your comment',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your comment',
    disabled: true,
  },
}
