import { useState } from 'react'

import type { StoryObj, Meta } from '@storybook/react'

import { Toast, ToastProps, Button } from '@ignite-ui-lucariozin/react'

export default {
  title: 'Informative/Toast',
  component: Toast,

  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },

  decorators: [
    (Story, { args }) => {
      const [open, setOpen] = useState(false)

      const showToast = () => setOpen(true)

      return (
        <>
          <Button onClick={showToast}>Show toast</Button>

          <Story
            args={{
              ...args,
              open,
              setOpen,
            }}
          />
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
