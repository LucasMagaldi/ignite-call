import { TextInput } from '@ignite-ui/react'
import { Form } from './style'
import { ArrowRight } from 'phosphor-react'

export default function UsernameForm() {
  return (
    <Form as="form">
      <TextInput
        prefix="ignite.com/"
        placeholder="your user"
        size="sm"
        color=""
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <button type="submit">
        Book
        <ArrowRight />
      </button>
    </Form>
  )
}
