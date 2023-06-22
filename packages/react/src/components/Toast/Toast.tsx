import { X } from 'phosphor-react'

import {
  Title,
  Close,
  Content,
  Viewport,
  Container,
  Description,
  ToastProvider,
} from './Toast.styles'

export interface ToastProps {
  title: string
  description: string

  open: boolean
  setOpen: (open: boolean) => void
}

export const Toast = ({
  title = '',
  description = '',
  open = false,
  setOpen = () => {},
}: ToastProps) => {
  return (
    <ToastProvider swipeDirection="right">
      <Container open={open} onOpenChange={setOpen}>
        <Content>
          <Title as="strong">{title}</Title>

          <Description as="p">{description}</Description>
        </Content>

        <Close>
          <X size={20} />
        </Close>
      </Container>

      <Viewport />
    </ToastProvider>
  )
}
