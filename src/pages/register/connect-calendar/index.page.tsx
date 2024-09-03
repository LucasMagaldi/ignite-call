import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Form, Header, InputBox } from './style'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading>Connect to your calendar</Heading>
        <Text>
          Connect your calendar to automatically check busy hours and new events
          as they are scheduled.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <Form as="form">
        <InputBox>
          <Text>Google Agenda</Text>
          <Button variant="secondary">
            <Text>Connect</Text>
            <ArrowRight />
          </Button>
        </InputBox>
        <Button disabled={true} type="submit">
          <Text>Next Step</Text>
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
