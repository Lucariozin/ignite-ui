import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'

import { CheckboxIndicator, Container } from './Checkbox.styles'

export interface CheckboxProps extends ComponentProps<typeof Container> {}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <Container {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </Container>
  )
}
