import { TextInput } from '@ignite-ui/react'
import { Form } from './style'
import { ArrowRight } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

const UsernameFormSchema = z.object({
  username: z.string(),
})

type UsernameFormData = z.infer<typeof UsernameFormSchema>

export default function UsernameForm() {
  const { register, handleSubmit } = useForm<UsernameFormData>()

  async function handleUsernameFormSubmit(data: UsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleUsernameFormSubmit)}>
      <TextInput
        prefix="ignite.com/"
        placeholder="your user"
        size="sm"
        color=""
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        {...register('username')}
      />
      <button type="submit">
        Book
        <ArrowRight />
      </button>
    </Form>
  )
}
