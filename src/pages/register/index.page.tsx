import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header } from './style'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Wellcome to Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form>
        <label>
          <Text>User name</Text>
          <TextInput
            prefix="igite.com/"
            placeholder="user name"
            crossOrigin={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </label>
        <label>
          <Text>Full name</Text>
          <TextInput
            placeholder="full name"
            crossOrigin={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </label>

        <Button>
          <Text>Next step</Text>
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
