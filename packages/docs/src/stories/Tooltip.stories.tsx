import type { Meta, StoryObj } from '@storybook/react'

import { Box, Button, Tooltip, TooltipProps } from '@ignite-ui-lucariozin/react'

export default {
  title: 'Informative/Tooltip',
  component: Tooltip,

  args: {
    children: <Button>Trigger</Button>,
    content: '26 de Outubro - Disponível',
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },

  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '12rem',
          height: '10rem',
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
