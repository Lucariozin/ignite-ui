import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui-lucariozin/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          width: '4rem',
          height: '4rem',
          padding: '0.5rem',

          borderRadius: '0.5rem',
          backgroundColor: '#FFFFFF20',
        }}
      >
        <Story />
      </div>
    ),
  ],

  args: {
    src: 'https://github.com/Lucariozin.png',
    alt: 'Lucas Felix',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Fallback',
  },
}
