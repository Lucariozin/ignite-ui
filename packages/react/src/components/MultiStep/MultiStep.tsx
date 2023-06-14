import { Container, Label, Step, Steps } from './MultiStep.styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size = 1, currentStep = 1 }: MultiStepProps) => {
  const labelText = `Passo ${currentStep} de ${size}`

  const stepsArray = Array.from({ length: size }, (_, i) => i + 1)

  return (
    <Container>
      <Label>{labelText}</Label>

      <Steps css={{ '--steps-size': size }}>
        {stepsArray.map((step) => (
          <Step key={step} active={step <= currentStep} />
        ))}
      </Steps>
    </Container>
  )
}
